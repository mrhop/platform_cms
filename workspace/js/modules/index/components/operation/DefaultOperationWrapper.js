//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.operations,
    deleteTableRowUrl: endpoints.deleteoperation
}


export class OperationListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-operation-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'operation/add.html'}
                                       updateUrl={baseUrl+'operation/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class OperationUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新操作记录出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
    }

    callback(data) {
        if (data && data.data && data.data.message) {
            this.serverFailureModalData.content = data.data.message
            Modal.createModal.bind(this, {modalValues: this.serverFailureModalData, type: 'messageError'})()
            return false
        }
        return true
    }

    backup() {
        ReactRouter.browserHistory.push(baseUrl + "operation/list.html");
    }

    render() {
        let symbol = 'form-operation-update'
        return <Form.HorizontalForm url={endpoints.operationupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.operationinfo+'?key='+this.props.location.query.key}
                                    submitedRouteUrl={baseUrl+"operation/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}




