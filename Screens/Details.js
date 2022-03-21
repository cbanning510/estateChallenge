import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import UserDetail from '../Components/UserDetail';

const Details = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>User Details</Text>
      <View style={styles.userDetailsContainer}>
        <UserDetail
          title="name"
          text={`${item.name.firstName} ${item.name.lastName}`}
        />
        <UserDetail title="email" text={`${item.email}`} />
        <UserDetail title="gender" text={`${item.gender}`} />
        <UserDetail title="role" text={`${item.role}`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
  },
  userDetailsContainer: {
    width: '90%',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 22,
    margin: 30,
  },
});

export default Details;
