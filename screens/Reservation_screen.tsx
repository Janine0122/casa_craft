import { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles';
import { FurnitureItem } from '../data/furniture_data';
import { useOrders } from '../context/OrdersContext';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const DELIVERY_FEE = 200;

const generateUpcomingDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const results: { label: string; dayNum: string; month: string; fullDate: string }[] = [];
  const cursor = new Date();

  while (results.length < 4) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0) continue; // skip Sundays (closed)
    results.push({
      label: days[cursor.getDay()],
      dayNum: String(cursor.getDate()),
      month: months[cursor.getMonth()],
      fullDate: `${days[cursor.getDay()]}, ${months[cursor.getMonth()]} ${cursor.getDate()}`,
    });
  }
  return results;
};

export default function Reservation_screen({ navigation, route }: any) {
  const {
    item,
    selectedSize,
    selectedColor,
    selectedMaterial,
    specialRequest,
    quantity,
  } = route.params as {
    item: FurnitureItem;
    selectedSize: string;
    selectedColor: string;
    selectedMaterial?: string;
    specialRequest?: string;
    quantity: number;
  };

  const { addOrder } = useOrders();
  const upcomingDates = useMemo(() => generateUpcomingDates(), []);

  const [fulfillment, setFulfillment] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState<'Morning' | 'Afternoon'>('Morning');
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const unitPrice = item.price;
  const itemsTotal = unitPrice * quantity;
  const deliveryFee = fulfillment === 'Delivery' ? DELIVERY_FEE : 0;
  const orderTotal = itemsTotal + deliveryFee;
  const deposit = Math.round(orderTotal * 0.3);

  const subtitleParts = [selectedColor, selectedSize, selectedMaterial].filter(Boolean);

  const handleConfirm = () => {
    addOrder({
      item,
      size: selectedSize,
      color: selectedColor,
      material: selectedMaterial,
      specialRequest,
      quantity,
      fulfillment,
      deliveryAddress: fulfillment === 'Delivery' ? deliveryAddress : undefined,
      deliveryTime: fulfillment === 'Delivery' ? deliveryTime : undefined,
      preferredDate: upcomingDates[selectedDateIndex].fullDate,
      total: orderTotal,
      deposit,
    });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailHeaderRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.customizeHeaderTitle}>Reservation</Text>
          </View>
        </View>

        <View style={styles.reservationSummaryCard}>
          <View style={styles.reservationThumb}>
            <Text style={styles.reservationThumbEmoji}>🛋️</Text>
          </View>
          <View style={styles.reservationSummaryInfo}>
            <Text style={styles.reservationSummaryName}>{item.name}</Text>
            <Text style={styles.reservationSummarySubtitle}>{subtitleParts.join(', ')}</Text>
            <View
              style={[
                styles.stockTagPill,
                { position: 'relative', top: 0, left: 0, alignSelf: 'flex-start' },
                item.stockStatus === 'In Stock' ? styles.stockTagPillInStock : styles.stockTagPillMadeOrder,
              ]}
            >
              <Text
                style={[
                  styles.stockTagPillText,
                  item.stockStatus === 'In Stock' ? styles.stockTagTextInStock : styles.stockTagTextMadeOrder,
                ]}
              >
                {item.stockStatus}
              </Text>
            </View>
            <Text style={styles.reservationSummaryPrice}>{formatPrice(unitPrice)} each</Text>
          </View>
        </View>

        <View style={styles.optionsCard}>
          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Receive your order</Text>
          <View style={styles.fulfillmentToggleRow}>
            <TouchableOpacity
              style={[
                styles.fulfillmentToggleOption,
                fulfillment === 'Pickup' && styles.fulfillmentToggleOptionSelected,
              ]}
              onPress={() => setFulfillment('Pickup')}
            >
              <Text
                style={[
                  styles.fulfillmentToggleText,
                  fulfillment === 'Pickup' && styles.fulfillmentToggleTextSelected,
                ]}
              >
                🏬 Pickup
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.fulfillmentToggleOption,
                fulfillment === 'Delivery' && styles.fulfillmentToggleOptionSelected,
              ]}
              onPress={() => setFulfillment('Delivery')}
            >
              <Text
                style={[
                  styles.fulfillmentToggleText,
                  fulfillment === 'Delivery' && styles.fulfillmentToggleTextSelected,
                ]}
              >
                🚚 Delivery
              </Text>
            </TouchableOpacity>
          </View>

          {fulfillment === 'Delivery' && (
            <>
              <Text style={[styles.optionsSectionTitle, { marginBottom: 8 }]}>Delivery address</Text>
              <TextInput
                style={[styles.input, { marginBottom: 16 }]}
                placeholder="e.g. Unit 5B, Acacia Street"
                value={deliveryAddress}
                onChangeText={setDeliveryAddress}
              />

              <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Delivery time</Text>
              <View style={styles.timeOptionRow}>
                <TouchableOpacity
                  style={[
                    styles.timeOptionCard,
                    deliveryTime === 'Morning' && styles.timeOptionCardSelected,
                  ]}
                  onPress={() => setDeliveryTime('Morning')}
                >
                  <Text
                    style={[
                      styles.timeOptionLabel,
                      deliveryTime === 'Morning' && styles.timeOptionLabelSelected,
                    ]}
                  >
                    Morning
                  </Text>
                  <Text
                    style={[
                      styles.timeOptionRange,
                      deliveryTime === 'Morning' && styles.timeOptionRangeSelected,
                    ]}
                  >
                    8 AM to 12 PM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.timeOptionCard,
                    deliveryTime === 'Afternoon' && styles.timeOptionCardSelected,
                  ]}
                  onPress={() => setDeliveryTime('Afternoon')}
                >
                  <Text
                    style={[
                      styles.timeOptionLabel,
                      deliveryTime === 'Afternoon' && styles.timeOptionLabelSelected,
                    ]}
                  >
                    Afternoon
                  </Text>
                  <Text
                    style={[
                      styles.timeOptionRange,
                      deliveryTime === 'Afternoon' && styles.timeOptionRangeSelected,
                    ]}
                  >
                    1 PM to 5 PM
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Preferred date</Text>
          <View style={styles.dateOptionRow}>
            {upcomingDates.map((date, index) => {
              const isSelected = selectedDateIndex === index;
              return (
                <TouchableOpacity
                  key={date.fullDate}
                  style={[styles.dateOptionCard, isSelected && styles.dateOptionCardSelected]}
                  onPress={() => setSelectedDateIndex(index)}
                >
                  <Text style={[styles.dateOptionDay, isSelected && styles.dateOptionDaySelected]}>
                    {date.label}
                  </Text>
                  <Text style={[styles.dateOptionNumber, isSelected && styles.dateOptionNumberSelected]}>
                    {date.dayNum}
                  </Text>
                  <Text style={[styles.dateOptionMonth, isSelected && styles.dateOptionMonthSelected]}>
                    {date.month}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.reservationNoteText}>
            Earliest date for in-stock items. We are closed on Sundays.
          </Text>
        </View>

        <View style={styles.optionsCard}>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryLabel}>
              {quantity} × {item.name}
            </Text>
            <Text style={styles.orderSummaryValue}>{formatPrice(itemsTotal)}</Text>
          </View>
          {fulfillment === 'Delivery' && (
            <View style={styles.orderSummaryRow}>
              <Text style={styles.orderSummaryLabel}>Delivery fee</Text>
              <Text style={styles.orderSummaryValue}>{formatPrice(deliveryFee)}</Text>
            </View>
          )}

          <View style={styles.orderSummaryDivider} />

          <View style={[styles.orderSummaryRow, { marginBottom: 0 }]}>
            <Text style={styles.orderSummaryTotalLabel}>Order total</Text>
            <Text style={styles.orderSummaryTotalValue}>{formatPrice(orderTotal)}</Text>
          </View>

          <View style={styles.depositBox}>
            <Text style={styles.depositLabel}>Required deposit (30%)</Text>
            <Text style={styles.depositAmount}>{formatPrice(deposit)}</Text>
            <View style={styles.depositProgressTrack}>
              <View style={styles.depositProgressFill} />
            </View>
            <Text style={styles.depositNote}>Pay the balance on delivery.</Text>
          </View>

          <Text style={styles.holdNoteText}>
            We hold your reservation for 48 hours until the deposit is paid.
          </Text>
        </View>

        <View style={{ height: 10 }} />
      </ScrollView>

      <View style={styles.customizeActionBar}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmReservationButton} onPress={handleConfirm}>
          <Text style={styles.confirmReservationButtonText}>Confirm Reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}