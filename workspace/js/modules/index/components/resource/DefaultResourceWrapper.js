//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.resources,
    deleteTableRowUrl: endpoints.deleteresource
}


export class ResourceListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-resource-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'resource/add.html'}
                                       updateUrl={baseUrl+'resource/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class ResourceUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新资源出错',
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
        ReactRouter.browserHistory.push(baseUrl + "resource/list.html");
    }

    render() {
        let symbol = 'form-resource-update'
        return <Form.HorizontalForm url={endpoints.resourceupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.resourceinfo+'?key='+this.props.location.query.key}
                                    submitedRouteUrl={baseUrl+"resource/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class ResourceAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增资源出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增资源成功',
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
        let symbol = 'form-resource-add'
        return <Form.HorizontalForm url={endpoints.resourcesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.resourceadd}
                                    symbol={symbol}/>
    }
}




