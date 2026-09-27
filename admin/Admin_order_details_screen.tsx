import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { AdminOrder } from './admin_orders_data';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const statusPillStyle = (status: AdminOrder['status']) => {
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

export default function Admin_order_details_screen({ navigation, route }: any) {
  const order: AdminOrder = route.params.order;
  const pill = statusPillStyle(order.status);

  const balance =
    order.orderTotal !== undefined && order.amountPaid !== undefined
      ? order.orderTotal - order.amountPaid
      : undefined;

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailHeaderRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.customizeHeaderTitle}>Order Details</Text>
          </View>
        </View>

        <View style={styles.detailsSectionCard}>
          <View style={styles.orderCardTopRow}>
            <Text style={styles.detailsCodeHeader}>{order.code}</Text>
            <View style={pill.box}>
              <Text style={pill.text}>{pill.label}</Text>
            </View>
          </View>
          <Text style={styles.orderCustomerName}>{order.customerName}</Text>
        </View>

        <View style={styles.detailsSectionCard}>
          <Text style={styles.detailsSectionTitle}>Item</Text>
          <View style={styles.detailsRow}>
            <Text style={styles.detailsRowLabel}>Product</Text>
            <Text style={styles.detailsRowValue}>{order.productLabel}</Text>
          </View>
          {order.fulfillmentType && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>Fulfillment</Text>
              <Text style={styles.detailsRowValue}>{order.fulfillmentType}</Text>
            </View>
          )}
          {order.fulfillmentNote && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>Schedule</Text>
              <Text style={styles.detailsRowValue}>{order.fulfillmentNote}</Text>
            </View>
          )}
          {order.completedNote && (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>Status note</Text>
              <Text style={styles.detailsRowValue}>{order.completedNote}</Text>
            </View>
          )}
        </View>

        {order.changes && order.changes.length > 0 && (
          <View style={styles.detailsSectionCard}>
            <Text style={styles.detailsSectionTitle}>Requested changes</Text>
            {order.requestedAgo && (
              <View style={styles.detailsRow}>
                <Text style={styles.detailsRowLabel}>Requested</Text>
                <Text style={styles.detailsRowValue}>{order.requestedAgo}</Text>
              </View>
            )}
            <View style={styles.detailsDivider} />
            {order.changes.map((c) => (
              <View key={c.label} style={styles.detailsRow}>
                <Text style={styles.detailsRowLabel}>{c.label}</Text>
                <Text style={styles.detailsRowValue}>
                  {c.from} → {c.to}
                </Text>
              </View>
            ))}
            {order.newPrice !== undefined && (
              <>
                <View style={styles.detailsDivider} />
                <View style={styles.detailsRow}>
                  <Text style={styles.detailsRowLabel}>New price</Text>
                  <Text style={styles.detailsRowValue}>
                    {formatPrice(order.newPrice)}
                    {order.priceDelta ? ` (+${formatPrice(order.priceDelta)})` : ''}
                  </Text>
                </View>
              </>
            )}
          </View>
        )}

        {(order.amountPaid !== undefined || order.orderTotal !== undefined) && (
          <View style={styles.detailsSectionCard}>
            <Text style={styles.detailsSectionTitle}>Payment</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>Order total</Text>
              <Text style={styles.detailsRowValue}>{formatPrice(order.orderTotal ?? 0)}</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>Amount paid</Text>
              <Text style={styles.detailsRowValue}>{formatPrice(order.amountPaid ?? 0)}</Text>
            </View>
            <View style={styles.detailsDivider} />
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowLabel}>
                {balance === 0 ? 'Status' : 'Balance remaining'}
              </Text>
              <Text style={styles.detailsRowValue}>
                {balance === 0 ? 'Paid in full' : formatPrice(balance ?? 0)}
              </Text>
            </View>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}