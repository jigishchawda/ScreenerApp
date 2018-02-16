import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'

export default class GeneralInfo extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.screenProps.companyResult.name}</Text>
            </View>
        )
    }
}