import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Picker,
  View,
  FlatList,
  Text,
  TouchableOpacity 
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import FormTextArea from "../components/FormTextArea";
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";
import constants from "../config/constants";
import App from "../../App";

interface Props {

}
	
interface State {
  listaBeneficios: Object;
}

class RouteListScreen extends React.Component<{}, Props, State> {  
  static navigationOptions = {
    title: strings.COUPON_TITLE,
  };

  state: State = {
	listaBeneficios: []
  };
  
  handleCouponPress = (beneId : int) => {
    console.log("Cupón presionado: " + beneId)
  };
  
  componentDidMount() {
    fetch('http://www.mocky.io/v2/5dd75255320000f948888f3c').then(response => 
		response.json().then(data => ({
			data: data,
			status: response.status
		})
	).then(res => {
		this.setState( {listaBeneficios: res.data} );
		console.log("PRUEBA: " + res.data);
	}));
  }

  render() {
	//console.log("Usuario ID: " + this.props.navigation.state.params.usuarioId);

	return (
    <KeyboardAvoidingView   
	  style={styles.container}
      behavior={constants.IS_IOS ? "padding" : undefined}     
    >
	  
		<View>
			<FlatList
			  data={this.state.listaBeneficios}
			  renderItem={({item}) => (<TouchableOpacity  style={styles.container} onPress={() => this.handleCouponPress(item.beneId)}>
					<Text style={styles.item}>Descuento: {item.beneDescripcion} </Text>
					<Text style={styles.item}>Costo: {item.beneCosto} puntos </Text>
				</TouchableOpacity >) }
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
	padding: 10,
	borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.DODGER_BLUE
  },
  item: {
    padding: 5,
    fontSize: 18,
  },
});

export default RouteListScreen;