import * as React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Picker,
  View
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";

interface Props {

}

interface State {
  bicicleta: string;
  usuario: string;
  costo: string;
  fechaInicio: string;
  fechaFin: string;
}

class RentBikeScreen extends React.Component<Props, State> { 
  static navigationOptions = {
    title: strings.RENT_BIKE_TITLE,
  };
  
  readonly state: State = {
    bicicleta: "",
	usuario: "",
	costo: "",
	fechaInicio: "",
	fechaFin: ""
  };
  
  handleCorreoChange = (usuario: string) => {
    this.setState({ usuario: usuario });
  };
  handleFechaInicioChange = (fechaInicio: string) => {
    this.setState({ fechaInicio: fechaInicio });
  };
  handleFinChange = (fechaFin: string) => {
    this.setState({ fechaFin: fechaFin });
  };
  handleCostoChange = (costo: string) => {
    this.setState({ costo: costo });
  };
  
  handleRegistroPress = () => {
    console.log("Login button pressed");
  }; 

  render() {

	
	// const list = consultarBicicletas();
	
	return (
    <KeyboardAvoidingView
      style={styles.container}   
      behavior={constants.IS_IOS ? "padding" : undefined}     
    >
	  
		<View style={styles.form_top}>
			
			<Picker
			selectedValue={this.state.bicicleta}
			style={{height: 50, width: 200}}
			onValueChange={(itemValue, itemIndex) =>
				this.setState({bicicleta: itemValue})
			}>
				<Picker.Item label={"Bicicleta: XXX-YYYY-AAAA"} value={"1"} />
				<Picker.Item label={"Bi cicleta: ZZZ-AAAA-BBBB"} value={"2"} />
				<Picker.Item label={"Bicicleta: XXX-YYYY-1234"} value={"3"} />
			 
			</Picker>
		
			<FormTextInput
				value={this.state.usuario}
				onChangeText={this.handleCorreoChange}				
				placeholder={strings.CORREO_USUARIO_ALQUILER}
				autoCorrect={false}            
				returnKeyType="next"
			/>
			<FormTextInput
				value={this.state.fechaInicio}                        
				onChangeText={this.handleFechaInicioChange}
				placeholder={strings.FECHA_INICIO_ALQUILER}
				autoCorrect={false}            
				returnKeyType="next"
			/>
			<FormTextInput
				value={this.state.fechaFin}
				onChangeText={this.handleFinChange}				
				placeholder={strings.FECHA_FIN_ALQUILER}
				autoCorrect={false}            
				returnKeyType="next"
			/>
			<FormTextInput
				onChangeText={this.handleCostoChange}
				value={this.state.costo}                        
				placeholder={strings.COSTO_ALQUILER}
				autoCorrect={false}            
				returnKeyType="next"
			/>
			
		</View>
		<View style={styles.form_bottom}>
			<Button
        label={strings.GUARDAR}
        onPress = {() => {}}        
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

export default RentBikeScreen;