import React, { useState, useEffect } from 'react'; 
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { router } from 'expo-router';

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { updatedUserData } = route.params || {};

  const lightTheme = {
    background: '#ffffff',
    text: '#000000',
  };

  const darkTheme = {
    background: '#000000',
    text: '#ffffff',
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [birthday, setBirthday] = useState('January 2, 2003');
  const [status, setStatus] = useState('In Relationship');
  const [location, setLocation] = useState('Gusa, Cagayan De Oro');
  const [interest, setInterest] = useState('Coding, Gaming, Reading');

  useEffect(() => {
    if (updatedUserData) {
      setBirthday(updatedUserData.birthday);
      setStatus(updatedUserData.status);
      setLocation(updatedUserData.location);
      setInterest(updatedUserData.interest);
    }
  }, [updatedUserData]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSocialMediaPress = (platform) => {
    let url;
    switch (platform) {
      case 'Facebook':
        url = 'https://www.facebook.com/minato.hatake.1466';
        break;
      case 'Twitter':
        url = 'https://x.com/dullTwigss';
        break;
      case 'Instagram':
        url = 'https://www.instagram.com/itspupperfish?igsh=OGNnMzBoNG1oNDhx';
        break;
      default:
        console.log('Invalid platform');
        return;
    }
    Linking.openURL(url).catch((err) => console.error("Failed to open URL: ", err));
  };

  const images = [
    { source: require('../../../assets/1.jpg'), style: styles.imageWide },
    { source: require('../../../assets/2.jpg'), style: styles.imageSmall },
    { source: require('../../../assets/3.jpg'), style: styles.imageSmall },
    { source: require('../../../assets/4.jpg'), style: styles.imageSmall },
    { source: require('../../../assets/5.jpg'), style: styles.imageSmall },
    { source: require('../../../assets/6.jpg'), style: styles.imageWide },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../../../assets/sea.jpg')} style={styles.backgroundImage} />

      <View style={styles.themeToggleContainer}>
        <Ionicons name={isDarkMode ? 'moon' : 'sunny'} size={24} color={theme.text} />
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image source={require('../../../assets/10.jpg')} style={styles.profileImage} />
          <Text style={[styles.name, { color: theme.text }]}>Mariah Shannen Sumaria</Text>
          <Text style={[styles.description, { color: theme.text }]}>{'Developer'}</Text>

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity onPress={() => handleSocialMediaPress('Facebook')}>
              <FontAwesome name="facebook" size={20} color="#3b5998" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMediaPress('Twitter')}>
              <FontAwesome name="twitter" size={20} color="#1DA1F2" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMediaPress('Instagram')}>
              <FontAwesome name="instagram" size={20} color="#C13584" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.aboutMeSection}>
            <TouchableOpacity style={styles.aboutItem}>
              <FontAwesome6 name="cake-candles" size={24} color="#f4c2c2" />
              <Text style={[styles.aboutMeText, { color: theme.text }]}>{birthday}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="heart" size={24} color="#f4c2c2" />
              <Text style={[styles.aboutMeText, { color: theme.text }]}>{status}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="location" size={24} color="#f4c2c2" />
              <Text style={[styles.aboutMeText, { color: theme.text }]}>{location}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="star" size={24} color="#f4c2c2" />
              <Text style={[styles.aboutMeText, { color: theme.text }]}>{interest}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageGrid}>
            {images.map((image, index) => (
              <Image key={index} source={image.source} style={[styles.image, image.style]} />
            ))}
          </View>

          <TouchableOpacity 
            style={styles.manageUserButton} 
            onPress={() => {
              router.navigate('ManageUser', { existingUserData: { birthday, status, location, interest } });
            }}
          >
            <Text style={styles.manageUserButtonText}>Manage User</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.4,
  },
  themeToggleContainer: {
    position: 'absolute',
    top: 35,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: 100,
    paddingTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Updock',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  aboutMeSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
  },
  aboutItem: {
    width: '45%',  // Adjusted for two items per row
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'column',
  },
  aboutMeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    borderRadius: 15,
    margin: 5,
  },
  imageLarge: {
    width: 150,
    height: 150,
  },
  imageSmall: {
    width: 90,
    height: 90,
  },
  imageWide: {
    width: 160,
    height: 100,
  },
  manageUserButton: {
    backgroundColor: '#f4c2c2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  manageUserButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
