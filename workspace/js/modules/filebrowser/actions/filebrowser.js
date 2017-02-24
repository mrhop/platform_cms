export const GET_FILES_REQUEST = 'GET_FILES_REQUEST'
export const GET_FILES_SUCCESS = 'GET_FILES_SUCCESS'
export const GET_FILES_FAILURE = 'GET_FILES_FAILURE'


function initFilebrowser(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [GET_FILES_REQUEST, GET_FILES_SUCCESS, GET_FILES_FAILURE],
            endpoint:requestCondition.endpoint,
        }
    }
}

export function initFilebrowserDispatch(requestCondition) {
    return (dispatch, getState) => {
        return dispatch(initFilebrowser(requestCondition))
    }
}