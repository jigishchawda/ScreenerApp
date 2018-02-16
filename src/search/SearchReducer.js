import constants from './Constants'

const initialState = {
    queryResult: [],
    companyResult: {}
}


export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case constants.actionType.SEARCH_RESULT_SUCCESS:
            return {
                ...state,
                queryResult: action.queryResult
            }
        case constants.actionType.SEARCH_RESULT_FAILURE:
            return {
                ...state,
                queryResult: []
            }
        case constants.actionType.SEARCH_COMPANY_RESULT_SUCCESS:
            return {
                ...state,
                companyResult: action.companyResult
            }
        case constants.actionType.SEARCH_RESULT_FAILURE:
            return {
                ...state,
                companyResult: []
            }
        default: return state
    }
}