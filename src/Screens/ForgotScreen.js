import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Checkbox, Button} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import logo from '../assets/Logo1.png';

const LoginScreen = () => {
 

  return (

        <View>
          <View style={styles.v1}>
            <Image source={logo} />
          </View>
          <View style={styles.mainWrapper}>
            <View style={styles.container}>
              <View style={styles.text}>
                <Text style={{fontSize: 30, fontWeight:'400'}}> Forgot Password </Text>
              </View>

              <View style={styles.prTextView}>
                <Text>Enter your registered email address and we will send you a link to reset your password:</Text>
              </View>

              <View style={styles.textinput}>
                {/* <Fontisto name="email" size={25} /> */}
                <TextInput
                  mode="outlined"
                  label="Email"
                  style={{backgroundColor: '#fff'}}
                  right={<TextInput.Icon icon="email" />}
                />
              </View>

              <Button
                // mode="contained"
                style={styles.btn}
                onPress={() => console.log('Pressed')}>
                <Text style={{color: 'black', fontSize:15,fontWeight:'500'}}> Submit </Text>
              </Button>
            </View>
          </View>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '90%',
    margin: 'auto',
    position: 'absolute',
    alignSelf: 'center',
    top: -50,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
  },

  v1: {
    height: '45%',
    backgroundColor: '#0B002A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainWrapper: {
    height: '55%',
    backgroundColor: '#ededed',
  },

  text: {
    alignItems: 'center',
    marginTop: 20,
  },

  textinput: {
    marginVertical: 30,
    marginHorizontal: 20,
  },


  btn: {
    marginVertical: 20,
    borderWidth: 1,
    borderRadius : 5,
    borderColor: 'black',
    marginHorizontal: 60,
  },

  prTextView : {
    alignItems : 'center',
    marginHorizontal : 20,
    marginTop : 15
  },

 
});

export default LoginScreen;
