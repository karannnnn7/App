import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {TextInput, Checkbox, Button} from 'react-native-paper';
import Logo from '../assets/Logo1.png';

const ScrollScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [phoneNumber, setphoneNumber] = useState('');

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <View style={styles.img}>
            <Image source={Logo} />
          </View>

          <View style={styles.mainwrapper}>
            <View style={styles.container}>
              <View style={styles.text}>
                <Text style={styles.headText}> Register </Text>
              </View>

              <View style={styles.textinput}>
                <TextInput
                  mode="outlined"
                  label="First Name"
                  style={{backgroundColor: '#fff'}}
                />

                <TextInput
                  mode="outlined"
                  label="Last Name"
                  style={{backgroundColor: '#fff', marginTop: 10}}
                />

                <TextInput
                  mode="outlined"
                  label="Email"
                  style={{backgroundColor: '#fff', marginTop: 10}}
                  right={<TextInput.Icon icon="email" />}
                />

                <PhoneInput
                  defaultValue={phoneNumber}
                  withShadow
                  containerStyle={{
                    backgroundColor: '#fff',
                    marginTop: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginHorizontal : -1,
                  }}
                />

                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry={true}
                  style={{backgroundColor: '#fff', marginTop: 10}}
                  right={<TextInput.Icon icon="eye" />}
                />
              </View>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                </View>
                  <View style={styles.textCon}> 
                      <Text> I agree to </Text>
                      <TouchableOpacity><Text style={styles.TermLink}>Usage Terms</Text></TouchableOpacity>
                      <Text> and </Text>
                      <TouchableOpacity><Text style={styles.TermLink}>Privacy Policy</Text></TouchableOpacity>
                      
                  </View>
                
              </View>

              <Button
                // mode="contained"
                style={styles.btn}
                onPress={() => navigation.navigate('OTP')}>
                <Text style={{color: 'black', fontSize:15,fontWeight:'500'}}> Register </Text>
              </Button>

              <View style={styles.login}>
                <Text> Existing User </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: '#E70736'}}> Log In </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 250,
    backgroundColor: '#0B002A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    alignItems: 'center',
    marginTop: 20,
  },

  headText : {
    fontSize : 25,
    fontWeight : '400'
  },

  mainwrapper: {
    height: 560,
    backgroundColor: '#ededed',
  },

  container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '90%',
    margin: 'auto',
    position: 'absolute',
    alignSelf: 'center',
    top: -50,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
    marginTop: 20,
  },

  textinput: {
    marginVertical: 20,
    marginHorizontal: 20,
  },

  btn: {
    marginHorizontal: 60,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius :5,
    borderColor: 'black',
  },

  login: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  checkbox: {
    marginLeft: 14,
    marginHorizontal : -10
  },

  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textCon : {
    flex : 1,
    flexDirection : 'row',
    
  },

  TermLink : {
    color : '#E70736',
  }
});

export default ScrollScreen;
