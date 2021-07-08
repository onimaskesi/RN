import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBox.style';

const SearchBox = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBox;
