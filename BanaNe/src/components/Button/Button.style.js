import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  icon: {
    margin: 5,
  },
  title: {
    fontSize: 18,
    margin: 5,
  },
});

const primary = StyleSheet.create({
  ...base,
  container: {
    ...base.container,
    backgroundColor: colors.green,
    borderColor: 'white',
  },
  title: {
    ...base.title,
    color: 'white',
  },
});

const secondary = StyleSheet.create({
  ...base,
  container: {
    ...base.container,
    backgroundColor: colors.lightGreen,
    borderColor: colors.green,
  },
  title: {
    ...base.title,
    color: colors.green,
  },
});

const secondary_active = StyleSheet.create({
  ...secondary,
  container: {
    ...secondary.container,
    borderColor: colors.darkGreen,
  },
  title: {
    ...secondary.title,
    color: colors.darkGreen,
  },
});

const primary_active = StyleSheet.create({
  ...primary,
  container: {
    ...primary.container,
    backgroundColor: colors.darkGreen,
  },
});

export default {primary, secondary, primary_active, secondary_active};
