
import { useState, useMemo, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles';
import { FurnitureItem } from '../data/furniture_data';
import { useOrders } from '../context/OrdersContext';

const formatPrice = (n: number) =>
  '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const DELIVERY_FEE = 200;
const MAX_DELIVERY_DAYS = 7;

const getSizeModifier = (index: number, total: number) => {
  if (total <= 1) return 0;
  if (index === 0) return -500;
  if (index === total - 1) return 1200;
  return 0;
};

const generateUpcomingDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const results: {
    label: string;
    dayNum: string;
    month: string;
    fullDate: string;
  }[] = [];

  const cursor = new Date();

  while (results.length < 4) {
    cursor.setDate(cursor.getDate() + 1);

    if (cursor.getDay() === 0) continue;

    results.push({
      label: days[cursor.getDay()],
      dayNum: String(cursor.getDate()),
      month: months[cursor.getMonth()],
      fullDate:
        `${days[cursor.getDay()]}, ` +
        `${months[cursor.getMonth()]} ` +
        `${cursor.getDate()}`,
    });
  }

  return results;
};

export default function Reservation_screen({
  navigation,
  route,
}: any) {
  const {
    item,
    selectedSize,
    selectedColor,
    selectedMaterial,
    specialRequest,
    quantity,
    total: passedTotal,
  } = route.params as {
    item: FurnitureItem;
    selectedSize: string;
    selectedColor: string;
    selectedMaterial?: string;
    specialRequest?: string;
    quantity: number;
    total?: number;
    deposit?: number;
  };

  const { addOrder } = useOrders();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const isTablet = width >= 600;
  const isSmallPhone = width < 360;

  const scrollRef = useRef<ScrollView>(null);

  const upcomingDates = useMemo(
    () => generateUpcomingDates(),
    []
  );

  const [fulfillment, setFulfillment] =
    useState<'Pickup' | 'Delivery'>('Pickup');

  const [address, setAddress] = useState('');
  const [selectedDateIndex, setSelectedDateIndex] =
    useState(0);

  const [showAddressError, setShowAddressError] =
    useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sizeIndex = item.sizes.indexOf(selectedSize);

  const fallbackUnitPrice =
    item.price +
    (sizeIndex >= 0
      ? getSizeModifier(sizeIndex, item.sizes.length)
      : 0);

  // Use the previous screen's calculated price whenever supplied.
  const itemsTotal =
    typeof passedTotal === 'number' &&
    Number.isFinite(passedTotal)
      ? passedTotal
      : fallbackUnitPrice * quantity;

  const unitPrice = quantity > 0
    ? itemsTotal / quantity
    : 0;

  const deliveryFee =
    fulfillment === 'Delivery' ? DELIVERY_FEE : 0;

  const orderTotal = itemsTotal + deliveryFee;
  const deposit = Math.round(orderTotal * 0.3);

  const subtitleParts = [
    selectedColor,
    selectedSize,
    selectedMaterial,
  ].filter(Boolean);

  const handleConfirm = () => {
    if (isSubmitting) return;

    if (address.trim().length === 0) {
      setShowAddressError(true);

      scrollRef.current?.scrollTo({
        y: 200,
        animated: true,
      });

      return;
    }

    setIsSubmitting(true);

    try {
      addOrder({
        item,
        size: selectedSize,
        color: selectedColor,
        material: selectedMaterial,
        specialRequest,
        quantity,
        fulfillment,
        address: address.trim(),
        preferredDate:
          fulfillment === 'Pickup'
            ? upcomingDates[selectedDateIndex].fullDate
            : `Within ${MAX_DELIVERY_DAYS} days`,
        total: orderTotal,
        deposit,
      });

      navigation.navigate('Dashboard');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={localStyles.root}>
      <KeyboardAvoidingView
        style={localStyles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          ref={scrollRef}
          style={localStyles.scrollView}
          contentContainerStyle={[
            localStyles.scrollContent,
            {
              paddingHorizontal: isTablet ? 28 : 20,
              paddingTop: 55,
              paddingBottom: 32,
            },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <View style={localStyles.contentWrapper}>

            {/* HEADER */}
            <View style={styles.detailHeaderRow}>
              <View style={styles.detailHeaderLeft}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  accessibilityRole="button"
                  accessibilityLabel="Go back"
                >
                  <Text style={styles.backIconText}>
                    ←
                  </Text>
                </TouchableOpacity>

                <Text style={styles.customizeHeaderTitle}>
                  Reservation
                </Text>
              </View>
            </View>

            {/* PRODUCT SUMMARY */}
            <View style={styles.reservationSummaryCard}>
              <View style={styles.reservationThumb}>
                <Text style={styles.reservationThumbEmoji}>
                  🛋️
                </Text>
              </View>

              <View style={styles.reservationSummaryInfo}>
                <Text
                  style={[
                    styles.reservationSummaryName,
                    localStyles.flexText,
                  ]}
                >
                  {item.name}
                </Text>

                <Text
                  style={styles.reservationSummarySubtitle}
                >
                  {subtitleParts.join(', ')}
                </Text>

                <View
                  style={[
                    styles.stockTagPill,
                    {
                      position: 'relative',
                      top: 0,
                      left: 0,
                      alignSelf: 'flex-start',
                    },
                    item.stockStatus === 'In Stock'
                      ? styles.stockTagPillInStock
                      : styles.stockTagPillMadeOrder,
                  ]}
                >
                  <Text
                    style={[
                      styles.stockTagPillText,
                      item.stockStatus === 'In Stock'
                        ? styles.stockTagTextInStock
                        : styles.stockTagTextMadeOrder,
                    ]}
                  >
                    {item.stockStatus}
                  </Text>
                </View>

                <Text style={styles.reservationSummaryPrice}>
                  {formatPrice(unitPrice)} each
                </Text>
              </View>
            </View>

            {/* RECEIVE YOUR ORDER */}
            <View style={styles.optionsCard}>
              <Text
                style={[
                  styles.optionsSectionTitle,
                  { marginBottom: 12 },
                ]}
              >
                Receive your order
              </Text>

              <View style={styles.fulfillmentToggleRow}>
                <TouchableOpacity
                  style={[
                    styles.fulfillmentToggleOption,
                    fulfillment === 'Pickup' &&
                      styles.fulfillmentToggleOptionSelected,
                  ]}
                  onPress={() => setFulfillment('Pickup')}
                  accessibilityRole="button"
                  accessibilityState={{
                    selected: fulfillment === 'Pickup',
                  }}
                >
                  <Text
                    style={[
                      styles.fulfillmentToggleText,
                      fulfillment === 'Pickup' &&
                        styles.fulfillmentToggleTextSelected,
                    ]}
                  >
                    🏬 Pickup
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fulfillmentToggleOption,
                    fulfillment === 'Delivery' &&
                      styles.fulfillmentToggleOptionSelected,
                  ]}
                  onPress={() => setFulfillment('Delivery')}
                  accessibilityRole="button"
                  accessibilityState={{
                    selected: fulfillment === 'Delivery',
                  }}
                >
                  <Text
                    style={[
                      styles.fulfillmentToggleText,
                      fulfillment === 'Delivery' &&
                        styles.fulfillmentToggleTextSelected,
                    ]}
                  >
                    🚚 Delivery
                  </Text>
                </TouchableOpacity>
              </View>

              {/* ADDRESS */}
              <Text
                style={[
                  styles.optionsSectionTitle,
                  { marginBottom: 8 },
                ]}
              >
                {fulfillment === 'Delivery'
                  ? 'Delivery address'
                  : 'Your address'}
              </Text>

              <TextInput
                style={[
                  styles.input,
                  {
                    marginBottom: showAddressError ? 8 : 16,
                  },
                ]}
                placeholder="e.g. Unit 5B, Acacia Street"
                value={address}
                onChangeText={(text) => {
                  setAddress(text);

                  if (
                    showAddressError &&
                    text.trim().length > 0
                  ) {
                    setShowAddressError(false);
                  }
                }}
                autoCapitalize="sentences"
                returnKeyType="done"
              />

              {showAddressError && (
                <Text style={styles.addressErrorText}>
                  Please enter your address to continue.
                </Text>
              )}

              {/* DELIVERY */}
              {fulfillment === 'Delivery' ? (
                <View style={styles.deliveryNoticeBox}>
                  <Text style={styles.deliveryNoticeIcon}>
                    🚚
                  </Text>

                  <Text style={styles.deliveryNoticeText}>
                    Delivery is within {MAX_DELIVERY_DAYS} days
                    after your deposit is paid. Our team will
                    schedule it and let you know the date and
                    time.
                  </Text>
                </View>
              ) : (
                <>
                  {/* PICKUP DATE */}
                  <Text
                    style={[
                      styles.optionsSectionTitle,
                      { marginBottom: 12 },
                    ]}
                  >
                    Preferred date
                  </Text>

                  <View
                    style={[
                      styles.dateOptionRow,
                      localStyles.dateRow,
                    ]}
                  >
                    {upcomingDates.map((date, index) => {
                      const isSelected =
                        selectedDateIndex === index;

                      return (
                        <TouchableOpacity
                          key={date.fullDate}
                          style={[
                            styles.dateOptionCard,
                            localStyles.dateCard,
                            isSmallPhone &&
                              localStyles.smallDateCard,
                            isTablet &&
                              localStyles.tabletDateCard,
                            isSelected &&
                              styles.dateOptionCardSelected,
                          ]}
                          onPress={() =>
                            setSelectedDateIndex(index)
                          }
                          accessibilityRole="button"
                          accessibilityState={{
                            selected: isSelected,
                          }}
                        >
                          <Text
                            style={[
                              styles.dateOptionDay,
                              isSelected &&
                                styles.dateOptionDaySelected,
                            ]}
                          >
                            {date.label}
                          </Text>

                          <Text
                            style={[
                              styles.dateOptionNumber,
                              isSelected &&
                                styles.dateOptionNumberSelected,
                            ]}
                          >
                            {date.dayNum}
                          </Text>

                          <Text
                            style={[
                              styles.dateOptionMonth,
                              isSelected &&
                                styles.dateOptionMonthSelected,
                            ]}
                          >
                            {date.month}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  <Text style={styles.reservationNoteText}>
                    Earliest date for in-stock items.
                    We are closed on Sundays.
                  </Text>
                </>
              )}
            </View>

            {/* ORDER SUMMARY */}
            <View style={styles.optionsCard}>
              <View style={styles.orderSummaryRow}>
                <Text
                  style={[
                    styles.orderSummaryLabel,
                    localStyles.flexText,
                  ]}
                >
                  {quantity} × {item.name}
                </Text>

                <Text
                  style={[
                    styles.orderSummaryValue,
                    localStyles.priceText,
                  ]}
                >
                  {formatPrice(itemsTotal)}
                </Text>
              </View>

              {fulfillment === 'Delivery' && (
                <View style={styles.orderSummaryRow}>
                  <Text style={styles.orderSummaryLabel}>
                    Delivery fee
                  </Text>

                  <Text style={styles.orderSummaryValue}>
                    {formatPrice(deliveryFee)}
                  </Text>
                </View>
              )}

              <View style={styles.orderSummaryDivider} />

              <View
                style={[
                  styles.orderSummaryRow,
                  { marginBottom: 0 },
                ]}
              >
                <Text
                  style={[
                    styles.orderSummaryTotalLabel,
                    localStyles.flexText,
                  ]}
                >
                  Order total
                </Text>

                <Text
                  style={[
                    styles.orderSummaryTotalValue,
                    localStyles.priceText,
                  ]}
                >
                  {formatPrice(orderTotal)}
                </Text>
              </View>

              {/* DEPOSIT */}
              <View style={styles.depositBox}>
                <Text style={styles.depositLabel}>
                  Required deposit (30%)
                </Text>

                <Text style={styles.depositAmount}>
                  {formatPrice(deposit)}
                </Text>

                <View style={styles.depositProgressTrack}>
                  <View style={styles.depositProgressFill} />
                </View>

                <Text style={styles.depositNote}>
                  {fulfillment === 'Delivery'
                    ? 'Pay the balance on delivery.'
                    : 'Pay the balance on pickup.'}
                </Text>
              </View>

              <Text style={styles.holdNoteText}>
                We hold your reservation for 48 hours
                until the deposit is paid.
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* FIXED BOTTOM BUTTONS */}
        <View
          style={[
            styles.customizeActionBar,
            localStyles.actionBar,
            {
              paddingHorizontal: isTablet ? 28 : 20,
              paddingBottom: Math.max(insets.bottom, 12),
            },
          ]}
        >
          <View style={localStyles.actionBarInner}>
            <TouchableOpacity
              style={[
                styles.cancelButton,
                localStyles.cancelButton,
              ]}
              onPress={() => navigation.goBack()}
              accessibilityRole="button"
            >
              <Text style={styles.cancelButtonText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.confirmReservationButton,
                localStyles.confirmButton,
              ]}
              onPress={handleConfirm}
              disabled={isSubmitting}
              accessibilityRole="button"
            >
              <Text
                style={[
                  styles.confirmReservationButtonText,
                  localStyles.buttonText,
                ]}
              >
                Confirm Reservation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#B99A6F',
  },

  scrollView: {
    flex: 1,
    minHeight: 0,
    backgroundColor: '#B99A6F',
  },

  scrollContent: {
    flexGrow: 1,
  },

  contentWrapper: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
  },

  flexText: {
    flexShrink: 1,
    minWidth: 0,
  },

  priceText: {
    flexShrink: 0,
    marginLeft: 10,
  },

  dateRow: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  dateCard: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 60,
  },

  smallDateCard: {
    minWidth: 55,
  },

  tabletDateCard: {
    minWidth: 100,
  },

  actionBar: {
    position: 'relative',
    bottom: undefined,
    left: undefined,
    right: undefined,
    width: '100%',
    flexShrink: 0,
    flexDirection: 'column',
    paddingTop: 12,
  },

  actionBarInner: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 10,
  },

  cancelButton: {
    flex: 1,
    minWidth: 0,
  },

  confirmButton: {
    flex: 1.5,
    minWidth: 0,
  },

  buttonText: {
    textAlign: 'center',
    flexShrink: 1,
  },
});
