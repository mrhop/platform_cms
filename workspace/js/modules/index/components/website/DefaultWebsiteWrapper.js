//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.websites,
    deleteTableRowUrl: endpoints.deletewebsite
}


export class WebsiteListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-website-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'website/add.html'}
                                       updateUrl={baseUrl+'website/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class WebsiteUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新网站出错',
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
        ReactRouter.browserHistory.push(baseUrl + "website/list.html");
    }

    render() {
        let symbol = 'form-website-update'
        return <Form.HorizontalForm url={endpoints.websiteupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.websiteinfo+'?key='+this.props.location.query.key}
                                    submitedRouteUrl={baseUrl+"website/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class WebsiteAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增网站出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增网站成功',
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
        let symbol = 'form-website-add'
        return <Form.HorizontalForm url={endpoints.websitesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.websiteadd}
                                    symbol={symbol}/>
    }
}




