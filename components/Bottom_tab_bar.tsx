import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

type Props = {
  active: 'Home' | 'Shop' | 'Notification' | 'Profile';
  navigation: any;
};

const tabs = [
  { key: 'Home', icon: '🏠', route: 'Dashboard' },
  { key: 'Shop', icon: '🛍️', route: 'Shop' },
  { key: 'Notification', icon: '🔔', route: 'Notification' },
  { key: 'Profile', icon: '👤', route: 'Profile' },
] as const;

export default function Bottom_tab_bar({ active, navigation }: Props) {
  return (
    <View style={styles.bottomTabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => navigation.navigate(tab.route)}
        >
          <Text style={styles.tabIcon}>{tab.icon}</Text>
          <Text style={[styles.tabLabel, active === tab.key && styles.tabLabelActive]}>
            {tab.key}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}