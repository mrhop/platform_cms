//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.navigates,
    deleteTableRowUrl: endpoints.deletenavigate
}


export class NavigateListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-navigate-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'navigate/add.html'}
                                       updateUrl={baseUrl+'navigate/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class NavigateUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新导航出错',
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
        ReactRouter.browserHistory.push(baseUrl + "navigate/list.html");
    }

    render() {
        let symbol = 'form-navigate-update'
        return <Form.HorizontalForm url={endpoints.navigateupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.navigateinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.navigateoptionupdate}
                                    submitedRouteUrl={baseUrl+"navigate/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class NavigateAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增导航出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增导航成功',
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
        }else{
            this.serverSuccess.content = "保存成功"
            Modal.createModal.bind(this, {modalValues: this.serverSuccess, type: 'messageSuccess'})()
        }
        return true
    }

    render() {
        let symbol = 'form-navigate-add'
        return <Form.HorizontalForm url={endpoints.navigatesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.navigateadd}
                                    updateUrl={endpoints.navigateoptionupdate}
                                    symbol={symbol}/>
    }
}




