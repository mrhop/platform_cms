import * as ActionTypes from '../actions'

function main(state = {}, action) {
    if (action.type === ActionTypes.TREE_SUCCESS) {
        if (!state[action.requestCondition.symbol]) {
            state[action.requestCondition.symbol] = {};
        }
        if (action.response) {
            state[action.requestCondition.symbol].status = action.response.status;
            if (action.response.message) {
                state[action.requestCondition.symbol].message = action.response.message;
            }
        }
        if (action.response && action.response.status == 'success') {
            state[action.requestCondition.symbol].requestCondition = action['requestCondition'];
            state[action.requestCondition.symbol].parentId = action.requestCondition.symbol.parentId;
            if (action.response.responseData) {
                if (action.response.responseData) {
                    if (action.response.responseData.data) {
                        state[action.requestCondition.symbol].treeData = action.response.responseData.data;
                    } else {
                        state[action.requestCondition.symbol].treeData = null;
                    }
                }
            }
        }
        return l_merge({}, state)
    }
    return state
}


export default Redux.combineReducers({main})