/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};

    default:
      return state;
  }
}

function App() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex: 1}}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

function First() {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  function updateHandler() {
    dispatch({type: 'UPDATE_COUNTER'});
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        borderWidth: 2,
        margin: 20,
      }}>
      <Text style={{fontSize: 30, margin: 10}}>First: {counter}</Text>
      <Button title="Update" onPress={updateHandler} />
    </View>
  );
}

function Second() {
  const counter = useSelector(selector => selector.counter);
  return (
    <View style={{flex: 1, borderWidth: 2, margin: 20}}>
      <Text style={{fontSize: 30, margin: 10}}>Second: {counter}</Text>
    </View>
  );
}
