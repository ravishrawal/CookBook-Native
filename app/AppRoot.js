//react setup
import React from 'react';

import App from './components/App.js';

//redux setup
import { Provider } from 'react-redux';
import store from './redux';

//native components
import { StyleSheet, Text, View } from 'react-native';

export default class AppRoot extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
