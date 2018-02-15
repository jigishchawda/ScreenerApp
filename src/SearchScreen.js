

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Search from './search/Search'
import SearchActions from './search/SearchActions'
import {connect} from 'react-redux'

class SearchScreen extends Component {
    render() {
        return (
            <Search 
                searchQuery={this.props.searchQuery}
                queryResult={this.props.queryResult}
            />
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        queryResult: state.search.queryResult,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchQuery: (query) => dispatch(SearchActions.searchQuery(query)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchScreen)
