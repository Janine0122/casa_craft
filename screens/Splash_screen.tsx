import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

export default function Splash_screen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.logoCircle}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.brand}>Casa Craft</Text>
    </View>
  );
}