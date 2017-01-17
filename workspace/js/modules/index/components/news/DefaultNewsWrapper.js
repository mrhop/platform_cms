//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.newss,
    deleteTableRowUrl: endpoints.deletenews
}


export class NewsListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-news-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'news/add.html'}
                                       updateUrl={baseUrl+'news/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class NewsUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新新闻出错',
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
        ReactRouter.browserHistory.push(baseUrl + "news/list.html");
    }

    render() {
        let symbol = 'form-news-update'
        return <Form.HorizontalForm url={endpoints.newsupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.newsinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.newsoptionupdate}
                                    submitedRouteUrl={baseUrl+"news/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class NewsAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增新闻出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增新闻成功',
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
        let symbol = 'form-news-add'
        return <Form.HorizontalForm url={endpoints.newssave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.newsadd}
                                    updateUrl={endpoints.newsoptionupdate}
                                    symbol={symbol}/>
    }
}




