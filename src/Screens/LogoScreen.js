import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../assets/Logo1.png'

const LogoScreen = () => {
  return (
    <View style={styles.container}>
          <Image source={logo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : "#0B002A",
  },

});

export default LogoScreen;
