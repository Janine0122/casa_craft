import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { FurnitureItem, colorHex } from '../data/furniture_data';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getSizeModifier = (index: number, total: number) => {
  if (total <= 1) return 0;
  if (index === 0) return -500;
  if (index === total - 1) return 1200;
  return 0;
};

export default function Item_details_screen({ navigation, route }: any) {
  const item: FurnitureItem = route.params.item;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    Math.floor((item.sizes.length - 1) / 2)
  );
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedColor = item.colors[selectedColorIndex];
  const selectedSize = item.sizes[selectedSizeIndex];
  const sizeModifier = getSizeModifier(selectedSizeIndex, item.sizes.length);
  const unitPrice = item.price + sizeModifier;
  const total = unitPrice * quantity;
  const deposit = Math.round(total * 0.3);

  const decreaseQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQuantity = () => setQuantity((q) => q + 1);

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
    navigation.navigate('Customization', { item, selectedSize, selectedColor, quantity });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailHeaderRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={[styles.headerBrand, { marginLeft: 10 }]}>Casa Craft</Text>
          </View>
        </View>

        <View style={styles.detailImageWrapper}>
          <View style={styles.detailImagePlaceholder}>
            <Text style={styles.detailImageEmoji}>🛋️</Text>
          </View>
          <View
            style={[
              styles.stockTagPill,
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
          <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsFavorite(!isFavorite)}>
            <Text style={styles.favoriteIcon}>{isFavorite ? '♥' : '♡'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoNameRow}>
            <Text style={styles.infoName}>{item.name}</Text>
            <Text style={styles.infoPrice}>{formatPrice(unitPrice)}</Text>
          </View>
          <Text style={styles.infoDescription}>{item.description}</Text>
          <Text style={styles.infoAvailability}>
            {item.stockStatus === 'In Stock'
              ? `${item.stockCount} available`
              : `Ready in about ${item.readyDays} days`}
          </Text>
        </View>

        <View style={styles.optionsCard}>
          <View style={styles.optionsSectionTitleRow}>
            <Text style={styles.optionsSectionTitle}>Finish</Text>
            <Text style={styles.optionsSectionValue}>{selectedColor}</Text>
          </View>
          <View style={styles.colorSwatchRow}>
            {item.colors.map((color, index) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colorHex[color] ?? '#CCCCCC' },
                  selectedColorIndex === index && styles.colorSwatchSelected,
                ]}
                onPress={() => setSelectedColorIndex(index)}
              />
            ))}
          </View>

          <Text style={styles.optionsSectionTitle}>Size</Text>
          <View style={[styles.sizeOptionRow, { marginTop: 12 }]}>
            {item.sizes.map((size, index) => {
              const modifier = getSizeModifier(index, item.sizes.length);
              const isSelected = selectedSizeIndex === index;
              return (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeOptionCard, isSelected && styles.sizeOptionCardSelected]}
                  onPress={() => setSelectedSizeIndex(index)}
                >
                  <Text style={[styles.sizeOptionLabel, isSelected && styles.sizeOptionLabelSelected]}>
                    {size}
                  </Text>
                  <Text style={[styles.sizeOptionModifier, isSelected && styles.sizeOptionModifierSelected]}>
                    {modifier === 0 ? 'Included' : modifier > 0 ? `+₱${modifier}` : `-₱${Math.abs(modifier)}`}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Quantity</Text>
          <View style={styles.quantitySectionRow}>
            <View style={styles.quantityRow}>
              <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.reserveInfoCard}>
          <Text style={styles.reserveInfoTitle}>How reserving works</Text>
          <View style={styles.reserveInfoRow}>
            <View style={styles.reserveInfoItem}>
              <View style={styles.reserveInfoIconCircle}>
                <Text style={styles.reserveInfoIcon}>✓</Text>
              </View>
              <Text style={styles.reserveInfoLabel}>Reserve your piece</Text>
            </View>
            <View style={styles.reserveInfoItem}>
              <View style={styles.reserveInfoIconCircle}>
                <Text style={styles.reserveInfoIcon}>💳</Text>
              </View>
              <Text style={styles.reserveInfoLabel}>Pay a 30% deposit</Text>
            </View>
            <View style={styles.reserveInfoItem}>
              <View style={styles.reserveInfoIconCircle}>
                <Text style={styles.reserveInfoIcon}>🚚</Text>
              </View>
              <Text style={styles.reserveInfoLabel}>Pick up or get it delivered</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelBold}>Total</Text>
            <Text style={styles.summaryValueBold}>{formatPrice(total)}</Text>
          </View>
          <View style={[styles.summaryRow, { marginBottom: 0 }]}>
            <Text style={styles.summaryLabel}>Deposit to reserve (30%)</Text>
            <Text style={styles.summaryValue}>{formatPrice(deposit)}</Text>
          </View>
        </View>

        <View style={{ height: 10 }} />
      </ScrollView>

      <View style={styles.detailActionBar}>
        <TouchableOpacity style={styles.customizeButton} onPress={handleCustomize}>
          <Text style={styles.customizeButtonText}>Customize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}