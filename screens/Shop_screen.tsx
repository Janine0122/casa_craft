import { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles';
import { furnitureData, FurnitureItem } from '../data/furniture_data';
import Bottom_tab_bar from '../components/Bottom_tab_bar';

const categories = [
  { key: 'Shelf', icon: '🗄️' },
  { key: 'Chairs', icon: '🪑' },
  { key: 'Tables', icon: '🍽️' },
  { key: 'Bed', icon: '🛏️' },
] as const;

export default function Shop_screen({ navigation, route }: any) {
  const initialCategory = route?.params?.category ?? 'Shelf';
  const shouldFocusSearch = route?.params?.focusSearch ?? false;
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (shouldFocusSearch) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [shouldFocusSearch]);

  const filteredItems = furnitureData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    if (search.trim().length > 0) {
      return matchesSearch;
    }
    return item.category === selectedCategory;
  });

  const renderItem = ({ item }: { item: FurnitureItem }) => (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => navigation.navigate('ItemDetails', { item })}
    >
      <View style={styles.itemImagePlaceholder}>
        <Text>🛋️</Text>
      </View>
      <View style={styles.itemInfo}>
        <View style={styles.itemNameRow}>
          <Text style={styles.itemName}>{item.name}</Text>
          {item.featured && <Text style={styles.itemStar}>⭐</Text>}
        </View>
        <View style={styles.itemPriceRow}>
          <Text style={styles.itemPrice}>₱{item.price}</Text>
          <View
            style={[
              styles.stockDot,
              item.stockStatus === 'In Stock' ? styles.stockDotInStock : styles.stockDotMadeOrder,
            ]}
          />
          <Text style={styles.stockLabel}>{item.stockStatus}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <View style={styles.dashboardContainer}>
        <View style={styles.shopHeaderRow}>
          <View style={styles.shopHeaderLeft}>
            <View style={styles.headerLogo}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.headerLogoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.headerBrand}>Casa Craft</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <TextInput
            ref={searchInputRef}
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>

        {!isSearchFocused && (
          <View style={styles.categoryRow}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.key}
                style={[
                  styles.categoryChip,
                  selectedCategory === cat.key && styles.toggleButtonActive,
                ]}
                onPress={() => setSelectedCategory(cat.key)}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text
                  style={[
                    styles.categoryLabel,
                    selectedCategory === cat.key && styles.toggleTextActive,
                  ]}
                >
                  {cat.key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {!isSearchFocused && <Bottom_tab_bar active="Shop" navigation={navigation} />}
    </View>
  );
}