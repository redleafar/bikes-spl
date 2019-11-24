import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Picker,
  View,
  FlatList,
  Text,
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
  usuarioId : string,
  listaRutas: Object;
}

class RouteListScreen extends React.Component<{}, Props, State> {  
  static navigationOptions = {
    title: strings.ROUTE_LIST_TITLE,
  };

  state: State = {
    usuarioId: "",
	listaRutas: []
  };
  
  handleLike = () => {
    console.log("LIKE: ");
  };
  handleVerEnMapa = (rutaId : string) => {
    this.props.navigation.navigate('Map', { rutaId: rutaId });
  };
  
  componentDidMount() {
	const usuarioId = this.props.navigation.state.params.usuarioId;
    fetch('https://bikes-spl-socialbike.herokuapp.com/ruta/' + usuarioId).then(response => 
		response.json().then(data => ({
			data: data,
			status: response.status
		})
	).then(res => {
		this.setState( {listaRutas: res.data} );
	}));
  }

  render() {
	console.log("Usuario ID: " + this.props.navigation.state.params.usuarioId);

	return (
    <KeyboardAvoidingView   
	  style={styles.container}
      behavior={constants.IS_IOS ? "padding" : undefined}     
    >
	  
		<View>
			<FlatList
			  data={this.state.listaRutas}
			  renderItem={({item}) => (<View>
					<Text style={styles.item}>ID Ruta: {item.rutaId}</Text>
					<Text style={styles.item}>Origen: {item.rutaLatitudOrigen}, {item.rutaLongitudOrigen}</Text>
					<Text style={styles.item}>Destino: {item.rutaLatitudDestino}, {item.rutaLongitudDestino}</Text>
					<Text style={styles.item}>Descripción: {item.descripcion}</Text>
					<Text style={styles.item}>Likes: {item.rutaPuntaje}</Text>
					<View style={{
						flexDirection: 'row',
						width: "50%",
						justifyContent: 'space-between',
					  }}>
					
					{ App.flavor  == "socialbike" &&
						<Button
						label={strings.ME_GUSTA}            
						onPress={this.handleLike}       
						/>
					}
						<Button
						label={strings.VER_EN_MAPA}            
						onPress={() => this.handleVerEnMapa(item.rutaId)}       
						/>
					
					</View>
				</View>) }
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
  },
  item: {
    padding: 5,
    fontSize: 18,
  },
});

export default RouteListScreen;