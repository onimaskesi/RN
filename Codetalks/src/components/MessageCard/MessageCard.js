import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.username}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
