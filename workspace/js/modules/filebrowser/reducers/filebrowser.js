import * as ActionTypes from '../actions/filebrowser'
import form from '../../common/form/reducers'

function filebrowser(state = {}, action) {
    if (action.type === ActionTypes.GET_FILES_SUCCESS) {
        //将state写入 并赋值。commonResult的方式，然后就是过滤和form的方式，明天继续完成这个和服务器的设置
        if (action.response.status && action.response.status === "success") {
            state = action.response.responseData
            return l_merge({}, state)
        }
        else {
            console.log(action.response.status + " : " + action.response.message)
        }
    }
    return state
}


export default Redux.combineReducers({filebrowser, form})