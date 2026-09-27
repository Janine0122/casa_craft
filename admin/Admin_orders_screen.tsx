import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { adminOrders as initialOrders, AdminOrder, AdminOrderStatus } from './admin_orders_data';
import Admin_tab_bar from './Admin_tab_bar';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const filters = ['All', 'To approve', 'Deposit due', 'In production', 'Ready', 'Done'] as const;
type FilterKey = (typeof filters)[number];

const matchesFilter = (order: AdminOrder, filter: FilterKey) => {
  switch (filter) {
    case 'All':
      return true;
    case 'To approve':
      return order.status === 'Awaiting approval';
    case 'Deposit due':
      return (
        order.status === 'Scheduled' &&
        (order.amountPaid ?? 0) < (order.orderTotal ?? 0)
      );
    case 'In production':
      return order.status === 'Scheduled';
    case 'Ready':
      return order.status === 'Ready for pickup';
    case 'Done':
      return order.status === 'Completed';
    default:
      return true;
  }
};

const statusPillStyle = (status: AdminOrderStatus) => {
  switch (status) {
    case 'Awaiting approval':
      return { box: styles.orderStatusPillAwaiting, text: styles.orderStatusPillTextAwaiting, label: 'Awaiting approval' };
    case 'Scheduled':
      return { box: styles.orderStatusPillScheduled, text: styles.orderStatusPillTextScheduled, label: 'Scheduled' };
    case 'Ready for pickup':
      return { box: styles.orderStatusPillReady, text: styles.orderStatusPillTextReady, label: 'Ready for pickup' };
    case 'Completed':
      return { box: styles.orderStatusPillCompleted, text: styles.orderStatusPillTextCompleted, label: 'Completed' };
  }
};

export default function Admin_orders_screen({ navigation }: any) {
  const [orders, setOrders] = useState<AdminOrder[]>(initialOrders);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');

  const counts: Record<FilterKey, number> = {
    All: orders.length,
    'To approve': orders.filter((o) => matchesFilter(o, 'To approve')).length,
    'Deposit due': orders.filter((o) => matchesFilter(o, 'Deposit due')).length,
    'In production': orders.filter((o) => matchesFilter(o, 'In production')).length,
    Ready: orders.filter((o) => matchesFilter(o, 'Ready')).length,
    Done: orders.filter((o) => matchesFilter(o, 'Done')).length,
  };

  const filteredOrders = orders.filter((o) => matchesFilter(o, activeFilter));

  const handleApprove = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: 'Scheduled', amountPaid: 0 } : o))
    );
  };

  const handleDecline = (id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const handleMarkPickedUp = (id: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id
          ? { ...o, status: 'Completed', completedNote: 'Picked up today', amountPaid: o.orderTotal }
          : o
      )
    );
  };

  const handleMarkDelivered = (id: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id
          ? { ...o, status: 'Completed', completedNote: 'Delivered today', amountPaid: o.orderTotal }
          : o
      )
    );
  };

  const renderOrder = (order: AdminOrder) => {
    const pill = statusPillStyle(order.status);

    return (
      <View key={order.id} style={styles.orderCardWrapper}>
        <View style={styles.orderCardTopRow}>
          <Text style={styles.orderCode}>{order.code}</Text>
          <View style={pill.box}>
            <Text style={pill.text}>{pill.label}</Text>
          </View>
        </View>

        <View style={styles.orderCustomerRow}>
          <Text style={styles.orderCustomerName}>{order.customerName}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminOrderDetails', { order })}>
            <Text style={styles.orderDetailsLink}>Details ›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orderProductRow}>
          <Text style={styles.orderProductIcon}>🛋️</Text>
          <Text style={styles.orderProductLabel}>{order.productLabel}</Text>
        </View>

        {order.status === 'Awaiting approval' && (
          <>
            <View style={styles.orderMetaRow}>
              <Text style={styles.orderMetaIcon}>🕐</Text>
              <Text style={styles.orderMetaText}>{order.requestedAgo}</Text>
            </View>

            <View style={styles.changesBox}>
              <Text style={styles.changesBoxTitle}>Requested changes</Text>
              {order.changes?.map((c) => (
                <View key={c.label} style={styles.changeRow}>
                  <Text style={styles.changeLabel}>{c.label}</Text>
                  <Text style={styles.changeValue}>
                    {c.from} → {c.to}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.newPriceRow}>
              <Text style={styles.newPriceLabel}>New price</Text>
              <Text style={styles.newPriceValue}>{formatPrice(order.newPrice ?? 0)}</Text>
              {order.priceDelta ? (
                <Text style={styles.newPriceDelta}>+{formatPrice(order.priceDelta)}</Text>
              ) : null}
            </View>

            <View style={styles.quotationActionRow}>
              <TouchableOpacity style={styles.declineButton} onPress={() => handleDecline(order.id)}>
                <Text style={styles.declineButtonText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.approveButton} onPress={() => handleApprove(order.id)}>
                <Text style={styles.approveButtonText}>Approve request</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {(order.status === 'Scheduled' || order.status === 'Ready for pickup') && (
          <>
            <View style={styles.orderMetaRow}>
              <Text style={styles.orderMetaIcon}>{order.fulfillmentType === 'Pickup' ? '🏬' : '🚚'}</Text>
              <Text style={styles.orderMetaText}>{order.fulfillmentNote}</Text>
            </View>

            <View style={styles.paymentProgressRow}>
              <Text style={styles.paymentProgressLabel}>
                Paid {formatPrice(order.amountPaid ?? 0)} of {formatPrice(order.orderTotal ?? 0)}
              </Text>
              {order.amountPaid === order.orderTotal ? (
                <Text style={styles.paymentProgressLabelPaidFull}>✓ Paid in full</Text>
              ) : (
                <Text style={styles.paymentProgressLabelBalance}>
                  Balance {formatPrice((order.orderTotal ?? 0) - (order.amountPaid ?? 0))}
                </Text>
              )}
            </View>
            <View style={styles.paymentProgressTrack}>
              <View
                style={[
                  styles.paymentProgressFill,
                  {
                    width: `${
                      order.orderTotal ? Math.min(100, ((order.amountPaid ?? 0) / order.orderTotal) * 100) : 0
                    }%`,
                  },
                ]}
              />
            </View>

            {order.status === 'Ready for pickup' ? (
              <TouchableOpacity
                style={styles.fulfillmentActionButton}
                onPress={() => handleMarkPickedUp(order.id)}
              >
                <Text style={styles.fulfillmentActionButtonText}>Mark picked up</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.fulfillmentActionButton}
                onPress={() => handleMarkDelivered(order.id)}
              >
                <Text style={styles.fulfillmentActionButtonText}>Mark delivered</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {order.status === 'Completed' && (
          <>
            <View style={styles.orderMetaRow}>
              <Text style={styles.orderMetaIcon}>📦</Text>
              <Text style={styles.orderMetaText}>{order.completedNote}</Text>
            </View>
            <View style={styles.paymentProgressRow}>
              <Text style={styles.paymentProgressLabel}>
                Paid {formatPrice(order.amountPaid ?? 0)} of {formatPrice(order.orderTotal ?? 0)}
              </Text>
              <Text style={styles.paymentProgressLabelPaidFull}>✓ Paid in full</Text>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.adminHeaderRow}>
          <TouchableOpacity style={styles.adminHeaderIconButton}>
            <Text style={styles.adminHeaderIconText}>📥</Text>
          </TouchableOpacity>
          <View style={styles.adminHeaderCenter}>
            <Text style={styles.adminHeaderBrand}>Casa Craft</Text>
          </View>
          <TouchableOpacity style={styles.adminHeaderIconButton}>
            <Text style={styles.adminHeaderIconText}>🔔</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.ordersHeaderTitle}>Orders</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.ordersFilterRow}>
            {filters.map((f) => (
              <TouchableOpacity
                key={f}
                style={[styles.ordersFilterChip, activeFilter === f && styles.ordersFilterChipActive]}
                onPress={() => setActiveFilter(f)}
              >
                <Text
                  style={[
                    styles.ordersFilterChipText,
                    activeFilter === f && styles.ordersFilterChipTextActive,
                  ]}
                >
                  {f} {counts[f]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {filteredOrders.length === 0 ? (
          <Text style={styles.productHelperText}>No orders in this view.</Text>
        ) : (
          filteredOrders.map(renderOrder)
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      <Admin_tab_bar active="Orders" navigation={navigation} />
    </View>
  );
}