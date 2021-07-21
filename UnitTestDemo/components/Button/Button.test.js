import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';
import styles from './Button.style';

test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
  const titleText = 'test';
  const comp = render(<Button title={titleText} />);

  const buttonText = comp.getByTestId('button-title').children[0];

  expect(buttonText).toBe(titleText);
});

test('should triggered onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button onClick={mockFunction} />);

  const buttonTouchable = comp.getByTestId('button-touchable');
  fireEvent(buttonTouchable, 'press');

  expect(mockFunction).toBeCalled();
});

test('should render default theme style as primary style', () => {
  const comp = render(<Button />);

  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchObject(styles.primary.container);
});

test('should render given theme style', () => {
  const selectedTheme = 'secondary';
  const comp = render(<Button theme={selectedTheme} />);

  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchObject(styles[selectedTheme].container);
});
