import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View
} from "react-native";
import colors from "../config/colors";

type Props = TextInputProps & {
  error?: string;
};

class FormTextArea extends React.Component<Props> {
  textInputRef = React.createRef<TextInput>();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  render() {
    const { error, style, ...otherProps } = this.props;
    return (
      // Since we added a wrapper View, I would suggest
      // making it the receiver of the `style` prop.
      // As a rule of thumb we will always pass the `style`
      // prop to the outmost wrapper of the component.
      <View style={[styles.container, style]}>
        <TextInput
          ref={this.textInputRef}
          selectionColor={colors.DODGER_BLUE}
          style={styles.textInput}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    marginBottom: 10,
	borderColor: colors.SILVER
  },
  textInput: {
    height: 200,
	textAlignVertical: 'top'
  },
  errorText: {
    // Setting a fixed text height prevents the label
    // "jump" when we show/hide it
    height: 20,
    color: colors.TORCH_RED
  }
});

export default FormTextArea;