import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Root from './src/Root.js'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from "./src/components/LibraryList"

export default class App extends Component {

  render() {
    const store = createStore(reducer);
    //console.log({store})
    return (
      <Provider store={store}>
        {/* <Root /> */}
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
