import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textBold}>Gilroy-ExtraBold</Text>
      <Text style={styles.textLight}>Gilroy-Light</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBold: {
    fontFamily: 'Gilroy-ExtraBold',
  },
  textLight: {
    fontFamily: 'Gilroy-Light',
  },
});
