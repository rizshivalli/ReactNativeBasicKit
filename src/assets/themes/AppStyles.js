/**
 * This file defines the base application styles.
 */

import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export default {
  fullScreen: {flex: 1},
  verticalCenter: {justifyContent: 'center'},
  horizontalCenter: {alignItems: 'center'},
  center: {alignItems: 'center', justifyContent: 'center'},
  screenHeight: height,
  screenWidth: width,
};
