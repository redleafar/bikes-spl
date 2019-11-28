import * as React from "react";
import {  
  KeyboardAvoidingView,  
  View,
  ScrollView,
  StyleSheet,
  Picker,
  ActivityIndicator
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";
import App from "../../App";
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

interface State {
  userName: string;
  name: string;  
  email: string;
  password: string;
  passwordRepeat: string;
  idType: string;
  idNum: string;
  phone: string;
  address: string;
  company: string;
  showIndicator: boolean;
}

class RegisterScreen extends React.Component<Props, State> {  
  static navigationOptions = {    
    title: strings.REGISTER_SCREEN_TITLE,    
    /* drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/drawer.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ), */
  };

  passwordInputRef = React.createRef<FormTextInput>();
  passwordRepeatInputRef = React.createRef<FormTextInput>();

  readonly state: State = {
    userName: "",
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    idType: "Cédula",    
    idNum: "",    
    phone: "",    
    address: "",    
    company: "",
    showIndicator: false   
  };

  handleUsernameChange = (userName: string) => {
    this.setState({ userName: userName });
  };

  handleNameChange = (name: string) => {
    this.setState({ name: name });
  };  

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };  

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handlePasswordRepeatChange = (passwordRepeat: string) => {
    this.setState({ passwordRepeat: passwordRepeat });
  };

  handleIdtypeChange = (idType: string) => {
    this.setState({ idType: idType });
  };

  handleIdnumChange = (idNum: string) => {
    this.setState({ idNum: idNum });
  };

  handlePhoneChange = (phone: string) => {
    this.setState({ phone: phone });
  };

  handleAddressChange = (address: string) => {
    this.setState({ address: address });
  };

  handleCompanyChange = (company: string) => {
    this.setState({ company: company });
  };  

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };  

  handleRegisterPress = () => {
    console.log("Register button pressed");
    this.setState({ showIndicator: true });
    registerRequest(
      this.state.userName, 
      this.state.name, 
      this.state.email, 
      this.state.password,       
      this.state.idType, 
      this.state.idNum, 
      this.state.phone, 
      this.state.address, 
      this.state.company, 
      this
    );
  }; 

  render() {
    const {
      userName,
      name,      
      email,
      password,    
      idType,
      phone,
      address,
      company,
      showIndicator
    } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once    
    return (
      <KeyboardAvoidingView
        style={styles.container}   
        behavior={constants.IS_IOS ? "padding" : undefined}     
      >        
        { showIndicator && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <ScrollView style={styles.scrollView}>
          <View style={styles.form}>
          <FormTextInput
              value={this.state.userName}
              onChangeText={this.handleUsernameChange}
              placeholder={strings.USERNAME}
              autoCorrect={false}            
              returnKeyType="next"                        
            />
            <FormTextInput
              value={this.state.name}                        
              onChangeText={this.handleNameChange}
              placeholder={strings.NAME}
              autoCorrect={false}            
              returnKeyType="next"                        
            />          
            <Picker
              selectedValue={this.state.idType}              
              style={{height: 50, alignSelf: 'stretch'}}            
              onValueChange={(itemValue, itemIndexid) =>
                this.handleIdtypeChange(itemValue)              
              }>
              <Picker.Item label="Cédula" value="Cédula" />
              <Picker.Item label="Tarjeta de identidad" value="Tarjeta de identidad" />
            </Picker>
            <FormTextInput
              value={this.state.idNum}
              onChangeText={this.handleIdnumChange}
              placeholder={strings.IDNUMBER}
              autoCorrect={false}            
              returnKeyType="next"                        
            />
            <FormTextInput
              value={this.state.phone} 
              onChangeText={this.handlePhoneChange}
              placeholder={strings.PHONE}
              autoCorrect={false}            
              returnKeyType="next"                        
            />
            <FormTextInput
              value={this.state.address} 
              onChangeText={this.handleAddressChange}
              placeholder={strings.ADDRESS}
              autoCorrect={false}            
              returnKeyType="next"            
            />
            <FormTextInput
              value={this.state.company} 
              onChangeText={this.handleCompanyChange}
              placeholder={strings.COMPANY}
              autoCorrect={false}            
              returnKeyType="next"            
            />
            <FormTextInput
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              onSubmitEditing={this.handleEmailSubmitPress}
              placeholder={strings.EMAIL_PLACEHOLDER}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"                     
            />
            <FormTextInput
              ref={this.passwordInputRef}
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              secureTextEntry={true}            
            />
            <FormTextInput
              ref={this.passwordRepeatInputRef}
              value={this.state.passwordRepeat}
              onChangeText={this.handlePasswordRepeatChange}
              placeholder={strings.PASSWORD_REPEAT}
              secureTextEntry={true}
              returnKeyType="done"          
            />          
            <Button
              label={strings.REGISTER}            
              onPress={this.handleRegisterPress}
              disabled={!userName || !name || !email || !password || !phone || !address || !company }
            />
          </View>
        </ScrollView>
        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    marginTop: "10%",  
    alignSelf: "center",  
    justifyContent: "center",
    width: "80%"
  },
  scrollView: {    
    flex: 1,    
    width: "100%"
  }
});

function registerRequest(
    userName:string, 
    name:string, 
    email: string, 
    password:string, 
    idType:string, 
    idNum:string, 
    phone:string, 
    address:string, 
    company:string, 
    screen: React.Component<Props, State>
  ) {  
  fetch('https://bikes-spl-bicibogo.herokuapp.com/registro', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usuario: userName,      
      nombre: name,      
      correo: email,
      password: password,
      tipoIdentificacion: idType,
      numIdentificacion: idNum,
      telefono: phone,
      direccion: address,
      empresa: company,
      tipoAplicacion: App.flavor  == "socialbike" ? 1 : App.flavor  == "gobike" ? 2 : App.flavor  == "bicibogo" ? 3 : 1
    }),
  })
  .then((response) => response.text())
  .then((responseJson) => {
    alert(responseJson);
    screen.setState({ showIndicator: false });
    screen.props.navigation.navigate('Register')
  })
  .catch((error) => {
    alert(error);
  });
}

export default RegisterScreen;