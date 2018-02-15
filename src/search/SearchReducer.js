import constants from './Constants'

const initialState = {
    queryResult: [],
}


export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case constants.actionType.SEARCH_RESULT_SUCCESS:
            return {
                ...state,
                queryResult: action.queryResult
            }
        case constants.actionType.SEARCH_RESULT_FAILURe:
            return {
                ...state,
                queryResult: []
            }
        default: return state
    }
}