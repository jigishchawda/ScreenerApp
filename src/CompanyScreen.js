

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Company from './company/Company'
import {connect} from 'react-redux'


class CompanyScreen extends Component {
    static navigationOptions = {
        title: 'Company details'
    }
    render() {
        return (
            <Company 
                companyResult={this.props.companyResult}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        companyResult: state.search.companyResult,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyScreen)
