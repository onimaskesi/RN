import React from 'react';
import {TextInput, View} from 'react-native';
import strings from '../../strings';
import colors from '../../styles/colors';
import styles from './SearchBoxStyle';

const SearchBox = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={strings.searchPlaceholder}
        onChangeText={onSearch}
        placeholderTextColor={colors.green}
      />
    </View>
  );
};

export default SearchBox;
