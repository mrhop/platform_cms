//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.newsTypes,
    deleteTableRowUrl: endpoints.deletenewsType
}


export class NewsTypeListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-newsType-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'newsType/add.html'}
                                       updateUrl={baseUrl+'newsType/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class NewsTypeUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新新闻类型出错',
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
        ReactRouter.browserHistory.push(baseUrl + "newsType/list.html");
    }

    render() {
        let symbol = 'form-newsType-update'
        return <Form.HorizontalForm url={endpoints.newsTypeupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.newsTypeinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.newsTypeoptionupdate}
                                    submitedRouteUrl={baseUrl+"newsType/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class NewsTypeAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增新闻类型出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增新闻类型成功',
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
        let symbol = 'form-newsType-add'
        return <Form.HorizontalForm url={endpoints.newsTypesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.newsTypeadd}
                                    updateUrl={endpoints.newsTypeoptionupdate}
                                    symbol={symbol}/>
    }
}




