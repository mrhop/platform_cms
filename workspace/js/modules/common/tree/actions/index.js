
export const TREE_REQUEST = 'TREE_REQUEST'
export const TREE_SUCCESS = 'TREE_SUCCESS'
export const TREE_FAILURE = 'TABLE_FAILURE'

function getTree(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'GET',
            types: [TREE_REQUEST, TREE_SUCCESS, TREE_FAILURE],
            //because need to set some other things ,so can not give the schema
            //schema: Schemas.TableData,
            endpoint: requestCondition.endpoint,
        },
        requestCondition
    }
}
export function getTreeDispatch(requestCondition = {
    parentId: null
}) {
    return (dispatch, getState) => {
        return dispatch(getTree(requestCondition))
    }
}
