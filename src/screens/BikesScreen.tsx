import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
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
  biciCodigo: string;
  biciModelo: string;
  biciMarca: string;
  biciColor: string;
  biciSerial: string;
  biciFechaCompra: string;
  biciValorComercial: string;
  // We add a field that tracks if the user has already
  // touched the input...
  codigoTouched: boolean;
  modeloTouched: boolean;
  marcaTouched: boolean;
  colorTouched: boolean;
  serialTouched: boolean;
  fechaTouched: boolean;
  valorTouched: boolean;
  
}

class BikesScreen extends React.Component<{}, Props, State> {  
  static navigationOptions = {
    title: strings.REGISTER_BIKE_TITLE,
  };

  readonly state: State = {
    biciCodigo: "",
	biciModelo: "",
	biciMarca: "",
	biciColor: "",
	biciSerial: "",
	biciFechaCompra: "",
	biciValorComercial: "",
    codigoTouched: false,
    modeloTouched: false,
	marcaTouched: false,
	colorTouched: false,
	serialTouched: false,
	fechaTouched: false,
	valorTouched: false
  };
  
  handleCodigoChanged = (biciCodigo: string) => { this.setState({ biciCodigo: biciCodigo }); };
  handleModeloChanged = (biciModelo: string) => { this.setState({ biciModelo: biciModelo }); };
  handleMarcaChanged = (biciMarca: string) => { this.setState({ biciMarca: biciMarca }); };
  handleColorChanged = (biciColor: string) => { this.setState({ biciColor: biciColor }); };
  handleSerialChanged = (biciSerial: string) => { this.setState({ biciSerial: biciSerial }); };
  handleFechaChanged = (biciFechaCompra: string) => { this.setState({ biciFechaCompra: biciFechaCompra }); };
  handleValorChanged = (biciValorComercial: string) => { this.setState({ biciValorComercial: biciValorComercial }); };
  ///
  handleCodigoBlur = () => { this.setState({ codigoTouched: true }); };
  handleModeloBlur = () => { this.setState({ modeloTouched: true }); };
  handleMarcaBlur = () => { this.setState({ marcaTouched: true }); };
  handleColorBlur = () => { this.setState({ colorTouched: true }); };
  handleSerialBlur = () => { this.setState({ serialTouched: true }); };
  handleFechaBlur = () => { this.setState({ fechaTouched: true }); };
  handleValorBlur = () => { this.setState({ valorTouched: true }); };

  handleRegistrarBicicleta = () => {
    fetch('https://mywebsite.com/endpoint/', {
	  method: 'POST',
	  headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		"idUsuario":"1",
		"codigo": this.state.biciCodigo,
		"modelo": this.state.biciModelo,
		"marca": this.state.biciMarca,
		"color": this.state.biciColor,
		"serial": this.state.biciSerial,
		"fechaCompra": this.state.biciFechaCompra,
		//"valorComercial": this.state.biciValorComercial,
		"tipoAplicacion":"2" 
	  }),
	});
  }; 

  render() {
    const {
      biciCodigo,
	  biciModelo,
	  biciMarca,
	  biciColor,
	  biciSerial,
	  biciFechaCompra,
	  biciValorComercial,
	  codigoTouched,
	  modeloTouched,
	  marcaTouched,
	  colorTouched,
	  serialTouched,
	  fechaTouched,
	  valorTouched
    } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once
  const biciCodigoError = !biciCodigo && codigoTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciModeloError = !biciModelo && modeloTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciMarcaError = !biciMarca && marcaTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciColorError = !biciColor && colorTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciSerialError = !biciSerial && serialTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciFechaError = !biciFechaCompra && fechaTouched ? strings.CAMPO_REQUERIDO : undefined;
	const biciValorError = !biciValorComercial && valorTouched ? strings.CAMPO_REQUERIDO : undefined;
	
	return (
      <KeyboardAvoidingView
        style={styles.container}   
        behavior={constants.IS_IOS ? "padding" : undefined}     
      >        
        <View style={styles.form}>
          <FormTextInput
			onChangeText={this.handleCodigoChanged}
            value={this.state.biciCodigo}                        
            placeholder={strings.BICI_CODIGO}
            autoCorrect={false}            
            returnKeyType="next"   
			onBlur={this.handleCodigoBlur}
            error={biciCodigoError}
          />
          <FormTextInput
			onChangeText={this.handleModeloChanged}
            value={this.state.biciModelo}                        
            placeholder={strings.BICI_MODELO}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleModeloBlur}
            error={biciModeloError}
          />
          <FormTextInput
			onChangeText={this.handleMarcaChanged}
            value={this.state.biciMarca}                        
            placeholder={strings.BICI_MARCA}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleMarcaBlur}
            error={biciMarcaError}
          />
          <FormTextInput
			onChangeText={this.handleColorChanged}
            value={this.state.biciColor}                        
            placeholder={strings.BICI_COLOR}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleColorBlur}
            error={biciColorError}
          />
          <FormTextInput
			onChangeText={this.handleSerialChanged}
            value={this.state.biciSerial}                        
            placeholder={strings.BICI_SERIAL}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleSerialBlur}
            error={biciSerialError}
          />
          <FormTextInput
			onChangeText={this.handleFechaChanged}
            value={this.state.biciFechaCompra}                        
            placeholder={strings.BICI_FECHA_COMPRA}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleFechaBlur}
            error={biciFechaError}
          />
          <FormTextInput
			onChangeText={this.handleValorChanged}
            value={this.state.biciValorComercial}                        
            placeholder={strings.BICI_VALOR}
            autoCorrect={false}            
            returnKeyType="next"
			onBlur={this.handleValorBlur}
            error={biciValorError}
          />
		  
		  
          <Button
			      disabled={!biciCodigoError && !biciModeloError && !biciMarcaError && !biciColorError && !biciSerialError && !biciFechaError && !biciValorError}
            label={strings.REGISTRAR_BICICLETA}            
            onPress={this.handleRegistrarBicicleta}       
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
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default BikesScreen;