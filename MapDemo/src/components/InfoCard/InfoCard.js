import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoCard.style';
import Modal from 'react-native-modal';

const InfoCard = ({visible, close, user}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      onBackButtonPress={close}
      backdropOpacity={0.2}>
      <View style={styles.container}>
        {user && <Text>{user.first_name + ' ' + user.last_name}</Text>}
      </View>
    </Modal>
  );
};

export default InfoCard;
