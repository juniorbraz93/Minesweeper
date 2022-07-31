import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Flag from '../flag/Flag';

// import { Container } from './styles';

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagBtn}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={props.onNewGame}>
        <Text style={styles.btnLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagBtn: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  btn: {
    backgroundColor: '#999',
    padding: 5,
  },
  btnLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold',
  },
});
