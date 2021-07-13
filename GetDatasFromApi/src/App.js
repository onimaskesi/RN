import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import UserCard from './components/UserCard';
import axios from 'axios';

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*
  async function fetchData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    setUserList(response.data);
    setIsLoading(false);
  }
  */

  function fetchData() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserList(response.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderUser = ({item}) => <UserCard user={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
