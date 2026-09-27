import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles';
import { FurnitureItem, colorHex } from '../data/furniture_data';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getModifier = (index: number, total: number) => {
  if (total <= 1) return 0;
  if (index === 0) return -500;
  if (index === total - 1) return 1200;
  return 700;
};

export default function Customization_screen({ navigation, route }: any) {
  const { item, selectedSize: initialSize, selectedColor: initialColor, quantity } = route.params as {
    item: FurnitureItem;
    selectedSize: string;
    selectedColor: string;
    quantity: number;
  };

  const materialOptions = [
    { label: item.materials[0] ?? 'Standard Material', modifier: 0 },
    ...item.materials.slice(1).map((m, i) => ({ label: m, modifier: 500 + i * 200 })),
  ];

  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(
    Math.max(0, item.colors.indexOf(initialColor))
  );
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    Math.max(0, item.sizes.indexOf(initialSize))
  );
  const [isCustomSize, setIsCustomSize] = useState(false);
  const [specialRequest, setSpecialRequest] = useState('');

  const selectedColor = item.colors[selectedColorIndex];
  const materialModifier = materialOptions[selectedMaterialIndex].modifier;
  const sizeModifier = isCustomSize ? 1500 : getModifier(selectedSizeIndex, item.sizes.length);

  const estimatedPrice = item.price + materialModifier + sizeModifier;

  const handleCancel = () => navigation.goBack();

  const handleSaveChanges = () => {
    navigation.navigate('Reservation', {
      item,
      selectedSize: isCustomSize ? 'Custom Size' : item.sizes[selectedSizeIndex],
      selectedColor,
      selectedMaterial: materialOptions[selectedMaterialIndex].label,
      specialRequest,
      quantity,
      total: estimatedPrice * quantity,
      deposit: Math.round(estimatedPrice * quantity * 0.3),
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailHeaderRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.customizeHeaderTitle}>Customize</Text>
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
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoNameRow}>
            <Text style={styles.infoName}>{item.name}</Text>
            <Text style={styles.infoPrice}>{formatPrice(estimatedPrice)}</Text>
          </View>
        </View>

        <View style={styles.optionsCard}>
          <Text style={styles.optionsSectionTitle}>Material</Text>
          <View style={{ marginTop: 12 }}>
            {materialOptions.map((material, index) => {
              const isSelected = selectedMaterialIndex === index;
              return (
                <TouchableOpacity
                  key={material.label}
                  style={[styles.materialOptionRow, isSelected && styles.materialOptionRowSelected]}
                  onPress={() => setSelectedMaterialIndex(index)}
                >
                  <Text
                    style={[
                      styles.materialOptionLabel,
                      isSelected && styles.materialOptionLabelSelected,
                    ]}
                  >
                    {material.label}
                  </Text>
                  {material.modifier !== 0 && (
                    <Text
                      style={[
                        styles.materialOptionModifier,
                        isSelected && styles.materialOptionModifierSelected,
                      ]}
                    >
                      +₱{material.modifier}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
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
        </View>

        <View style={styles.optionsCard}>
          <Text style={styles.optionsSectionTitle}>Size</Text>
          <View style={{ marginTop: 12 }}>
            {item.sizes.map((size, index) => {
              const modifier = getModifier(index, item.sizes.length);
              const isSelected = !isCustomSize && selectedSizeIndex === index;
              return (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeListOptionRow, isSelected && styles.sizeListOptionRowSelected]}
                  onPress={() => {
                    setSelectedSizeIndex(index);
                    setIsCustomSize(false);
                  }}
                >
                  <Text
                    style={[
                      styles.sizeListOptionLabel,
                      isSelected && styles.sizeListOptionLabelSelected,
                    ]}
                  >
                    {size}
                  </Text>
                  <Text
                    style={[
                      styles.sizeListOptionModifier,
                      isSelected && styles.sizeListOptionModifierSelected,
                    ]}
                  >
                    {modifier === 0 ? 'Included' : modifier > 0 ? `+₱${modifier}` : `-₱${Math.abs(modifier)}`}
                  </Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={[styles.sizeListOptionRow, isCustomSize && styles.sizeListOptionRowSelected]}
              onPress={() => setIsCustomSize(true)}
            >
              <Text
                style={[styles.sizeListOptionLabel, isCustomSize && styles.sizeListOptionLabelSelected]}
              >
                Custom size
              </Text>
              <Text
                style={[
                  styles.sizeListOptionModifier,
                  isCustomSize && styles.sizeListOptionModifierSelected,
                ]}
              >
                Est. +₱1,500
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.optionsCard}>
          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Special requests</Text>
          <TextInput
            style={styles.textAreaInput}
            placeholder="For example: rounded corners, a lower height, or an extra shelf"
            multiline
            maxLength={200}
            value={specialRequest}
            onChangeText={setSpecialRequest}
          />
          <Text style={styles.charCountText}>{specialRequest.length}/200</Text>
        </View>

        <View style={styles.infoBanner}>
          <Text style={styles.infoBannerIcon}>✓</Text>
          <Text style={styles.infoBannerText}>
            {item.stockStatus === 'In Stock'
              ? `This is our standard ${item.name.toLowerCase()}. It is in stock and ready in about 3 days.`
              : `This is a made-to-order ${item.name.toLowerCase()}. It will be ready in about ${item.readyDays ?? 7} days.`}
          </Text>
        </View>

        <View style={{ height: 10 }} />
      </ScrollView>

      <View style={styles.customizeActionBar}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveChangesButton} onPress={handleSaveChanges}>
          <Text style={styles.saveChangesButtonText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}