import React from 'react';
import {View, Text} from 'react-native';
import styles from './UserCard.style';

function UserCard({user}) {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{user.username}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
}

export default UserCard;
