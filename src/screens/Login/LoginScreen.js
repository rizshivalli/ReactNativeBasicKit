import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {AppStyles} from '../../assets/themes';
import {logo} from '../../assets/images';
import {RNBKTextInput} from '../../assets/components';
import {Button} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const validateLogin = () => {
    if (!email.includes('@')) {
      Alert.alert('Email Not Valid');
    } else if (password.length <= 6) {
      Alert.alert('Password must contain 6 characters');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={AppStyles.horizontalCenter}>
        <Image source={logo} style={styles.image} />
      </View>

      <RNBKTextInput
        label="Email"
        value={email}
        placeholder="Please enter your email"
        onChangeHandler={text => setEmail(text)}
        style={styles.textInput}
        keyboardType="email-address"
      />
      <RNBKTextInput
        label="Password"
        value={password}
        placeholder="Please enter your password"
        onChangeHandler={text => setPassword(text)}
        style={styles.textInput}
        isInputSecure={true}
      />
      <Button
        mode="contained"
        onPress={() => {
          validateLogin();
        }}>
        Welcome
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...AppStyles.fullScreen, marginHorizontal: '5%'},
  image: {
    borderRadius: 100,
  },
  textInput: {marginVertical: '2%'},
});
export default LoginScreen;
