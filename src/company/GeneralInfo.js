import React, { Component } from 'react'
import {
    Text,
    View,
    Linking,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ThumbUp = <Icon name='thumb-up' size={18} color={'#bce8f1'} />
const ThumbDown = <Icon name='thumb-down' size={18} color={'#fcebcc'} />
export default class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.renderProConItems = this.renderProConItems.bind(this)
    }
    renderProConItems(items) {
        return items.map(item => {
            return (
                <Text key={item}
                    style={{ paddingTop: 8 }}
                >
                    {item}
                </Text>
            )
        })
    }

    render() {
        let info = this.props.screenProps.companyResult
        if (Object.keys(info).length === 0 && info.constructor === Object) {
            return (
                <Text style={{ fontSize: 24, alignItems: 'center', justifyContent: 'center' }}>
                    Loading Info
                </Text>)
        }
        return (
            <ScrollView style={{ padding: 16 }}
                contentContainerStyle={{ paddingBottom: 32 }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', backgroundColor: '#449d44', borderRadius: 5, padding: 8, maxWidth: 150 }}>
                        <Text style={{ color: 'white', fontSize: 14 }}>
                            {info.warehouse_set.industry || '-'}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', backgroundColor: '#31b0d5', borderRadius: 5, padding: 8 }}>
                        <Text style={{ color: 'white' }}
                            onPress={() => Linking.openURL('https://www.google.com/search?q=' + info.name.replace(/\s/g, '+') + '&btnI=').catch(err => console.error('An error occurred', err))}>
                            Company Website
                        </Text>
                    </View>
                </View>

                <Text style={{ fontSize: 24, marginBottom: 16 }}>{info.name}</Text>

                <View style={{ marginHorizontal: 32, borderTopWidth: 2, borderColor: '#777' }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 24 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>₹ {info.warehouse_set.current_price || '-'}</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>Current Price</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>₹ {info.warehouse_set.market_capitalization || '-'} Cr.</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>Market Capitalization</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 24 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>{info.warehouse_set.price_to_earning || '-'}</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>P/E</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>{info.warehouse_set.dividend_yield || '-'} %</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>Dividend Yield</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 24 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>₹ {info.warehouse_set.book_value || '-'}</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>Book Value</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>₹ {info.warehouse_set.face_value || '-'}</Text>
                        <Text style={{ fontSize: 12, color: '#777' }}>Face Value</Text>
                    </View>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 24 }}>
                    <Text style={{ fontSize: 18 }}>₹ {info.warehouse_set.high_price || '-'} / ₹ {info.warehouse_set.low_price || '-'}</Text>
                    <Text style={{ fontSize: 12, color: '#777' }}>52 week high/low</Text>
                </View>


                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <View style={{ flex: 1, borderColor: '#bce8f1', borderWidth: 1, backgroundColor: '#f4f8fa', padding: 8 }}>
                        {ThumbUp}
                        {this.renderProConItems(info.warehouse_set.analysis.good)}
                    </View>
                    <View style={{ flex: 1, borderColor: '#faebcc', borderWidth: 1, backgroundColor: '#faf8f0', padding: 8 }}>
                        {ThumbDown}
                        {this.renderProConItems(info.warehouse_set.analysis.bad)}
                    </View>
                </View>
            </ScrollView>
        )
    }
}