import { View, Text } from 'react-native';
import { styles } from '../styles';
import Admin_tab_bar from './Admin_tab_bar';

export default function Admin_reports_screen({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: '#B99A6F' }}>
      <View style={[styles.dashboardContainer, styles.placeholderScreenWrapper]}>
        <Text style={styles.placeholderScreenText}>Sales and production reports coming soon.</Text>
      </View>
      <Admin_tab_bar active="Reports" navigation={navigation} />
    </View>
  );
}