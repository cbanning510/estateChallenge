import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UserCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.text
        }>{`${item.name.firstName} ${item.name.lastName}`}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item})}>
        <Text style={styles.link}>Click for Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'orange',
    alignSelf: 'center',
    width: 300,
    marginVertical: 12,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  link: {color: 'dodgerblue', marginTop: 6},
});

export default UserCard;
