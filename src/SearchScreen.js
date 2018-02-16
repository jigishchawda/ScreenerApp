

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
    static navigationOptions = {
        title: 'Indian stocks screener'
    }
    constructor(props) {
        super(props)

        this.searchCompanyByUrl = this.searchCompanyByUrl.bind(this)
    }

    searchCompanyByUrl(url) {
        console.log(this.props)
        this.props.navigation.navigate('Company')
        this.props.searchCompanyByUrl(url)
    }
    render() {
        return (
            <Search
                searchCompanyByUrl={this.searchCompanyByUrl} 
                searchQuery={this.props.searchQuery}
                queryResult={this.props.queryResult}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        queryResult: state.search.queryResult,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchCompanyByUrl: (url) => dispatch(SearchActions.searchCompanyByUrl(url)),
        searchQuery: (query) => dispatch(SearchActions.searchQuery(query)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchScreen)
