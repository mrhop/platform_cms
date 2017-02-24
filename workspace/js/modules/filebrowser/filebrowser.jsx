import filebrowser from './reducers/filebrowser'
import FilebrowserInternal from './containers/FilebrowserInternal'

const store = ConfigureStore.configureStore({reducer: filebrowser, middleware: [MiddleWare.defaultCall]});
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <FilebrowserInternal />
    </ReactRedux.Provider>,
    document.querySelector('#entirety')
);

