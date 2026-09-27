import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function Welcome_screen({ navigation }: any) {
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
      <Text style={styles.tagline}>"Your home, your choice"</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}