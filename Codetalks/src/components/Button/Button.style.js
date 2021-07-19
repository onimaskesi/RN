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
    backgroundColor: colors.orange,
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
    backgroundColor: colors.lightOrange,
    borderColor: colors.orange,
  },
  title: {
    ...base.title,
    color: colors.orange,
  },
});

const secondary_active = StyleSheet.create({
  ...secondary,
  container: {
    ...secondary.container,
    borderColor: colors.brown,
  },
  title: {
    ...secondary.title,
    color: colors.brown,
  },
});

const primary_active = StyleSheet.create({
  ...primary,
  container: {
    ...primary.container,
    backgroundColor: colors.brown,
  },
});

export default {primary, secondary, primary_active, secondary_active};
