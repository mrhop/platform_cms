//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.articles,
    deleteTableRowUrl: endpoints.deletearticle
}


export class ArticleListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-article-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'article/add.html'}
                                       updateUrl={baseUrl+'article/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class ArticleUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新文章出错',
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
        ReactRouter.browserHistory.push(baseUrl + "article/list.html");
    }

    render() {
        let symbol = 'form-article-update'
        return <Form.HorizontalForm url={endpoints.articleupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.articleinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.articleoptionupdate}
                                    submitedRouteUrl={baseUrl+"article/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class ArticleAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增文章出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增文章成功',
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
        let symbol = 'form-article-add'
        return <Form.HorizontalForm url={endpoints.articlesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.articleadd}
                                    updateUrl={endpoints.articleoptionupdate}
                                    symbol={symbol}/>
    }
}




