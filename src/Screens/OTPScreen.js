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

const OTPScreen = ({navigation}) => {
 

  return (

        <View>
          <View style={styles.v1}>
            <Image source={logo} />
          </View>
          <View style={styles.mainWrapper}>
            <View style={styles.container}>
              <View style={styles.text}>
                <Text style={{fontSize: 30, fontWeight : '400'}}> Confirm OTP </Text>
              </View>

              <View style={styles.prTextView}>
                <Text>Please enter the verification code that we have sent to the mobile number +9549878945</Text>
              </View>
                <View style={styles.optView}>
                    <TextInput style={styles.inputView} keyboardType="numeric"/>
                    <TextInput style={styles.inputView} keyboardType="numeric"/>
                    <TextInput style={styles.inputView} keyboardType="numeric"/>
                    <TextInput style={styles.inputView} keyboardType="numeric"/>
                </View>

                <View style={styles.resend}>
                    <Text> Time Remaining 2:00 </Text>
                    <TouchableOpacity>
                        <Text style={{color:'#E70736'}}> Resend </Text>
                    </TouchableOpacity>
                </View>
              <Button
                // mode="contained"
                style={styles.btn}
                onPress={() => console.log('Pressed')}>
                <Text style={{color: 'black', fontSize:15,fontWeight:'500'}}> Verify </Text>
              </Button>

              <TouchableOpacity style={styles.changeText} onPress={()=>navigation.navigate('ChangeNum')}>
                <Text style={{color:'#E70736'}}> Change Mobile Number </Text>
              </TouchableOpacity>
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

  btn: {
    marginVertical: 10,
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

  changeText : {
    alignItems : 'center',
    marginVertical : 20
  },

 inputView : {
    marginVertical : 20,
    width : 50,
    height : 50,
    backgroundColor : '#fff'
 },

 optView : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-evenly'
 },

 resend : {
    flex : 1,
    flexDirection : "row",
    justifyContent  :'space-evenly',
    marginVertical : 20,
    marginHorizontal : 40
 }
});

export default OTPScreen;
