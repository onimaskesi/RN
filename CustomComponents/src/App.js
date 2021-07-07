import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        title="Albert Einstein"
        text="Hayal gücü bilgiden daha önemlidir."
      />
      <Card
        title="Charlie Chaplin"
        text="Hayat, uzak çekimde komedi, yakın planda trajedidir."
      />
      <Card title="onimaskesi" text="Hayat bir sabunsa, köpürt beni pakizem." />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
