import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
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
      // showSnackBar('Successfuly logged in');
      login();
      // navigation.navigate('Home');
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
      <View style={RNBKStyles.horizontalCenter}>
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
  container: {...RNBKStyles.fullScreen, marginHorizontal: '5%'},
  image: {
    borderRadius: 100,
  },
  textInput: {marginVertical: '2%'},
});
export default LoginScreen;
