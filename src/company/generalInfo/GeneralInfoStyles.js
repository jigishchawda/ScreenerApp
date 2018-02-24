import {StyleSheet, Platform} from 'react-native'

export default {
    scrollContainer: {
        padding: 16
    },
    scrollContentContainer: {
        paddingBottom: 32
    },
    metaInfoContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 8, 
        alignItems: 'center' 
    },
    industryTagContainer: { 
        justifyContent: 'center', 
        backgroundColor: '#449d44', 
        borderRadius: 5, 
        padding: 8, 
        maxWidth: 150 
    },
    industryText: { 
        color: 'white', 
        fontSize: 14 
    },
    websiteTagContainer: { 
        justifyContent: 'center', 
        backgroundColor: '#31b0d5', 
        borderRadius: 5, 
        padding: 8 
    },
    websiteText: {
        color: 'white'
    },
    companyName: {
        fontSize: 24,
        marginBottom: 16,
        alignSelf: 'center'
    },
    separator: {
        marginHorizontal: 32,
        borderTopWidth: 2, 
        borderColor: '#777'
    },
    infoRowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingTop: 24
    },
    infoItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoItemValue: {
        fontSize: 18
    },
    infoItemKey: {
        fontSize: 12,
        color: '#777'
    },
    loadingInfo: {
        fontSize: 24, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}