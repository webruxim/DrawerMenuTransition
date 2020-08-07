import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41d5fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Contato;
