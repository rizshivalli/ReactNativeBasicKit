import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert, Text} from 'react-native';
import {RNBKStyles} from '../../assets/themes';
import {logo} from '../../assets/images';
import {RNBKTextInput} from '../../assets/components';
import {Button} from 'react-native-paper';
import {showSnackBar} from '../../utils/Toast';
import firebase from 'react-native-firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [showLoading, setShowLoading] = useState(false);

  const validateLogin = () => {
    if (!email.includes('@')) {
      showSnackBar('Email Not Valid');
    } else if (password.length <= 6) {
      showSnackBar('Password must contain 6 characters');
    } else {
      login();
    }
  };

  const login = async () => {
    setShowLoading(true);
    try {
      const doLogin = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setShowLoading(false);
      if (doLogin.user) {
        console.log(doLogin);
        navigation.navigate('Home');
      }
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.inputs}>
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
        <View>
          <Button
            mode="contained"
            onPress={() => {
              validateLogin();
            }}
            style={styles.loginButton}>
            Welcome
          </Button>
          <Button
            mode="outlined"
            labelStyle={{color: 'red'}}
            style={styles.registerButton}
            onPress={() => {
              showSnackBar('registration page not designed');
            }}>
            Not a user yet? Register
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...RNBKStyles.fullScreen, margin: '5%'},
  image: {
    borderRadius: 100,
  },
  textInput: {marginVertical: '2%'},
  inputs: {...RNBKStyles.verticalEnd, flex: 1},
  imageContainer: {
    flex: 1,
    ...RNBKStyles.horizontalCenter,
    ...RNBKStyles.verticalCenter,
  },
  registerButton: {borderColor: 'red', borderWidth: 2, marginVertical: '2.5%'},
  loginButton: {marginVertical: '2.5%'},
});
export default LoginScreen;
