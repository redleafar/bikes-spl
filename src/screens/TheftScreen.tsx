import * as React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Picker,
  View
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import FormTextArea from "../components/FormTextArea";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any,any>;
}

interface State {
  bicicleta: string;
  descripcion: string;
  fecha: string
}

class TheftScreen extends React.Component<Props, State> {  
  static navigationOptions = {
    title: strings.THEFT_REPORT_TITLE,
  };

  readonly state: State = {
    bicicleta: "",
	  descripcion: "",
	  fecha: ""
  };
  
  handleDescripcionChange = (descripcion: string) => {
    this.setState({ descripcion: descripcion });
  };
  handleFechaChange = (fecha: string) => {
    this.setState({ fecha: fecha });
  };
  
  handleRegistroPress = () => {
    console.log("Login button pressed");
  };
  
  

  render() {
    const {
      bicicleta,
	  descripcion,
	  fecha
    } = this.state;
	
	let listaBicicletas = ['a'];
	const consultarBicicletas = (idUsuario: string) => { 
		return fetch('http://www.mocky.io/v2/5dbd079c330000a51a16a11a').then(response => 
			response.json().then(data => ({
				data: data,
				status: response.status
			})
		).then(res => {
			listaBicicletas = res.data.bicicletas;
			console.log(listaBicicletas);
		}));
	} ;
	
	consultarBicicletas("1");
	//console.log("LISTA2: " + listaBicicletas);
	
	return (
    <KeyboardAvoidingView
      style={styles.container}   
      behavior={constants.IS_IOS ? "padding" : undefined}     
    >
	  
		<View style={styles.form_top}>
			<Picker
			selectedValue={this.state.bicicleta}
			style={{height: 50, width: 300}}
			onValueChange={(itemValue, itemIndex) =>
				this.setState({bicicleta: itemValue})
			}>
				<Picker.Item label={"Bicicleta: XXX-YYYY-AAAA"} value={"1"} />
				<Picker.Item label={"Bicicleta: ZZZ-AAAA-BBBB"} value={"2"} />
				<Picker.Item label={"Bicicleta: XXX-YYYY-1234"} value={"3"} />
			  
			
			</Picker>
			
			<FormTextInput
				onChangeText={this.handleFechaChange}
				value={this.state.fecha}                        
				placeholder={strings.FECHA_ROBO}
				autoCorrect={false}            
				returnKeyType="next"
			/>

			<FormTextArea
				multiline = {true}
				onChangeText={this.handleDescripcionChange}
				value={this.state.descripcion}                        
				placeholder={strings.DESCRIPCION_ROBO}
				autoCorrect={false}            
				returnKeyType="next"
			/>
			
		</View>
		<View style={styles.form_bottom}>
			<Button
				label={strings.UBICACION_ROBO}            
				onPress={() => this.props.navigation.navigate('Map')}
			/>
			
			<Button
				label={strings.GUARDAR}     
				onPress={() => {}}
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
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form_top: {
    flex: 1,
    justifyContent: "flex-start",
    width: "80%"
  },
  form_bottom: {
    flex: 1,
    justifyContent: "flex-end",
    width: "80%"
  }
});

export default TheftScreen;