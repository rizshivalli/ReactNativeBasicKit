import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {doGet, endPoint} from '../../api/server';

const UsersScreen = () => {
  useEffect(() => {
    fetchApi();
  }, []);

  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await doGet(endPoint.users);
    setData(response);
  };
  console.log(data);
  return (
    <>
      {data ? (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{margin: '2%'}}>
                <View>
                  <Text>{item.name}</Text>
                </View>

                <Text>{item.username}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default UsersScreen;
