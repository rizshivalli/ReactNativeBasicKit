import {ToastAndroid} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export const snackBarDuration = () => {
  return {
    LENGTH_INDEFINITE: Snackbar.LENGTH_INDEFINITE,
  };
};

export const showSnackBar = async (
  message,
  title = 'OK',
  onPress = () => {},
  duration = Snackbar.LENGTH_LONG,
) => {
  return Snackbar.show({
    text: message.toString(),
    duration: duration,
    action: {
      text: title,
      textColor: '#FFFFFF',
      onPress: () => {
        onPress();
      },
    },
  });
};
