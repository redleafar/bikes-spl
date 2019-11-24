import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import colors from "../config/colors";
import App from "../../App";

interface Props {
  disabled?: boolean; // Add a "disabled" prop
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  

  render() {
    console.log("el flavor es en boton:"+App.flavor);
    const { disabled, label, onPress } = this.props;
    // If the button is disabled we lower its opacity
    const containerStyle = [
      styles.container,
      disabled
        ? styles.containerDisabled
        : styles.containerEnabled,
      App.flavor  == "bicibogo" 
        ? styles.colorBiciBogo
        :
      App.flavor  == "goinbike"
        ? styles.colorGoInBike   
        :
      styles.colorSocialBike 
    ];
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",    
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  containerEnabled: {
    opacity: 1
  },
  containerDisabled: {
    opacity: 0.8
  },
  colorBiciBogo: {
    backgroundColor: colors.DODGER_BLUE
  },
  colorGoInBike: {
    backgroundColor: colors.TORCH_RED
  },
  colorSocialBike: {
    backgroundColor: colors.YELLOW
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20
  }
});

export default Button;
