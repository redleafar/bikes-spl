import App from "../../App";
import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

import { createAppContainer, NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MapScreen from "./MapScreen";
import BikesScreen from "./BikesScreen";
import TheftScreen from "./TheftScreen";
import RentBikeScreen from "./RentBikeScreen";
import RouteListScreen from "./RouteListScreen";
import CouponScreen from "./CouponScreen";
import strings from "../config/strings";

interface Props {
  navigation: NavigationScreenProp<NavigationState,NavigationParams>;
}

interface State {}

export default class NavigatorContainer extends React.Component<Props, State> {  
  render() {
        
  const DrawerStack = 
  App.flavor == "bicibogo" ? 
  createDrawerNavigator({     
    Map: MapScreen,      
    Bikes: BikesScreen,  
    Theft: TheftScreen,
    RouteList: RouteListScreen,
	  Coupon: CouponScreen   
  })
  :
  App.flavor  == "goinbike" ?
  createDrawerNavigator({         
    Map: MapScreen, 
    Bikes: BikesScreen,        
    Rent: RentBikeScreen,
    RouteList: RouteListScreen     
  })
  :
  createDrawerNavigator({   
    Map: MapScreen,
    RouteList: RouteListScreen     
  });    
  
  DrawerStack.navigationOptions = ({navigation} : { navigation : NavigationScreenProp<NavigationState,NavigationParams>}) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    
    const headerTitle = 
    routeName == "Map" ? strings.CONSULT_ROUTE : 
    routeName == "Bikes" ? strings.BIKES_TITLE : 
    routeName == "Theft" ? strings.THEFT_REPORT_TITLE :
    routeName == "Register" ? strings.REGISTER_SCREEN_TITLE :
    routeName == "RouteList" ? strings.ROUTE_LIST_TITLE :
    routeName == "Coupon" ? strings.COUPON_TITLE : "";
  
    return {
      headerTitle,
      headerLeft: ({ tintColor }: {tintColor: any}) => (
        <TouchableHighlight onPress={() => navigation.toggleDrawer()}><Image
          source={require('../assets/images/drawer.png')}
          style={[styles.icon, { tintColor: tintColor }]}        
        /></TouchableHighlight>)
    };
  };

  const AppNavigator = createStackNavigator(
    {        
      Login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null 
        }      
      },   
      Register: {
        screen: RegisterScreen    
      },      
      DrawerStack: DrawerStack
    },
    {
      initialRouteName: 'Login',
    }
  );
  
  const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;   
  }
}

//MapScreen.router = AppContainer.router;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
