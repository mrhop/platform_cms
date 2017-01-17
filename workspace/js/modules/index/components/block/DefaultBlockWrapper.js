//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.blocks,
    deleteTableRowUrl: endpoints.deleteblock
}


export class BlockListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-block-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'block/add.html'}
                                       updateUrl={baseUrl+'block/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class BlockUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新模块出错',
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
        ReactRouter.browserHistory.push(baseUrl + "block/list.html");
    }

    render() {
        let symbol = 'form-block-update'
        return <Form.HorizontalForm url={endpoints.blockupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.blockinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.blockoptionupdate}
                                    submitedRouteUrl={baseUrl+"block/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class BlockAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增模块出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增模块成功',
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
        let symbol = 'form-block-add'
        return <Form.HorizontalForm url={endpoints.blocksave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.blockadd}
                                    updateUrl={endpoints.blockoptionupdate}
                                    symbol={symbol}/>
    }
}




