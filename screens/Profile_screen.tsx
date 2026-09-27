import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles';
import Bottom_tab_bar from '../components/Bottom_tab_bar';

// Placeholder — replace with the actual signed-in user's data once auth is wired up
const initialUser = {
  name: 'Juan Dela Cruz',
  email: 'juan.delacruz@email.com',
  contactNo: '+63 912 345 6789',
};

const orderTracks = [
  { key: 'All', label: 'All Order' },
  { key: 'ToReceive', label: 'To Receive' },
  { key: 'ToPay', label: 'To Pay' },
] as const;

export default function Profile_screen({ navigation }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [draft, setDraft] = useState(initialUser);

  const handleEditPress = () => {
    setDraft(user);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(draft);
    setIsEditing(false);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

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

        <View style={styles.profileTopCard}>
          {orderTracks.map((track) => (
            <TouchableOpacity
              key={track.key}
              style={styles.orderTrackChip}
              onPress={() => navigation.navigate('OrderStatus', { filter: track.key })}
            >
              <Text style={styles.orderTrackText}>{track.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.profileDetailsCard}>
          <TouchableOpacity
            style={styles.editIconButton}
            onPress={isEditing ? handleSave : handleEditPress}
          >
            <Text style={styles.editIconText}>{isEditing ? '✓' : '✎'}</Text>
          </TouchableOpacity>

          <View style={styles.lineFormRow}>
            <Text style={styles.lineFormLabel}>Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.lineFormInput}
                value={draft.name}
                onChangeText={(text) => setDraft({ ...draft, name: text })}
              />
            ) : (
              <Text style={styles.lineFormValue}>{user.name}</Text>
            )}
          </View>

          <View style={styles.lineFormRow}>
            <Text style={styles.lineFormLabel}>Email Address</Text>
            {isEditing ? (
              <TextInput
                style={styles.lineFormInput}
                value={draft.email}
                onChangeText={(text) => setDraft({ ...draft, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            ) : (
              <Text style={styles.lineFormValue}>{user.email}</Text>
            )}
          </View>

          <View style={styles.lineFormRow}>
            <Text style={styles.lineFormLabel}>Contact no.</Text>
            {isEditing ? (
              <TextInput
                style={styles.lineFormInput}
                value={draft.contactNo}
                onChangeText={(text) => setDraft({ ...draft, contactNo: text })}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.lineFormValue}>{user.contactNo}</Text>
            )}
          </View>

          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <Bottom_tab_bar active="Profile" navigation={navigation} />
    </View>
  );
}