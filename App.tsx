import React from 'react';
import {NativeModules} from 'react-native';
import Navigator from "./src/screens/Navigator";
import { NavigationScreenProp } from 'react-navigation';
import codePush from "react-native-code-push";
import { AppRegistry } from "react-native";
import AppContainer from "./App";

interface Props { }

interface State {
 isInitialised: boolean
}

export default class App extends React.Component<Props, State> {
    static flavor: string;  
    static navigation: NavigationScreenProp<any,any>;  
  
    constructor(props: Props) {
      super(props); 
      this.state = { isInitialised: false }
    } 
  
    componentDidMount() {
      getFlavor()
      .then(() => {
        this.setState({ isInitialised: true })      
      });
    }
  
    render() {
      if (this.state.isInitialised) {          
        return <Navigator navigation={ App.navigation }/>;   
      } else {
        return null
      }    
    }
  }
  
async function getFlavor() {
  var {flavor} = await NativeModules.Flavor.getFlavor()
  App.flavor = flavor;
}

  // Below is an example of how CodePush behaviour can be made different in production: in this case, update will be installed to prod devices only after user has stopped using it for 2 minutes.

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: 120
};

const CodePushedApp = codePush(codePushOptions)(AppContainer);
AppRegistry.registerComponent("bikesspl", () => CodePushedApp);
// Third Commit