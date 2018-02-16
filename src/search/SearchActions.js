import appConfig from '../../AppConfig'
import constants from './Constants'
export default {
    searchCompanyByUrl(url) {
        return (dispatch) => {
            fetch(appConfig.endpoint + url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json())
            .then((responseJSON) => {
                dispatch({
                    type: constants.actionType.SEARCH_COMPANY_RESULT_SUCCESS,
                    companyResult: responseJSON
                })

            }).catch(err => {
                dispatch({
                    type: constants.actionType.SEARCH_COMPANY_RESULT_FAILURE
                })
            })
        }
    },
    searchQuery(query) {
        return (dispatch) => {
            fetch(appConfig.endpoint + '/company/search/?q=' + query, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json())
            .then((responseJSON) => {
                dispatch({
                    type: constants.actionType.SEARCH_RESULT_SUCCESS,
                    queryResult: responseJSON
                })

            }).catch(err => {
                dispatch({
                    type: constants.actionType.SEARCH_RESULT_FAILURE
                })
            })
        }
    }
}