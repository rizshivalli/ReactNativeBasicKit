import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import firebase from 'react-native-firebase';

const HomeScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <ActivityIndicator />;
  if (!user) {
    return navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="go to User screen"
        onPress={() => navigation.navigate('Users')}
      />
    </View>
  );
};
HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerRight: () => (
    <Button
      title="Logout"
      // buttonStyle={{
      //   padding: 0,
      //   marginRight: 20,
      //   backgroundColor: 'transparent',
      // }}
      // icon={<Icon name="cancel" size={28} color="white" />}
      onPress={() => {
        firebase.auth().signOut();
      }}
    />
  ),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
