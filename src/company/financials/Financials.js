import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native'

export default class Financials extends Component {
    constructor(props) {
        super(props)

        this.calculateDateRowsForCashflow = this.calculateDateRowsForCashflow.bind(this)
        this.renderCashflowDateRows = this.renderCashflowDateRows.bind(this)
        this.renderCashflowData = this.renderCashflowData.bind(this)
    }

    calculateDateRowsForCashflow(cashFlow) {
        //collect all dates
        let dates = Object.keys(cashFlow[0][1])
        // transform it to {date, year, displayText}
        let transformedDates = dates.map(date => {
            return {
                date: date,
                year: parseInt(date.split('-')[0]),
                displayText: 'Mar ' + date.split('-')[0]
            }
        })

        //sortByYear desc
        transformedDates.sort((d1, d2) => d2.year - d1.year)

        // transform to {date: {date, displayText}}
        let sortedDates = transformedDates.map(dateItem => {
            let obj = {}
            obj[dateItem.date] = {
                date: dateItem.date,
                displayText: dateItem.displayText
            }
            return obj
        })

        return sortedDates
    }

    renderCashflowDateRows(dateRows) {
        let views = dateRows.map(rowItem => {
            return (
                <View key={Object.keys(rowItem)[0]}
                    style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}
                >
                    <Text >
                        {rowItem[Object.keys(rowItem)[0]].displayText}
                    </Text>
                </View>
            )

        })
        return views
    }

    renderCashflowColumnData(cashflowColumn, dates) {
        return dates.map(date => {
            return (
                <View key={date} style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                    <Text>
                        {cashflowColumn[1][date]}
                    </Text></View>
            )
        })
    }

    renderCashflowData(cashflow, dates) {

        return cashflow.map(cashflowColumn => {
            return (
                <View style={{ borderRightWidth: 1, borderRightColor: '#ddd' }}
                    key={cashflowColumn[0]}>
                    <View style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                        <Text>{cashflowColumn[0]}</Text>
                    </View>
                    {this.renderCashflowColumnData(cashflowColumn, dates)}
                </View>
            )
        })
    }

    render() {
        let info = this.props.screenProps.companyResult

        if (!info.number_set) {
            return (
                <Text style={{ fontSize: 24, alignItems: 'center', justifyContent: 'center' }}>
                    Loading Info
            </Text>)
        }

        let dateRows = this.calculateDateRowsForCashflow(info.number_set.cashflow)
        let dates = dateRows.map(dateRow => {
            return Object.keys(dateRow)[0]
        })

        return (
            <View>
                <Text>Cash Flow</Text>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 8 }}>
                    <View style={{ borderRightWidth: 1, borderRightColor: '#ddd' }}>
                        <View style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                            <Text>Dates</Text>
                        </View>
                        {this.renderCashflowDateRows(dateRows)}
                    </View>
                    <ScrollView horizontal>
                        {this.renderCashflowData(info.number_set.cashflow, dates)}
                    </ScrollView>
                </View>
            </View>
        )
    }
}