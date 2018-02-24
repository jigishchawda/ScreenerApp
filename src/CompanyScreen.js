

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import GeneralInfo from './company/generalInfo/GeneralInfo'
import Financials from './company/financials/Financials'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InfoIcon = <MaterialIcon name='info' size={25} color='orange' />
const UpDownIcon = <MaterialIcon name='thumbs-up-down' size={25} color='orange' />


const CompanyNavigator = TabNavigator(
    {
        General: { screen: GeneralInfo },
        Financials: { screen: Financials },
    },
    {
        navigationOptions: ({ navigation }) => {
            return {
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'General') {
                        return InfoIcon
                    } else if (routeName === 'Financials') {
                        return UpDownIcon
                    }
                },
            }
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    })

class CompanyScreen extends Component {
    static navigationOptions = {
        title: 'Company details'
    }

    render() {
        return (
            <CompanyNavigator screenProps={{ ...this.props }} />
        )
    }
}

function mapStateToProps(state) {
    return {
        companyResult: state.search.companyResult,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyScreen)
