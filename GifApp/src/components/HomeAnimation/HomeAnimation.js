import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './HomeAnimationStyle';
import boxStyle from './BoxStyle';
import getColor from '../../styles/getColor';

const columnNumber = 7;
const rowNumber = 3;

const Box = ({color}) => {
  const style = boxStyle(color);
  return <View style={style.box} />;
};

function getBoxes(boxNumber) {
  const boxes = [];
  for (let i = 0; i < boxNumber; i++) {
    boxes.push(<Box key={i} color={getColor()} />);
  }
  return boxes;
}

function getBoxesRows(columnNum, rowNum) {
  const boxesRows = [];

  const boxesRow = key => (
    <View key={key} style={{flexDirection: 'row'}}>
      {getBoxes(columnNum)}
    </View>
  );

  for (let i = 0; i < rowNum; i++) {
    boxesRows.push(boxesRow(i));
  }

  return boxesRows;
}

let reRender = true;
const HomeAnimation = () => {
  const [reRenderState, setReRenderState] = useState(true);

  useEffect(() => {
    const intervalFunc = () => {
      setReRenderState(reRender);
      reRender = !reRender;
    };
    const interval = setInterval(intervalFunc, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {getBoxesRows(columnNumber, rowNumber)}
    </View>
  );
};

export default HomeAnimation;
