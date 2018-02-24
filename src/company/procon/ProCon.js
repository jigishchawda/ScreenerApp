import React, { Component } from 'react';
import {View, Text} from 'react-native'
import styles, {proColor, conColor} from './ProConStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ThumbUp = <Icon name='thumb-up' size={18} color={proColor} />
const ThumbDown = <Icon name='thumb-down' size={18} color={conColor} />

export default class ProCon extends Component {
    constructor(props) {
        super(props)
        this.renderProConItems = this.renderProConItems.bind(this)
    }

    renderProConItems(items) {
        return items.map(item => {
            return (
                <Text key={item}
                    style={styles.proconItem}
                >
                    {item}
                </Text>
            )
        })
    }
    render() {
        return (
            <View style={styles.proconContainer}>
                <View style={styles.proColumn }>
                    {ThumbUp}
                    {this.renderProConItems(this.props.good)}
                </View>
                <View style={styles.conColumn}>
                    {ThumbDown}
                    {this.renderProConItems(this.props.bad)}
                </View>
            </View>
        )
    }
};
