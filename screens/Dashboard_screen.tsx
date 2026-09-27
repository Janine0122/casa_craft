import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles';
import { furnitureData } from '../data/furniture_data';
import Bottom_tab_bar from '../components/Bottom_tab_bar';

const categories = [
  { key: 'Shelf', icon: '🗄️' },
  { key: 'Chairs', icon: '🪑' },
  { key: 'Tables', icon: '🍽️' },
  { key: 'Bed', icon: '🛏️' },
] as const;

export default function Dashboard_screen({ navigation }: any) {
  const popularItems = furnitureData.slice(0, 2);

  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerLogo}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.headerLogoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerBrand}>Casa Craft</Text>
        </View>

        <TouchableOpacity
          style={styles.searchBar}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Shop', { focusSearch: true })}
        >
          <Text style={[styles.searchInput, { color: '#8A8A8A' }]}>Search</Text>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>

        <View style={styles.categoryRow}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={styles.categoryChip}
              onPress={() => navigation.navigate('Shop', { category: cat.key })}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryLabel}>{cat.key}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bannerCard}>
          <View style={styles.sectionTag}>
            <Text style={styles.sectionTagText}>shop now</Text>
          </View>
        </View>

        <View style={styles.sectionTag}>
          <Text style={styles.sectionTagText}>Popular</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularRow}>
          {popularItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.popularCard}
              onPress={() => navigation.navigate('ItemDetails', { item })}
            >
              <View style={styles.popularImagePlaceholder}>
                <Text>🛋️</Text>
              </View>
              <Text style={styles.popularName}>{item.name}</Text>
              <View style={styles.popularPriceRow}>
                <Text style={styles.popularPrice}>Price: ₱{item.price}</Text>
                <Text style={styles.popularStar}>⭐</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 20 }} />
      </ScrollView>

      <Bottom_tab_bar active="Home" navigation={navigation} />
    </View>
  );
}