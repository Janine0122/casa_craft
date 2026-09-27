import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

type Props = {
  active: 'Home' | 'Products' | 'Orders' | 'Reports';
  navigation: any;
};

const tabs = [
  { key: 'Home', icon: '🏠', route: 'AdminDashboard' },
  { key: 'Products', icon: '📦', route: 'AdminProducts' },
  { key: 'Orders', icon: '📋', route: 'AdminOrders' },
  { key: 'Reports', icon: '📊', route: 'AdminReports' },
] as const;

export default function Admin_tab_bar({ active, navigation }: Props) {
  return (
    <View style={styles.adminTabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.adminTabItem}
          onPress={() => navigation.navigate(tab.route)}
        >
          <Text style={styles.adminTabIcon}>{tab.icon}</Text>
          <Text style={[styles.adminTabLabel, active === tab.key && styles.adminTabLabelActive]}>
            {tab.key}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}