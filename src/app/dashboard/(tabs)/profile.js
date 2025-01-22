import React, { useState, useEffect } from 'react';  
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Linking, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRoute } from '@react-navigation/native';

const Profile = () => {
  const route = useRoute();
  const { updatedUserData } = route.params || {};

  const [birthday, setBirthday] = useState('January 2, 2003');
  const [status, setStatus] = useState('In Relationship');
  const [location, setLocation] = useState('Gusa, Cagayan De Oro');
  const [interest, setInterest] = useState('Coding, Gaming, Reading');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (updatedUserData) {
      setBirthday(updatedUserData.birthday);
      setStatus(updatedUserData.status);
      setLocation(updatedUserData.location);
      setInterest(updatedUserData.interest);
    }
  }, [updatedUserData]);

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

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/pink.png')} style={styles.backgroundImage} />

      {/* Image Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={30} color="#ffffff" />
            </TouchableOpacity>
            {selectedImage && (
              <Image source={selectedImage.source} style={styles.modalImage} />
            )}
          </View>
        </View>
      </Modal>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image source={require('../../../assets/10.jpg')} style={styles.profileImage} />
          <Text style={styles.name}>Mariah Shannen Sumaria</Text>
          <Text style={styles.description}>{'Developer'}</Text>

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
              <Text style={styles.aboutMeText}>{birthday}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="heart" size={24} color="#f4c2c2" />
              <Text style={styles.aboutMeText}>{status}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="location" size={24} color="#f4c2c2" />
              <Text style={styles.aboutMeText}>{location}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Ionicons name="star" size={24} color="#f4c2c2" />
              <Text style={styles.aboutMeText}>{interest}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageGrid}>
            {images.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
                <Image source={image.source} style={[styles.image, image.style]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  scrollContent: {
    paddingBottom: 20,
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
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
    color: '#000000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: '#000000',
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
    width: '45%',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'column',
  },
  aboutMeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#000000',
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
  imageSmall: {
    width: 90,
    height: 90,
  },
  imageWide: {
    width: 160,
    height: 100,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
});

export default Profile;
