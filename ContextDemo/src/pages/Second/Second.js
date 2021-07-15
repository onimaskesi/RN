import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Second.style';
import {useSelector} from 'react-redux';

function Second() {
  const data = useSelector(selector => selector.list);
  const renderItem = ({item}) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{item}</Text>
    </View>
  );
  const keyExt = (_, index) => index.toString();

  const userName = useSelector(selector => selector.userName);
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExt} />
    </View>
  );
}

export default Second;
