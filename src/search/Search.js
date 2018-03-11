

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
import styles from './SearchStyles'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const ChevronIcon = <MaterialIcon name='checvron-right' size={20} color='forestgreen' />

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }

        this.searchQuery = this.searchQuery.bind(this)
        this.searchTextChanged = this.searchTextChanged.bind(this)
        this.renderQueryResultItem = this.renderQueryResultItem.bind(this)
    }

    searchTextChanged(query) {
        this.setState({ query })
    }

    searchQuery() {
        this.props.searchQuery(this.state.query)
    }

    renderQueryResultItem({ item, index }) {
        return (
            <TouchableWithoutFeedback
                onPress={()=> this.props.searchCompanyByUrl(item.url)}
            >
                <View key={index}
                    style={styles.queryResultItemContainer}>
                    <Text style={styles.queryResultItemText}>{item.name}</Text>
                    <MaterialIcon style={styles.chevron} 
                        name='chevron-right' 
                        size={20} 
                        color='forestgreen' />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View>
                <View style={styles.searchTextContainer}>
                    <TextInput
                        placeholder={'Search Company'}
                        onChangeText={this.searchTextChanged}
                        value={this.state.query}
                        style={styles.searchTextInput}
                    />
                    <Button
                        style={styles.searchButton}
                        title={'Search'}
                        onPress={this.searchQuery}
                    />
                </View>
                <FlatList
                    data={this.props.queryResult}
                    renderItem={this.renderQueryResultItem}
                    keyExtractor={(item, index) => '' + item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        )
    }
}

