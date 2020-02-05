import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const RNBKTextInput = ({
  mode = 'outlined',
  label,
  value,
  placeholder,
  onChangeHandler,
  style,
  keyboardType,
  isInputSecure,
}) => {
  return (
    <TextInput
      mode={mode}
      label={label}
      value={value}
      placeholder={placeholder}
      onChangeText={text => {
        onChangeHandler(text);
      }}
      style={style}
      keyboardType={keyboardType}
      secureTextEntry={isInputSecure}
    />
  );
  s;
};

export default RNBKTextInput;
