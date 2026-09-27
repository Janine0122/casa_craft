import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { notificationData } from '../data/notification_data';
import Bottom_tab_bar from '../components/Bottom_tab_bar';

const filters = ['All', 'Orders', 'Quotation'] as const;

export default function Notification_screen({ navigation }: any) {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('All');

  const filtered = notificationData.filter(
    (n) => activeFilter === 'All' || n.type === activeFilter
  );
  const todayItems = filtered.filter((n) => n.section === 'Today');
  const earlierItems = filtered.filter((n) => n.section === 'Earlier');

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

        <View style={styles.filterChipRow}>
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  activeFilter === f && styles.filterChipTextActive,
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {todayItems.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>Today</Text>
            {todayItems.map((item) => (
              <View key={item.id} style={styles.notificationCard}>
                <Text style={styles.notifIcon}>{item.icon}</Text>
                <View style={styles.notifBody}>
                  <Text style={styles.notifTitle}>{item.title}</Text>
                  <Text style={styles.notifDesc}>{item.description}</Text>
                  <Text style={styles.notifTime}>{item.time}</Text>
                </View>
              </View>
            ))}
          </>
        )}

        {earlierItems.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>Earlier</Text>
            {earlierItems.map((item) => (
              <View key={item.id} style={styles.notificationCard}>
                <Text style={styles.notifIcon}>{item.icon}</Text>
                <View style={styles.notifBody}>
                  <Text style={styles.notifTitle}>{item.title}</Text>
                  <Text style={styles.notifDesc}>{item.description}</Text>
                  <Text style={styles.notifTime}>{item.time}</Text>
                </View>
              </View>
            ))}
          </>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      <Bottom_tab_bar active="Notification" navigation={navigation} />
    </View>
  );
}