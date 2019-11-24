/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image} from 'react-native' ; 
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import strings from '../config/strings';

import {  
  StyleSheet,  
  View,
} from 'react-native';

interface Props {

}

interface State {

}

var marker =
  {
    latitude: 4.689375,
    longitude: -74.169654,
    title: 'Foo Place1',
    subtitle: '1234 Foo Drive',
    image: require('../assets/images/blue_marker.png')
  };

  var marker2 =
  {
    latitude: 4.686385,
    longitude: -74.169614,
    title: 'Foo Place2',
    subtitle: '1234 Foo Drive',
    image: require('../assets/images/green_marker.png')
  };

  var marker3 =
  {
    latitude: 4.681375,
    longitude: -74.165694,
    title: 'Foo Place3',
    subtitle: '1234 Foo Drive',
    image: require('../assets/images/red_marker.png')
  };

  var marker4 =
  {
    latitude: 4.671337,
    longitude: -74.165634,
    title: 'Foo Place3',
    subtitle: '1234 Foo Drive',
    image: require('../assets/images/red_marker.png')
  };

  var markers = [marker, marker2, marker3];

class MapScreen extends React.Component<{}, Props, State> {  
  static navigationOptions = () => ({
    title: strings.CONSULT_ROUTE,
  });

  render() {
    return(
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 4.684335,
        longitude: -74.165654,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    <Polyline
      coordinates={[
        { latitude: marker.latitude, longitude: marker.longitude },
        { latitude: marker2.latitude, longitude: marker2.longitude },
        { latitude: marker3.latitude, longitude: marker3.longitude },        
        { latitude: marker4.latitude, longitude: marker4.longitude }
      ]}
      strokeColor="#dd9922" // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        '#7F0000',
        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
        '#B24112',    
        '#B24112'        
      ]}
      strokeWidth={6}
	    />
      <Marker coordinate={{
            latitude: marker.latitude,
            longitude: -74.165654}}>

      </Marker>
    </MapView>
  </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 }); 
 
export default MapScreen