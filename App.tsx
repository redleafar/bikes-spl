import React from 'react';
import {NativeModules} from 'react-native';
import Navigator from "./src/screens/Navigator";
import { NavigationScreenProp } from 'react-navigation';

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
