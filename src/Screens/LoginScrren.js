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

const LoginScreen = ({navigation}) => {

  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <View style={styles.v1}>
        <Image source={logo} />
      </View>
      <View style={styles.mainWrapper}>
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={{fontSize: 30, fontWeight:'400'}}> Log In </Text>
          </View>

          <View style={styles.textinput}>
            {/* <Fontisto name="email" size={25} /> */}
            <TextInput
              mode="outlined"
              label="Email"
              style={{backgroundColor: '#fff'}}
              right={<TextInput.Icon icon="email" />}
            />

            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={true}
              style={{backgroundColor: '#fff', marginTop: 10}}
              right={<TextInput.Icon icon="eye" />}
            />

            <View style={styles.links}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <Text style={{color: '#E70736'}}> Remember Me </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Fpass')}>
                <Text style={styles.fp}> Forgot Password ? </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button
            // mode="contained"
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
              Log In
            </Text>
          </Button>

          <View style={styles.acc}>
            <Text> New User? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#E70736'}}> Create New Account </Text>
            </TouchableOpacity>
          </View>
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
    fontfamily: 'Lexend',
    fontstyle: 'normal',
    fontweight: 500,
    fontsize: 25,
    lineheight: 31,
    marginTop: 20,
  },

  textinput: {
    marginVertical: 30,
    marginHorizontal: 30,
  },

  links: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  fp: {
    color: '#E70736',
  },

  btn: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius : 5,
    borderColor: 'black',
    marginHorizontal: 60,
  },

  acc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
});

export default LoginScreen;
