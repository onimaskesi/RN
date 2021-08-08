import colors from './colors';

let colorCounter = 1;

export default () => {
  switch (colorCounter) {
    case 1:
      colorCounter++;
      return colors.red;
    case 2:
      colorCounter++;
      return colors.green;
    case 3:
      colorCounter++;
      return colors.blue;
    case 4:
      colorCounter = 1;
      return colors.purple;
  }
};
