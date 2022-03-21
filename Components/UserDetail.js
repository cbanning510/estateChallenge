import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const UserDetail = ({title = '', text}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Text style={styles.title}>{`${title}: `}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    marginVertical: 10,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
  },
});

export default UserDetail;
