import React, { Component } from 'react'
import {
    Text,
    View,
    Linking,
    ScrollView
} from 'react-native'
import styles from './GeneralInfoStyles'
import ProCon from '../procon/ProCon'

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.renderInfoItem = this.renderInfoItem.bind(this)
        this.renderLoadingInfo = this.renderLoadingInfo.bind(this)
    }

    renderInfoItem(key, value) {
        return (
            <View style={styles.infoItemContainer}>
                <Text style={styles.infoItemValue}>{value}</Text>
                <Text style={styles.infoItemKey}>{key}</Text>
            </View>
        )
    }

    renderLoadingInfo() {
        return (
            <Text style={styles.loadingInfo}>
                Loading Info
            </Text>
        )
    }

    render() {
        let info = this.props.screenProps.companyResult

        if (Object.keys(info).length === 0 && info.constructor === Object) {
            return this.renderLoadingInfo()
        }

        return (
            <ScrollView style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <View style={styles.metaInfoContainer}>
                    <View style={styles.industryTagContainer}>
                        <Text style={styles.industryText}>
                            {info.warehouse_set.industry || '-'}
                        </Text>
                    </View>
                    <View style={styles.websiteTagContainer}>
                        <Text style={styles.websiteText}
                            onPress={() => Linking.openURL('https://www.google.com/search?q=' + info.name.replace(/\s/g, '+') + '&btnI=').catch(err => console.error('An error occurred', err))}>
                            Company Website
                        </Text>
                    </View>
                </View>

                <Text style={styles.companyName}>{info.name}</Text>

                <View style={styles.separator} />

                <View style={styles.infoRowContainer}>
                    {this.renderInfoItem('Current Price', '₹ ' + (info.warehouse_set.current_price || '-'))}
                    {this.renderInfoItem('Market Capitalization', '₹ ' + (info.warehouse_set.market_capitalization || '-') + ' Cr.')}
                </View>

                <View style={styles.infoRowContainer}>
                    {this.renderInfoItem('P/E', (info.warehouse_set.price_to_earning || '-'))}
                    {this.renderInfoItem('Dividend Yield', (info.warehouse_set.dividend_yield || '-'))}
                </View>

                <View style={styles.infoRowContainer}>
                    {this.renderInfoItem('Book Value', '₹ ' + (info.warehouse_set.book_value || '-'))}
                    {this.renderInfoItem('Face Value', '₹ ' + (info.warehouse_set.face_value || '-'))}
                </View>


                <View style={styles.infoRowContainer}>
                    {this.renderInfoItem('52 week high/low', '₹ ' + (info.warehouse_set.high_price || '-') + ' / ₹ ' + (info.warehouse_set.low_price || '-'))}
                </View>


                <ProCon good={info.warehouse_set.analysis.good} bad={info.warehouse_set.analysis.bad} />
            </ScrollView>
        )
    }
}