import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import news_datas from './news_data';
import NewsCard from './components/NewsCard';
import Banner from './components/Banner';
import news_banner_datas from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtractor = (item, index) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>News</Text>
      <View style={styles.body}>
        <FlatList
          ListHeaderComponent={() => <Banner banner={news_banner_datas} />}
          data={news_datas}
          renderItem={renderNews}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    marginLeft: 30,
    marginBottom: 5,
  },
  body: {
    flex: 1,
    margin: 15,
  },
});

export default App;
