import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles';
import { useOrders, Order, OrderStatus } from '../context/OrdersContext';
import Bottom_tab_bar from '../components/Bottom_tab_bar';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const tabs = [
  { key: 'All', label: 'All Order' },
  { key: 'ToReceive', label: 'To Receive' },
  { key: 'ToPay', label: 'To Pay' },
] as const;

const statusMap: Record<(typeof tabs)[number]['key'], OrderStatus | null> = {
  All: null,
  ToReceive: 'To Receive',
  ToPay: 'To Pay',
};

const badgeStyleFor = (status: OrderStatus) => {
  if (status === 'To Pay') {
    return { box: styles.orderStatusBadgeToPay, text: styles.orderStatusBadgeTextToPay };
  }
  if (status === 'To Receive') {
    return { box: styles.orderStatusBadgeToReceive, text: styles.orderStatusBadgeTextToReceive };
  }
  return { box: styles.orderStatusBadgeCompleted, text: styles.orderStatusBadgeTextCompleted };
};

export default function Order_status_screen({ navigation, route }: any) {
  const { orders } = useOrders();
  const initialFilter = route?.params?.filter ?? 'All';
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['key']>(initialFilter);

  const targetStatus = statusMap[activeTab];
  const filteredOrders = targetStatus ? orders.filter((o) => o.status === targetStatus) : orders;

  const renderOrder = (order: Order) => {
    const badge = badgeStyleFor(order.status);
    const subtitleParts = [order.color, order.size, order.material].filter(Boolean);

    return (
      <View key={order.id} style={styles.orderCard}>
        <View style={styles.orderCardThumb}>
          <Text style={styles.orderCardThumbEmoji}>🛋️</Text>
        </View>
        <View style={styles.orderCardInfo}>
          <View style={styles.orderCardNameRow}>
            <Text style={styles.orderCardName}>
              {order.quantity} × {order.item.name}
            </Text>
            <View style={[styles.orderStatusBadge, badge.box]}>
              <Text style={[styles.orderStatusBadgeText, badge.text]}>{order.status}</Text>
            </View>
          </View>
          <Text style={styles.orderCardSubtitle}>{subtitleParts.join(', ')}</Text>
          <View style={styles.orderCardFooterRow}>
            <Text style={styles.orderCardPrice}>{formatPrice(order.total)}</Text>
            <Text style={styles.orderCardDate}>{order.preferredDate}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerLogo}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.headerLogoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerBrand}>Casa Craft</Text>
        </View>

        <View style={styles.orderStatusTabRow}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.orderStatusTab, activeTab === tab.key && styles.orderStatusTabActive]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.orderStatusTabText,
                  activeTab === tab.key && styles.orderStatusTabTextActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {filteredOrders.length === 0 ? (
          <View style={styles.emptyStateWrapper}>
            <Text style={styles.emptyStateEmoji}>🛋️</Text>
            <Text style={styles.emptyStateText}>
              {activeTab === 'All'
                ? "You haven't reserved anything yet."
                : `No orders in "${tabs.find((t) => t.key === activeTab)?.label}" right now.`}
            </Text>
          </View>
        ) : (
          filteredOrders.map(renderOrder)
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      <Bottom_tab_bar active="Profile" navigation={navigation} />
    </View>
  );
}