import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from '../field/Field';

const mineField = props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={e => props.onSelectField(r, c)}
        />
      );
    });
    return <View key={r}>{columns}</View>;
  });
  return <View style={styles.container}>{rows}</View>;
};

export default mineField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    flexDirection: 'row',
  },
});
