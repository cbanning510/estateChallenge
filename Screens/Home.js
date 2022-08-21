import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import UserCard from '../Components/UserCard';

const BASE_URL = 'https://my.api.mockaroo.com/users.json';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);
    fetch(`${BASE_URL}?page=${page}&count=5&key=930279b0`)
      .then(res => res.json())
      .then(resData => {
        setPage(page + 1);
        setData([...data, ...resData.entries]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderItem = ({item}) => {
    return <UserCard item={item} />;
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          style={styles.loadButton}>
          <Text style={styles.buttonCopy}>
            {loading ? 'Loading' : 'Load More'}
          </Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Feature 2 Users</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.name.lastName + index.toString()}
          enableEmptySections={true}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{padding: 40}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 22,
    margin: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  loadButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: 140,
    backgroundColor: 'dodgerblue',
    borderRadius: 6,
  },
  buttonCopy: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
