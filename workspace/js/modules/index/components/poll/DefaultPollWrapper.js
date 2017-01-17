//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.polls,
    deleteTableRowUrl: endpoints.deletepoll
}


export class PollListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-poll-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'poll/add.html'}
                                       updateUrl={baseUrl+'poll/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class PollUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新投票出错',
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
        ReactRouter.browserHistory.push(baseUrl + "poll/list.html");
    }

    render() {
        let symbol = 'form-poll-update'
        return <Form.HorizontalForm url={endpoints.pollupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.pollinfo+'?key='+this.props.location.query.key}
                                    submitedRouteUrl={baseUrl+"poll/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class PollAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增投票出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增投票成功',
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
        let symbol = 'form-poll-add'
        return <Form.HorizontalForm url={endpoints.pollsave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.polladd}
                                    symbol={symbol}/>
    }
}




