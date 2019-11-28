import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";
import App from "../../App";
import {ToastAndroid} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

interface State {
  email: string;
  password: string;
  // We add a field that tracks if the user has already
  // touched the input...
  emailTouched: boolean;
  passwordTouched: boolean;
  showIndicator: boolean;
}

class LoginScreen extends React.Component<Props, State> {
  passwordInputRef = React.createRef<FormTextInput>();  

  readonly state: State = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false,
    showIndicator: false
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  // ...and we update them in the input onBlur callback
  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
    this.setState({ showIndicator: true });
    loginRequest(this.state.email, this.state.password, this);
  };
  
  render() {
    
    const {
      email,
      password,
      emailTouched,
      passwordTouched,
      showIndicator
    } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once
    const emailError =
      !email && emailTouched
        ? strings.EMAIL_REQUIRED
        : undefined;
    const passwordError =
      !password && passwordTouched
        ? strings.PASSWORD_REQUIRED
        : undefined;
		
  const imageLogo = 
        App.flavor  == "bicibogo" ?  require("../assets/images/logo_bicibogo.png")
        :
        App.flavor  == "goinbike" ? require("../assets/images/logo_bicibogo.png")
        :
        require("../assets/images/logo_bicibogo.png")
    return (
      <KeyboardAvoidingView
        style={styles.container}   
        behavior={constants.IS_IOS ? "padding" : undefined}>
        <Image source={imageLogo} style={styles.logo} />
        
        { showIndicator && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        
        <View style={styles.form}>                            
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={strings.EMAIL_PLACEHOLDER}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            onBlur={this.handleEmailBlur}
            error={emailError}
          />
          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
          />
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
          <Button
            label={strings.SIGN_UP}
            onPress={() => this.props.navigation.navigate('Map')}
          />
        </View>
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
    width: "80%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

function loginRequest(email: string, password: string, screen: React.Component<Props, State>) {  
  fetch('https://bikes-spl-bicibogo.herokuapp.com/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      correo: email,
      password: password,
    }),
  })
  .then((response) => response.text())
  .then((responseJson) => {
    alert(responseJson);
    screen.setState({ showIndicator: false });
    screen.props.navigation.navigate('Map');    
  })
  .catch((error) => {
    alert(error);
  });
}

export default LoginScreen