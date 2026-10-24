
import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles';
import { FurnitureItem, colorHex } from '../data/furniture_data';

const formatPrice = (n: number) =>
  '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getSizeModifier = (index: number, total: number) => {
  if (total <= 1) return 0;
  if (index === 0) return -500;
  if (index === total - 1) return 1200;
  return 0;
};

export default function Item_details_screen({
  navigation,
  route,
}: any) {
  const item: FurnitureItem = route.params.item;

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const isTablet = width >= 600;
  const isSmallPhone = width < 360;

  const [selectedColorIndex, setSelectedColorIndex] =
    useState(0);

  const [selectedSizeIndex, setSelectedSizeIndex] =
    useState(Math.floor((item.sizes.length - 1) / 2));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedColor = item.colors[selectedColorIndex];
  const selectedSize = item.sizes[selectedSizeIndex];

  const sizeModifier = getSizeModifier(
    selectedSizeIndex,
    item.sizes.length
  );

  const unitPrice = item.price + sizeModifier;
  const total = unitPrice * quantity;
  const deposit = Math.round(total * 0.3);

  const decreaseQuantity = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };

  const handleReserve = () => {
    navigation.navigate('Reservation', {
      item,
      selectedSize,
      selectedColor,
      quantity,
      total,
      deposit,
    });
  };

  const handleCustomize = () => {
    navigation.navigate('Customization', {
      item,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  return (
    <View style={localStyles.container}>

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        style={localStyles.scrollView}
        contentContainerStyle={[
          localStyles.scrollContent,
          {
            paddingTop: 55,
            paddingBottom: 40,
            paddingHorizontal: isTablet ? 28 : 20,
          },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
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

              <Text
                style={[
                  styles.headerBrand,
                  { marginLeft: 10 },
                ]}
              >
                Casa Craft
              </Text>
            </View>
          </View>

          {/* PRODUCT IMAGE */}
          <View style={styles.detailImageWrapper}>
            <View style={styles.detailImagePlaceholder}>
              <Text style={styles.detailImageEmoji}>
                🛋️
              </Text>
            </View>

            <View
              style={[
                styles.stockTagPill,
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

            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => setIsFavorite(!isFavorite)}
              accessibilityRole="button"
              accessibilityLabel={
                isFavorite
                  ? 'Remove from favorites'
                  : 'Add to favorites'
              }
            >
              <Text style={styles.favoriteIcon}>
                {isFavorite ? '♥' : '♡'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* PRODUCT INFORMATION */}
          <View style={styles.infoCard}>
            <View style={styles.infoNameRow}>
              <Text
                style={[
                  styles.infoName,
                  localStyles.flexText,
                ]}
              >
                {item.name}
              </Text>

              <Text
                style={[
                  styles.infoPrice,
                  localStyles.priceText,
                ]}
              >
                {formatPrice(unitPrice)}
              </Text>
            </View>

            <Text style={styles.infoDescription}>
              {item.description}
            </Text>

            <Text style={styles.infoAvailability}>
              {item.stockStatus === 'In Stock'
                ? `${item.stockCount} available`
                : `Ready in about ${item.readyDays} days`}
            </Text>
          </View>

          {/* PRODUCT OPTIONS */}
          <View style={styles.optionsCard}>

            {/* FINISH */}
            <View style={styles.optionsSectionTitleRow}>
              <Text style={styles.optionsSectionTitle}>
                Finish
              </Text>

              <Text style={styles.optionsSectionValue}>
                {selectedColor}
              </Text>
            </View>

            <View
              style={[
                styles.colorSwatchRow,
                { flexWrap: 'wrap' },
              ]}
            >
              {item.colors.map((color, index) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorSwatch,
                    {
                      backgroundColor:
                        colorHex[color] ?? '#CCCCCC',
                    },
                    selectedColorIndex === index &&
                      styles.colorSwatchSelected,
                  ]}
                  onPress={() => setSelectedColorIndex(index)}
                  accessibilityRole="button"
                  accessibilityLabel={`Select ${color} finish`}
                  accessibilityState={{
                    selected: selectedColorIndex === index,
                  }}
                />
              ))}
            </View>

            {/* SIZE */}
            <Text style={styles.optionsSectionTitle}>
              Size
            </Text>

            <View
              style={[
                styles.sizeOptionRow,
                localStyles.sizeRow,
                { marginTop: 12 },
              ]}
            >
              {item.sizes.map((size, index) => {
                const modifier = getSizeModifier(
                  index,
                  item.sizes.length
                );

                const isSelected =
                  selectedSizeIndex === index;

                return (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.sizeOptionCard,
                      localStyles.sizeCard,
                      isSmallPhone &&
                        localStyles.smallSizeCard,
                      isTablet &&
                        localStyles.tabletSizeCard,
                      isSelected &&
                        styles.sizeOptionCardSelected,
                    ]}
                    onPress={() => setSelectedSizeIndex(index)}
                    accessibilityRole="button"
                    accessibilityState={{
                      selected: isSelected,
                    }}
                  >
                    <Text
                      style={[
                        styles.sizeOptionLabel,
                        localStyles.centerText,
                        isSelected &&
                          styles.sizeOptionLabelSelected,
                      ]}
                    >
                      {size}
                    </Text>

                    <Text
                      style={[
                        styles.sizeOptionModifier,
                        localStyles.centerText,
                        isSelected &&
                          styles.sizeOptionModifierSelected,
                      ]}
                    >
                      {modifier === 0
                        ? 'Included'
                        : modifier > 0
                        ? `+₱${modifier}`
                        : `-₱${Math.abs(modifier)}`}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* QUANTITY */}
            <Text
              style={[
                styles.optionsSectionTitle,
                { marginBottom: 12 },
              ]}
            >
              Quantity
            </Text>

            <View style={styles.quantitySectionRow}>
              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={decreaseQuantity}
                  accessibilityRole="button"
                  accessibilityLabel="Decrease quantity"
                >
                  <Text style={styles.quantityButtonText}>
                    −
                  </Text>
                </TouchableOpacity>

                <Text style={styles.quantityValue}>
                  {quantity}
                </Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={increaseQuantity}
                  accessibilityRole="button"
                  accessibilityLabel="Increase quantity"
                >
                  <Text style={styles.quantityButtonText}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* HOW RESERVING WORKS */}
          <View style={styles.reserveInfoCard}>
            <Text style={styles.reserveInfoTitle}>
              How reserving works
            </Text>

            <View style={styles.reserveInfoRow}>

              <View style={styles.reserveInfoItem}>
                <View style={styles.reserveInfoIconCircle}>
                  <Text style={styles.reserveInfoIcon}>
                    ✓
                  </Text>
                </View>

                <Text style={styles.reserveInfoLabel}>
                  Reserve your piece
                </Text>
              </View>

              <View style={styles.reserveInfoItem}>
                <View style={styles.reserveInfoIconCircle}>
                  <Text style={styles.reserveInfoIcon}>
                    💳
                  </Text>
                </View>

                <Text style={styles.reserveInfoLabel}>
                  Pay a 30% deposit
                </Text>
              </View>

              <View style={styles.reserveInfoItem}>
                <View style={styles.reserveInfoIconCircle}>
                  <Text style={styles.reserveInfoIcon}>
                    🚚
                  </Text>
                </View>

                <Text style={styles.reserveInfoLabel}>
                  Pick up or get it delivered
                </Text>
              </View>

            </View>
          </View>

          {/* TOTAL AND DEPOSIT */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelBold}>
                Total
              </Text>

              <Text style={styles.summaryValueBold}>
                {formatPrice(total)}
              </Text>
            </View>

            <View
              style={[
                styles.summaryRow,
                { marginBottom: 0 },
              ]}
            >
              <Text
                style={[
                  styles.summaryLabel,
                  localStyles.flexText,
                ]}
              >
                Deposit to reserve (30%)
              </Text>

              <Text
                style={[
                  styles.summaryValue,
                  localStyles.priceText,
                ]}
              >
                {formatPrice(deposit)}
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* FIXED BOTTOM ACTION BAR */}
      <View
        style={[
          styles.detailActionBar,
          localStyles.actionBar,
          {
            paddingBottom: Math.max(insets.bottom, 12),
            paddingHorizontal: isTablet ? 28 : 20,
          },
        ]}
      >
        <View style={localStyles.actionBarInner}>
          <TouchableOpacity
            style={[
              styles.customizeButton,
              localStyles.actionButton,
            ]}
            onPress={handleCustomize}
            accessibilityRole="button"
          >
            <Text
              style={[
                styles.customizeButtonText,
                localStyles.actionButtonText,
              ]}
            >
              Customize
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.reserveButton,
              localStyles.actionButton,
            ]}
            onPress={handleReserve}
            accessibilityRole="button"
          >
            <Text
              style={[
                styles.reserveButtonText,
                localStyles.actionButtonText,
              ]}
            >
              Reserve
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
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
    marginLeft: 8,
  },

  centerText: {
    textAlign: 'center',
  },

  sizeRow: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  sizeCard: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 85,
  },

  smallSizeCard: {
    minWidth: 75,
  },

  tabletSizeCard: {
    minWidth: 130,
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
    alignItems: 'center',
    gap: 12,
  },

  actionButton: {
    flex: 1,
    minWidth: 0,
  },

  actionButtonText: {
    textAlign: 'center',
    flexShrink: 1,
  },
});
