/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

jest.mock('react-native', () => {
  return { 
    StyleSheet: {
      create: () => {
        
      }
    },
    Platform: {}
  }
});

it('renders correctly', () => {
  renderer.create(<App />);
});
