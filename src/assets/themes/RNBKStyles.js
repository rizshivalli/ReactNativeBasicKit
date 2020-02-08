/**
 * This file defines the base application styles.
 */

import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export default {
  fullScreen: {flex: 1},
  verticalCenter: {justifyContent: 'center'},
  verticalEnd: {justifyContent: 'flex-end'},
  verticalStart: {justifyContent: 'flex-start'},
  horizontalCenter: {alignItems: 'center'},
  horizontalEnd: {alignItems: 'flex-end'},
  horizontalStart: {alignItems: 'flex-start'},
  center: {alignItems: 'center', justifyContent: 'center'},
  screenHeight: height,
  screenWidth: width,
};
