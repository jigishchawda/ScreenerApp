

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
// import styles from './CompanyStyles'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import GeneralInfo from './GeneralInfo'
import ProCon from './ProCon'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InfoIcon = <MaterialIcon name='info' size={25} color='orange' />
const UpDownIcon = <MaterialIcon name='thumbs-up-down' size={25} color='orange' />


export default TabNavigator(
  {
    General: { screen: GeneralInfo },
    ProCon: { screen: ProCon },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'General') {
          return InfoIcon
        } else if (routeName === 'ProCon') {
          return UpDownIcon
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  })
