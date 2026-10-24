import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { reportsByPeriod, ReportPeriod } from './admin_reports_data';
import Admin_tab_bar from './Admin_tab_bar';

const formatCompactPrice = (n: number) => {
  if (n >= 1000000) return `₱${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `₱${Math.round(n / 1000)}k`;
  return `₱${n}`;
};

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const periods: ReportPeriod[] = ['Week', 'Month', 'Year'];

export default function Admin_reports_screen({ navigation }: any) {
  const [period, setPeriod] = useState<ReportPeriod>('Month');
  const data = reportsByPeriod[period];

  const maxBarValue = Math.max(...data.bars.map((b) => b.collected + b.unpaid));

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
         <View style={styles.adminHeaderRow}>
          <Text style={styles.adminHeaderBrand}>Casa Craft</Text>
        </View>
        
        <View style={styles.reportsHeaderRow}>
          <Text style={styles.reportsHeaderTitle}>Reports</Text>
          <TouchableOpacity style={styles.exportButton}>
            <Text style={styles.exportButtonText}>↓ Export</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.periodToggleRow}>
          {periods.map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.periodToggleOption, period === p && styles.periodToggleOptionSelected]}
              onPress={() => setPeriod(p)}
            >
              <Text
                style={[styles.periodToggleText, period === p && styles.periodToggleTextSelected]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.salesCard}>
          <Text style={styles.salesCardLabel}>{data.salesLabel}</Text>
          <Text style={styles.salesCardAmount}>{formatCompactPrice(data.totalSales)}</Text>
          <Text
            style={
              data.percentChange >= 0
                ? styles.salesCardChangePositive
                : styles.salesCardChangeNegative
            }
          >
            {data.percentChange >= 0 ? '+' : ''}
            {data.percentChange}% vs previous period
          </Text>

          <View style={styles.chartRow}>
            {data.bars.map((bar) => {
              const total = bar.collected + bar.unpaid;
              const totalHeight = maxBarValue > 0 ? (total / maxBarValue) * 100 : 0;
              const unpaidHeight = total > 0 ? (bar.unpaid / total) * totalHeight : 0;
              const collectedHeight = totalHeight - unpaidHeight;

              return (
                <View key={bar.label} style={styles.chartBarColumn}>
                  <View style={[styles.chartBarStack, { height: `${totalHeight}%` }]}>
                    <View style={[styles.chartBarUnpaidSegment, { height: `${(unpaidHeight / totalHeight) * 100 || 0}%` }]} />
                    <View style={[styles.chartBarCollectedSegment, { height: `${(collectedHeight / totalHeight) * 100 || 0}%` }]} />
                  </View>
                  <Text style={styles.chartBarLabel}>{bar.label}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, styles.legendDotCollected]} />
              <Text style={styles.legendText}>Collected</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, styles.legendDotUnpaid]} />
              <Text style={styles.legendText}>Unpaid balance</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryStatRow}>
          <View style={styles.summaryStatCard}>
            <Text style={styles.summaryStatLabel}>Collected</Text>
            <Text style={styles.summaryStatValue}>{formatCompactPrice(data.collected)}</Text>
          </View>
          <View style={styles.summaryStatCard}>
            <Text style={styles.summaryStatLabel}>Unpaid balances</Text>
            <Text style={styles.summaryStatValueWarning}>{formatCompactPrice(data.unpaidBalances)}</Text>
          </View>
        </View>

        <View style={styles.deliveryPickupCard}>
          <Text style={styles.deliveryPickupTitle}>Delivery or pickup</Text>
          <View style={styles.splitBarTrack}>
            <View style={[styles.splitBarDelivery, { width: `${data.deliveryPercent}%` }]} />
            <View style={[styles.splitBarPickup, { width: `${data.pickupPercent}%` }]} />
          </View>
          <View style={styles.splitBarLabelsRow}>
            <Text style={styles.splitBarLabel}>Delivery {data.deliveryPercent}%</Text>
            <Text style={styles.splitBarLabel}>Pickup {data.pickupPercent}%</Text>
          </View>
        </View>

        <View style={styles.topSellersCard}>
          <Text style={styles.topSellersTitle}>Top sellers</Text>
          {data.topSellers.map((seller) => (
            <View key={seller.name} style={styles.topSellerRow}>
              <View style={styles.topSellerNameRow}>
                <Text style={styles.topSellerName}>{seller.name}</Text>
                <Text style={styles.topSellerAmount}>{formatPrice(seller.amount)}</Text>
              </View>
              <View style={styles.topSellerBarTrack}>
                <View style={[styles.topSellerBarFill, { width: `${seller.percentOfTop}%` }]} />
              </View>
              <Text style={styles.topSellerUnitsSold}>{seller.unitsSold} sold</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <Admin_tab_bar active="Reports" navigation={navigation} />
    </View>
  );
}