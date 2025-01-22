import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';

const skillsData = [
  { id: '1', name: 'JavaScript', icon: require('../../../assets/javascript.png') },
  { id: '2', name: 'React Native', icon: require('../../../assets/reactnative.png') },
  { id: '3', name: 'UI/UX Design', icon: require('../../../assets/ux_ui.png') },
  { id: '4', name: 'Java', icon: require('../../../assets/java.png') },
];

const Skills = () => {
  const renderSkill = ({ item }) => (
    <View style={styles.skillItem}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.skillText}>{item.name}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/instruction.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>My Skills</Text>
        <FlatList
          data={skillsData}
          renderItem={renderSkill}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 250,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  skillText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Skills;
