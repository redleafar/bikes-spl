/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoginScreen from '../src/screens/LoginScreen';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
    navigation: {
      state: { params: {} },
      dispatch: jest.fn(),
      goBack: jest.fn(),
      dismiss: jest.fn(),
      navigate: jest.fn(),
      openDrawer: jest.fn(),
      closeDrawer: jest.fn(),
      toggleDrawer: jest.fn(),
      getParam: jest.fn(),
      setParams: jest.fn(),
      addListener: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
      isFocused: jest.fn(),
      emit: jest.fn(),
      isFirstRouteInParent: jest.fn(),
      dangerouslyGetParent: jest.fn()
    },
    ...props
  });
  let props = createTestProps({});
it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
