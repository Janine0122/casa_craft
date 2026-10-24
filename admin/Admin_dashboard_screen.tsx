import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useOrders } from '../context/OrdersContext';
import { attentionItems, todaySchedule, lowStockCount, dueTodayCount, toApproveCount } from './admin_data';
import Admin_tab_bar from './Admin_tab_bar';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const getFormattedDate = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const now = new Date();
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
};

export default function Admin_dashboard_screen({ navigation }: any) {
  const { orders } = useOrders();

  const unpaidOrders = orders.filter((o) => o.status === 'To Pay');
  const balancesToCollect = unpaidOrders.reduce((sum, o) => sum + (o.total - o.deposit), 0);
  const collectedSoFar = unpaidOrders.reduce((sum, o) => sum + o.deposit, 0);
  const progressPercent =
    balancesToCollect + collectedSoFar > 0
      ? Math.round((collectedSoFar / (balancesToCollect + collectedSoFar)) * 100)
      : 0;

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.adminHeaderRow}>
          <Text style={styles.adminHeaderBrand}>Casa Craft</Text>
        </View>

        <Text style={styles.greetingText}>{getGreeting()}, Admin</Text>
        <Text style={styles.greetingDate}>{getFormattedDate()}</Text>

        <View style={styles.balanceCard}>
          <View style={styles.balanceCardTopRow}>
            <Text style={styles.balanceCardLabel}>Balances to collect</Text>
            <View style={styles.balanceCardOrdersPill}>
              <Text style={styles.balanceCardOrdersPillText}>{unpaidOrders.length} orders</Text>
            </View>
          </View>
          <Text style={styles.balanceCardAmount}>{formatPrice(balancesToCollect)}</Text>
          <View style={styles.balanceProgressTrack}>
            <View style={[styles.balanceProgressFill, { width: `${progressPercent}%` }]} />
          </View>
          <Text style={styles.balanceCardFootnote}>
            {formatPrice(dueTodayCount * 5790)} to collect on delivery today
          </Text>
        </View>

        <View style={styles.adminStatRow}>
          <View style={styles.adminStatCard}>
            <Text style={styles.adminStatIcon}>📋</Text>
            <Text style={styles.adminStatValue}>{toApproveCount}</Text>
            <Text style={styles.adminStatLabel}>To approve</Text>
          </View>
          <View style={styles.adminStatCard}>
            <Text style={styles.adminStatIcon}>🚚</Text>
            <Text style={styles.adminStatValue}>{dueTodayCount}</Text>
            <Text style={styles.adminStatLabel}>Due today</Text>
          </View>
          <View style={styles.adminStatCard}>
            <Text style={styles.adminStatIcon}>⚠️</Text>
            <Text style={styles.adminStatValue}>{lowStockCount}</Text>
            <Text style={styles.adminStatLabel}>Low stock</Text>
          </View>
        </View>

        <View style={styles.adminSectionHeaderRow}>
          <Text style={styles.adminSectionTitle}>Needs your attention</Text>
        </View>
        {attentionItems.map((attn) => (
          <View key={attn.id} style={styles.attentionCard}>
            <View style={styles.attentionIconCircle}>
              <Text style={styles.attentionIconText}>{attn.icon}</Text>
            </View>
            <View style={styles.attentionInfo}>
              <Text style={styles.attentionTitle}>{attn.title}</Text>
              <Text style={styles.attentionSubtitle}>{attn.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.attentionActionButton}>
              <Text style={styles.attentionActionText}>{attn.actionLabel}</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.adminSectionHeaderRow}>
          <Text style={styles.adminSectionTitle}>Today's schedule</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminOrders')}>
            <Text style={styles.adminSectionLink}>All orders</Text>
          </TouchableOpacity>
        </View>
        {todaySchedule.map((sch) => (
          <View key={sch.id} style={styles.scheduleCard}>
            <View style={styles.scheduleTopRow}>
              <Text style={styles.scheduleTimeType}>
                {sch.time}, {sch.type === 'Pickup' ? 'Pickup' : 'Delivery'}
              </Text>
              <View style={styles.scheduleStatusBadge}>
                <Text style={styles.scheduleStatusText}>{sch.status}</Text>
              </View>
            </View>
            <Text style={styles.scheduleCustomerName}>{sch.customerName}</Text>
            <Text style={styles.scheduleDescription}>{sch.description}</Text>
          </View>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>

      <Admin_tab_bar active="Home" navigation={navigation} />
    </View>
  );
}