import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

test('should match with snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot();
});

test('should add item to list', () => {
  const comp = render(<App />);

  const list = comp.getByTestId('list');
  const listDataLength = list.props.data.length;

  const changeText = 'test';
  const inputArea = comp.getByTestId('input-area');
  fireEvent.changeText(inputArea, changeText);

  const buttonForAdd = comp.getByTestId('button-touchable');
  fireEvent.press(buttonForAdd);

  expect(list.props.data.length).toBe(listDataLength + 1);
});
