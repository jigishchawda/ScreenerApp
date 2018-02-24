import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native'
import styles from './FinancialsStyles'

const selectors = {
    CASH_FLOW: 'Cash Flow',
    BALANCE_SHEET: 'Balance Sheet',
    ANNUAL_RESULTS: 'Annual Results',
    QUARTERLY_RESULTS: 'Quarterly Results'
}
export default class Financials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSelector: selectors.QUARTERLY_RESULTS
        }
   
        this.onSelectorSelected = this.onSelectorSelected.bind(this)
        this.renderSelectors = this.renderSelectors.bind(this)
   
        this.renderLoadingInfo = this.renderLoadingInfo.bind(this)
        
        this.renderFinancialsFor = this.renderFinancialsFor.bind(this)
        this.calculateDateRowsForFinancialData = this.calculateDateRowsForFinancialData.bind(this)
        this.renderDateRows = this.renderDateRows.bind(this)
        this.renderFinancialData = this.renderFinancialData.bind(this)
        this.renderColumnData = this.renderColumnData.bind(this)
    }

    onSelectorSelected(selector) {
        this.setState({ currentSelector: selector })
    }


    calculateDateRowsForFinancialData(financialData) {
        //collect all dates
        let dates = Object.keys(financialData[0][1])
        // transform it to {date, year, displayText}
        let transformedDates = dates.map(date => {
            return {
                date: date,
                year: parseInt(date.split('-')[0]),
                displayText: 'Mar ' + date.split('-')[0]
            }
        })
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

    renderDateRows(dateRows) {
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

    renderColumnData(columnData, dates) {
        return dates.map(date => {
            return (
                <View key={date} style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                    <Text>
                        {columnData[1][date]}
                    </Text></View>
            )
        })
    }

    renderFinancialData(financialData, dates) {

        return financialData.map(column => {
            return (
                <View style={{ borderRightWidth: 1, borderRightColor: '#ddd' }}
                    key={column[0]}>
                    <View style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                        <Text>{column[0]}</Text>
                    </View>
                    {this.renderColumnData(column, dates)}
                </View>
            )
        })
    }

    renderSelectors() {
        return (
            <View style={styles.selectorContainer}>
                <View style={[styles.selectorItem, (this.state.currentSelector === selectors.QUARTERLY_RESULTS) ? styles.selectedSelector : {}]}>
                    <Text
                        onPress={() => this.onSelectorSelected(selectors.QUARTERLY_RESULTS)}
                        style={styles.selectorText}>
                        Quarterly Results
                        </Text>
                </View>
                <View style={[styles.selectorItem, (this.state.currentSelector === selectors.ANNUAL_RESULTS) ? styles.selectedSelector : {}]}>
                    <Text
                        onPress={() => this.onSelectorSelected(selectors.ANNUAL_RESULTS)}
                        style={styles.selectorText}>
                        Annual Results
                        </Text>
                </View>

                <View style={[styles.selectorItem, (this.state.currentSelector === selectors.BALANCE_SHEET) ? styles.selectedSelector : {}]}>
                    <Text
                        onPress={() => this.onSelectorSelected(selectors.BALANCE_SHEET)}
                        style={styles.selectorText}>
                        Balance Sheet
                        </Text>
                </View>

                <View style={[styles.selectorItem, (this.state.currentSelector === selectors.CASH_FLOW) ? styles.selectedSelector : {}]}>
                    <Text
                        onPress={() => this.onSelectorSelected(selectors.CASH_FLOW)}
                        style={styles.selectorText}>
                        Cash Flow
                        </Text>
                </View>
            </View>
        )
    }

    renderFinancialsFor(financialData) {
        let dateRows = this.calculateDateRowsForFinancialData(financialData)
        let dates = dateRows.map(dateRow => Object.keys(dateRow)[0])

        return (
            <View>
                <Text style={styles.selectorHeading}>{this.state.currentSelector} (Figures in Rs. Crores)</Text>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 8 }}>
                    <View style={{ borderRightWidth: 4, borderRightColor: '#ddd' }}>
                        <View style={{ alignItems: 'center', padding: 2, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                            <Text>Dates</Text>
                        </View>
                        {this.renderDateRows(dateRows)}
                    </View>
                    <ScrollView horizontal>
                        {this.renderFinancialData(financialData, dates)}
                    </ScrollView>
                </View>
            </View>
        )
    }


    renderLoadingInfo() {
        return (
            <Text style={{ fontSize: 24, alignItems: 'center', justifyContent: 'center' }}>
                Loading Info
            </Text>
        )
    }
    
    
    render() {
        let info = this.props.screenProps.companyResult

        if (!info.number_set) {
            return this.renderLoadingInfo()
        }
        return (
            <View>
                {this.renderSelectors()}

                {this.state.currentSelector === selectors.CASH_FLOW &&
                    this.renderFinancialsFor(info.number_set.cashflow)}
                {this.state.currentSelector === selectors.BALANCE_SHEET &&
                    this.renderFinancialsFor(info.number_set.balancesheet)}
                {this.state.currentSelector === selectors.ANNUAL_RESULTS &&
                    this.renderFinancialsFor(info.number_set.annual)}
                {this.state.currentSelector === selectors.QUARTERLY_RESULTS &&
                    this.renderFinancialsFor(info.number_set.quarters)}

            </View>
        )
    }
}