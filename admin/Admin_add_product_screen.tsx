import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Switch } from 'react-native';
import { styles, colors } from '../styles';

const categoryOptions = ['Sofas', 'Tables', 'Chairs', 'Beds', 'Storage'];
const leadTimeOptions = ['2 to 3 weeks', '3 to 4 weeks', '5 to 6 weeks'];
const colorOptions = ['#E7DFD0', '#D9B27C', '#5C3A21', '#9CAF88', '#2B2B2B'];
const depositOptions = [20, 30, 50];

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default function Admin_add_product_screen({ navigation }: any) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categoryOptions[1]);
  const [price, setPrice] = useState('');
  const [soldAs, setSoldAs] = useState<'Ready stock' | 'Made to order'>('Made to order');
  const [leadTime, setLeadTime] = useState(leadTimeOptions[1]);

  const [selectedColors, setSelectedColors] = useState<string[]>([colorOptions[0], colorOptions[1], colorOptions[2]]);
  const [sizes, setSizes] = useState<string[]>(['160 × 90 cm', '180 × 90 cm']);
  const [selectedSize, setSelectedSize] = useState('180 × 90 cm');
  const [isAddingSize, setIsAddingSize] = useState(false);
  const [newSizeText, setNewSizeText] = useState('');
  const [acceptCustomSize, setAcceptCustomSize] = useState(true);

  const [depositPercent, setDepositPercent] = useState(30);
  const [showInApp, setShowInApp] = useState(true);

  const numericPrice = parseFloat(price) || 0;
  const depositAmount = Math.round((numericPrice * depositPercent) / 100);
  const remainingAmount = numericPrice - depositAmount;

  const toggleColor = (hex: string) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
  };

  const handleAddSize = () => {
    const trimmed = newSizeText.trim();
    if (trimmed.length > 0 && !sizes.includes(trimmed)) {
      setSizes((prev) => [...prev, trimmed]);
      setSelectedSize(trimmed);
    }
    setNewSizeText('');
    setIsAddingSize(false);
  };

  const handleSave = () => {
    // No backend yet — this just logs the new product and goes back.
    console.log('New product:', {
      name,
      category,
      price: numericPrice,
      soldAs,
      leadTime: soldAs === 'Made to order' ? leadTime : undefined,
      colors: selectedColors,
      sizes,
      acceptCustomSize,
      depositPercent,
      showInApp,
    });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailHeaderRow}>
          <View style={styles.detailHeaderLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backIconText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.customizeHeaderTitle}>Add product</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.photoUploadBox}>
          <Text style={styles.photoUploadIcon}>📷</Text>
          <Text style={styles.photoUploadTitle}>Add photos</Text>
          <Text style={styles.photoUploadSubtitle}>The first photo is the cover</Text>
        </TouchableOpacity>

        <Text style={[styles.optionsSectionTitle, { marginBottom: 8 }]}>Name</Text>
        <TextInput
          style={[styles.input, { marginBottom: 16 }]}
          placeholder="e.g. Tala dining table"
          value={name}
          onChangeText={setName}
        />

        <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Category</Text>
        <View style={[styles.optionRow, { marginBottom: 16 }]}>
          {categoryOptions.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.optionChip, category === cat && styles.optionChipSelected]}
              onPress={() => setCategory(cat)}
            >
              <Text style={[styles.optionChipText, category === cat && styles.optionChipTextSelected]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.optionsSectionTitle, { marginBottom: 8 }]}>Price</Text>
        <TextInput
          style={[styles.input, { marginBottom: 16 }]}
          placeholder="₱ 0"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <View style={styles.optionsCard}>
          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>How is it sold?</Text>
          <View style={styles.fulfillmentToggleRow}>
            <TouchableOpacity
              style={[
                styles.fulfillmentToggleOption,
                soldAs === 'Ready stock' && styles.fulfillmentToggleOptionSelected,
              ]}
              onPress={() => setSoldAs('Ready stock')}
            >
              <Text
                style={[
                  styles.fulfillmentToggleText,
                  soldAs === 'Ready stock' && styles.fulfillmentToggleTextSelected,
                ]}
              >
                Ready stock
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.fulfillmentToggleOption,
                soldAs === 'Made to order' && styles.fulfillmentToggleOptionSelected,
              ]}
              onPress={() => setSoldAs('Made to order')}
            >
              <Text
                style={[
                  styles.fulfillmentToggleText,
                  soldAs === 'Made to order' && styles.fulfillmentToggleTextSelected,
                ]}
              >
                Made to order
              </Text>
            </TouchableOpacity>
          </View>

          {soldAs === 'Made to order' && (
            <>
              <Text style={[styles.optionsSectionTitle, { marginBottom: 10 }]}>Lead time</Text>
              <View style={styles.optionRow}>
                {leadTimeOptions.map((lt) => (
                  <TouchableOpacity
                    key={lt}
                    style={[styles.optionChip, leadTime === lt && styles.optionChipSelected]}
                    onPress={() => setLeadTime(lt)}
                  >
                    <Text style={[styles.optionChipText, leadTime === lt && styles.optionChipTextSelected]}>
                      {lt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Text style={[styles.depositSummaryText, { marginTop: 10 }]}>
                Customers see this as the estimated wait after the deposit.
              </Text>
            </>
          )}
        </View>

        <View style={styles.optionsCard}>
          <Text style={[styles.optionsSectionTitle, { marginBottom: 2 }]}>Customization</Text>
          <Text style={[styles.depositSummaryText, { marginTop: 0, marginBottom: 14 }]}>
            Customers can request these options in the app.
          </Text>

          <Text style={[styles.optionsSectionTitle, { marginBottom: 10 }]}>Colors</Text>
          <View style={[styles.colorSwatchRow, { flexWrap: 'wrap' }]}>
            {colorOptions.map((hex) => (
              <TouchableOpacity
                key={hex}
                style={[
                  styles.colorSwatch,
                  { backgroundColor: hex },
                  selectedColors.includes(hex) && styles.colorSwatchSelected,
                ]}
                onPress={() => toggleColor(hex)}
              />
            ))}
          </View>

          <Text style={[styles.optionsSectionTitle, { marginTop: 4, marginBottom: 10 }]}>Sizes</Text>
          <View style={styles.optionRow}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[styles.optionChip, selectedSize === size && styles.optionChipSelected]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[styles.optionChipText, selectedSize === size && styles.optionChipTextSelected]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
            {!isAddingSize && (
              <TouchableOpacity style={styles.addSizeChip} onPress={() => setIsAddingSize(true)}>
                <Text style={styles.addSizeChipText}>+ Add size</Text>
              </TouchableOpacity>
            )}
          </View>

          {isAddingSize && (
            <View style={styles.newSizeInputRow}>
              <TextInput
                style={styles.newSizeInput}
                placeholder="e.g. 200 × 90 cm"
                value={newSizeText}
                onChangeText={setNewSizeText}
                autoFocus
              />
              <TouchableOpacity style={styles.newSizeAddButton} onPress={handleAddSize}>
                <Text style={styles.newSizeAddButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={[styles.detailDivider, { marginTop: 18, marginBottom: 14 }]} />

          <View style={styles.toggleSettingRow}>
            <View style={styles.toggleSettingTextWrap}>
              <Text style={styles.toggleSettingTitle}>Accept custom size requests</Text>
              <Text style={styles.toggleSettingSubtitle}>
                You review each custom request and confirm the price before the customer pays.
              </Text>
            </View>
            <Switch
              value={acceptCustomSize}
              onValueChange={setAcceptCustomSize}
              trackColor={{ false: '#E3D6C2', true: colors.text }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.optionsCard}>
          <Text style={[styles.optionsSectionTitle, { marginBottom: 12 }]}>Reservation deposit</Text>
          <View style={styles.optionRow}>
            {depositOptions.map((pct) => (
              <TouchableOpacity
                key={pct}
                style={[styles.optionChip, depositPercent === pct && styles.optionChipSelected]}
                onPress={() => setDepositPercent(pct)}
              >
                <Text
                  style={[
                    styles.optionChipText,
                    depositPercent === pct && styles.optionChipTextSelected,
                  ]}
                >
                  {pct}%
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.depositSummaryText}>
            {numericPrice > 0
              ? `Customer pays ${formatPrice(depositAmount)} to reserve. The remaining ${formatPrice(
                  remainingAmount
                )} is collected at pickup or delivery.`
              : 'Enter a price above to see the deposit breakdown.'}
          </Text>
        </View>

        <View style={styles.optionsCard}>
          <View style={styles.toggleSettingRow}>
            <Text style={styles.toggleSettingTitle}>Show in customer app</Text>
            <Switch
              value={showInApp}
              onValueChange={setShowInApp}
              trackColor={{ false: '#E3D6C2', true: colors.text }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <View style={{ height: 10 }} />
      </ScrollView>

      <View style={styles.customizeActionBar}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveChangesButton} onPress={handleSave}>
          <Text style={styles.saveChangesButtonText}>Save product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}