import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { AdminOrder, FulfillmentStep } from './admin_orders_data';

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

function TimelineStepRow({ step, isLast }: { step: FulfillmentStep; isLast: boolean }) {
  return (
    <View style={styles.timelineStepRow}>
      <View style={styles.timelineIndicatorColumn}>
        <View
          style={[
            styles.timelineDot,
            step.state === 'done' && styles.timelineDotDone,
            step.state === 'current' && styles.timelineDotCurrent,
            step.state === 'upcoming' && styles.timelineDotUpcoming,
          ]}
        >
          {step.state === 'done' && <Text style={styles.timelineDotCheckText}>✓</Text>}
        </View>
        {!isLast && (
          <View style={[styles.timelineLine, step.state === 'done' && styles.timelineLineDone]} />
        )}
      </View>
      <View style={styles.timelineTextColumn}>
        <Text
          style={[
            styles.timelineStepLabel,
            step.state === 'upcoming' && styles.timelineStepLabelUpcoming,
          ]}
        >
          {step.label}
        </Text>
        {step.date && <Text style={styles.timelineStepDate}>{step.date}</Text>}
      </View>
    </View>
  );
}

export default function Admin_order_details_screen({ navigation, route }: any) {
  const order: AdminOrder = route.params.order;
  const pill = statusPillStyle(order.status);

  const deposit =
    order.orderTotal !== undefined && order.amountPaid !== undefined ? order.amountPaid : 0;
  const balance =
    order.orderTotal !== undefined && order.amountPaid !== undefined
      ? order.orderTotal - order.amountPaid
      : 0;

  const handleRecordPayment = () => {
    // No backend yet — placeholder action.
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailsStatusPillRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.customizeHeaderTitle}>Order {order.code}</Text>
          </View>
          <View style={pill.box}>
            <Text style={pill.text}>{pill.label}</Text>
          </View>
        </View>

        <View style={styles.customerCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{order.customerInitials}</Text>
          </View>
          <View style={styles.customerCardInfo}>
            <Text style={styles.customerCardName}>{order.customerName}</Text>
            <Text style={styles.customerCardMeta}>
              {order.reservedDate ? `Reserved on ${order.reservedDate}` : ''}
              {order.amountPaid ? ' with a deposit' : ''}
            </Text>
          </View>
          <View style={styles.customerCardActions}>
            <TouchableOpacity style={styles.customerActionButton}>
              <Text style={styles.customerActionIcon}>📞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customerActionButton}>
              <Text style={styles.customerActionIcon}>💬</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsSectionCard}>
          <Text style={styles.detailsSectionTitle}>Items</Text>
          <View style={styles.itemRow}>
            <View style={styles.itemRowThumb}>
              <Text style={styles.itemRowThumbEmoji}>🛋️</Text>
            </View>
            <View style={styles.itemRowInfo}>
              <View style={styles.itemRowNamePriceRow}>
                <Text style={styles.itemRowName}>{order.productLabel}</Text>
                {order.itemPrice !== undefined && (
                  <Text style={styles.itemRowPrice}>{formatPrice(order.itemPrice)}</Text>
                )}
              </View>
              {(order.itemFinish || order.itemSize) && (
                <Text style={styles.itemRowSpecs}>
                  {[order.itemFinish, order.itemSize].filter(Boolean).join(', ')}
                </Text>
              )}
              {order.itemQuantity !== undefined && (
                <Text style={styles.itemRowQuantity}>quantity {order.itemQuantity}</Text>
              )}
            </View>
          </View>
        </View>

        {order.fulfillmentSteps && order.fulfillmentSteps.length > 0 && (
          <View style={styles.detailsSectionCard}>
            <Text style={styles.detailsSectionTitle}>Fulfillment</Text>
            {order.fulfillmentSteps.map((step, index) => (
              <TimelineStepRow
                key={step.label}
                step={step}
                isLast={index === order.fulfillmentSteps!.length - 1}
              />
            ))}
          </View>
        )}

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
          </View>
        )}

        {order.fulfillmentType === 'Delivery' && (order.deliveryWindow || order.deliveryAddress) && (
          <View style={styles.detailsSectionCard}>
            <Text style={styles.detailsSectionTitle}>Delivery</Text>
            {order.deliveryWindow && (
              <View style={styles.deliveryInfoRow}>
                <Text style={styles.deliveryInfoIcon}>📅</Text>
                <Text style={styles.deliveryInfoText}>{order.deliveryWindow}</Text>
              </View>
            )}
            {order.deliveryAddress && (
              <Text style={styles.deliveryAddressText}>{order.deliveryAddress}</Text>
            )}
          </View>
        )}

        {order.orderTotal !== undefined && (
          <View style={styles.detailsSectionCard}>
            <Text style={styles.detailsSectionTitle}>Payment</Text>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentRowLabel}>Order total</Text>
              <Text style={styles.paymentRowValue}>{formatPrice(order.orderTotal)}</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentRowLabel}>
                Deposit paid{order.depositPercent ? ` (${order.depositPercent}%)` : ''}
              </Text>
              <Text style={styles.paymentRowValueNegative}>-{formatPrice(deposit)}</Text>
            </View>
            <View style={styles.detailsDivider} />
            <View style={[styles.paymentRow, { marginBottom: 0 }]}>
              <Text style={styles.paymentRowLabelBold}>
                {balance === 0 ? 'Status' : 'Balance due on delivery'}
              </Text>
              <Text style={balance === 0 ? styles.paymentRowValue : styles.paymentRowValueBold}>
                {balance === 0 ? 'Paid in full' : formatPrice(balance)}
              </Text>
            </View>

            {balance > 0 && (
              <TouchableOpacity style={styles.recordPaymentButton} onPress={handleRecordPayment}>
                <Text style={styles.recordPaymentButtonText}>Record payment</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}