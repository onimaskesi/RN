import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FavoriteEdit({route}) {
  const favText = 'Favorite Edit \n' + route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{favText}</Text>
    </View>
  );
}

export default FavoriteEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
