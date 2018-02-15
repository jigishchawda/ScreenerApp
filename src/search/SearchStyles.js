import {StyleSheet} from 'react-native'

export default styles = {
    searchTextContainer: {
        flexDirection: 'row',
        padding: 8
    },
    searchTextInput: {
        flex: 85,
        borderWidth: 1,
        borderColor: '#00000050',
        padding: 8
    },
    searchButton: {
        flex: 15
    },
    queryResultItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    queryResultItemText: {
        color: 'blue',
        fontSize: 18
    },
    separator: {
        height: 1,
        borderBottomWidth: 1,
        borderColor: 'black'
    }
}