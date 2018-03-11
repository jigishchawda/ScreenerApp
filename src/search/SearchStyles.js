import {StyleSheet, Platform} from 'react-native'

export default styles = {
    searchTextContainer: {
        flexDirection: 'row',
        padding: 8
    },
    searchTextInput: {
        flex: 85,
        borderWidth: Platform.OS === 'ios' ? 1 : 0,
        borderColor: '#00000050',
        padding: 8
    },
    searchButton: {
        flex: 15
    },
    queryResultItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    queryResultItemText: {
        color: 'forestgreen',
        fontSize: 20
    },
    separator: {
        height: 1,
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        marginHorizontal: 16
    },
    chevron: {
        alignSelf: 'center'
    }
}