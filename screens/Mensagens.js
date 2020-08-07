import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mensagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mensagens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc46b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Mensagens;
