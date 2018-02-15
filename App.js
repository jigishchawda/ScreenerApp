

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import SearchScreen from './src/SearchScreen'
import CompanyScreen from './src/CompanyScreen'

const AppNavigation = StackNavigator({
	Search: {screen: SearchScreen},
	Company: {screen: CompanyScreen}
})

export default class App extends Component {
  render() {
    return (
		<AppNavigation/>
    )
  }
}

