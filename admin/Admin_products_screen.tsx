import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { styles, colors } from '../styles';
import { initialAdminProducts, AdminProduct } from './admin_products_data';
import { colorHex } from '../data/furniture_data';
import Admin_tab_bar from './Admin_tab_bar';

const formatPrice = (n: number) => '₱' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const filters = ['All', 'Ready stock', 'Made to order'] as const;

export default function Admin_products_screen({ navigation }: any) {
  const [products, setProducts] = useState<AdminProduct[]>(initialAdminProducts);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const readyStockCount = products.filter((p) => p.item.stockStatus === 'In Stock').length;
  const madeOrderCount = products.filter((p) => p.item.stockStatus === 'Made Order').length;

  const filterCounts: Record<(typeof filters)[number], number> = {
    All: products.length,
    'Ready stock': readyStockCount,
    'Made to order': madeOrderCount,
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Ready stock' && p.item.stockStatus === 'In Stock') ||
      (activeFilter === 'Made to order' && p.item.stockStatus === 'Made Order');
    return matchesSearch && matchesFilter;
  });

  const toggleVisibility = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.item.id === id ? { ...p, visible: !p.visible } : p))
    );
  };

  const adjustStock = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.item.id === id ? { ...p, stockQty: Math.max(0, p.stockQty + delta) } : p
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.adminHeaderRow}>
          <Text style={styles.adminHeaderBrand}>Casa Craft</Text>
        </View>

        <View style={styles.productsHeaderTitleRow}>
          <Text style={styles.productsHeaderTitle}>Products</Text>
          <TouchableOpacity
            style={styles.addProductButton}
            onPress={() => navigation.navigate('AdminAddProduct')}
          >
            <Text style={styles.addProductButtonText}>+ Add product</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            value={search}
            onChangeText={setSearch}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>

        <View style={styles.productFilterRow}>
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.productFilterChip, activeFilter === f && styles.productFilterChipActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Text
                style={[
                  styles.productFilterChipText,
                  activeFilter === f && styles.productFilterChipTextActive,
                ]}
              >
                {f} {filterCounts[f]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {filteredProducts.map(({ item, visible, stockQty, leadTime }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.adminProductCard}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('AdminAddProduct', {
                product: { item, visible, stockQty, leadTime },
              })
            }
          >
            <View style={styles.adminProductTopRow}>
              <View style={styles.adminProductThumb}>
                <Text style={styles.adminProductThumbEmoji}>🛋️</Text>
              </View>
              <View style={styles.adminProductMainInfo}>
                <View style={styles.adminProductNameRow}>
                  <Text style={styles.adminProductName}>{item.name}</Text>
                  <Switch
                    value={visible}
                    onValueChange={() => toggleVisibility(item.id)}
                    trackColor={{ false: '#E3D6C2', true: colors.text }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                <View style={styles.adminProductPriceCategoryRow}>
                  <Text style={styles.adminProductPrice}>{formatPrice(item.price)}</Text>
                  <Text style={styles.adminProductCategory}>{item.category}</Text>
                </View>
                <View style={styles.colorDotsRow}>
                  {item.colors.slice(0, 3).map((color) => (
                    <View
                      key={color}
                      style={[styles.colorDot, { backgroundColor: colorHex[color] ?? '#CCCCCC' }]}
                    />
                  ))}
                  <Text style={styles.sizesCountText}>
                    {item.sizes.length} size{item.sizes.length > 1 ? 's' : ''}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.adminProductBottomRow}>
              {item.stockStatus === 'In Stock' ? (
                <>
                  <View style={styles.stockBadgeInStock}>
                    <Text style={styles.stockBadgeTextInStock}>In stock</Text>
                  </View>
                  <View style={styles.stockStepperRow}>
                    <TouchableOpacity
                      style={styles.stockStepperButton}
                      onPress={() => adjustStock(item.id, -1)}
                    >
                      <Text style={styles.stockStepperButtonText}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockStepperValue}>{stockQty}</Text>
                    <TouchableOpacity
                      style={styles.stockStepperButton}
                      onPress={() => adjustStock(item.id, 1)}
                    >
                      <Text style={styles.stockStepperButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.stockBadgeMadeOrder}>
                    <Text style={styles.stockBadgeTextMadeOrder}>{leadTime}</Text>
                  </View>
                  <View style={styles.editProductButton}>
                    <Text style={styles.editProductButtonText}>✎ Edit</Text>
                  </View>
                </>
              )}
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>

      <Admin_tab_bar active="Products" navigation={navigation} />
    </View>
  );
}