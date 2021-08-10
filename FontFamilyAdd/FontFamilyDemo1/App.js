import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textBold}>Gilroy-ExtraBold</Text>
      <Text style={styles.textLight}>Gilroy-Light</Text>
      <Text style={styles.textMosaic}>PaletteMosaic-Regular</Text>
    </SafeAreaView>
  );
};

const baseStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
  },
});

const {text: baseTextStyle} = baseStyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    ...baseTextStyle,
    fontFamily: 'Gilroy-ExtraBold',
  },
  textLight: {
    ...baseTextStyle,
    fontFamily: 'Gilroy-Light',
  },
  textMosaic: {
    ...baseTextStyle,
    fontFamily: 'PaletteMosaic-Regular',
  },
});
