import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const HomeScreen = ({navigation}) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
