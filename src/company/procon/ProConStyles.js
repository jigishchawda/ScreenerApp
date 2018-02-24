import {StyleSheet} from 'react-native'

export const proColor = '#bce8f1'
const proBackgroundColor = '#f4f8fa'
export const conColor = '#faebcc'
const conBackgroundColor = '#faf8f0'


export default StyleSheet.create({
    proconContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    proColumn: {
        flex: 1, 
        borderColor: proColor, 
        borderWidth: 1, 
        backgroundColor: proBackgroundColor, 
        padding: 8 
    },
    conColumn: {
        flex: 1, 
        borderColor: conColor, 
        borderWidth: 1, 
        backgroundColor: conBackgroundColor, 
        padding: 8 
    },
    proconItem: {
        paddingTop: 8
    }
})