/**
 * Created by Donghui Huo on 2016/5/11.
 */
import rootReducer from './reducers'
import routes from './routes'
import middleware from './middleware'

global.basicStore = ConfigureStore.configureStore({reducer: rootReducer, middleware: middleware});
const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, global.basicStore)

ReactDOM.render(
    <RootContainer store={global.basicStore} history={history} routes={routes}/>,
    document.querySelector('#entirety')
)