//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.pollOptions,
    deleteTableRowUrl: endpoints.deletepollOption
}


export class PollOptionListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let symbol = 'table-pollOption-list'
        return <Table.RowEditableTable minHeight={300}
                                       addUrl={baseUrl+'polloption/add.html?key='+this.props.location.query.key}
                                       updateUrl={baseUrl+'polloption/info.html?pollId='+this.props.location.query.key} endpoints={{
    getTableUrl: endpoints.pollOptions+'?key='+this.props.location.query.key,
    deleteTableRowUrl: endpoints.deletepollOption
}}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class PollOptionUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.pollId = this.props.location.query.pollId
        this.serverFailureModalData = {
            title: '更新投票选项出错',
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
        ReactRouter.browserHistory.push(baseUrl + "polloption/list.html?key=" +  this.pollId );
    }

    render() {
        let symbol = 'form-pollOption-update'
        return <Form.HorizontalForm url={endpoints.pollOptionupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.pollOptioninfo+'?key='+this.props.location.query.key}
                                    submitedRouteUrl={baseUrl+"polloption/list.html?key="+this.pollId}
                                    backup={this.backup.bind(this)}
                                    symbol={symbol}/>
    }
}

export class PollOptionAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增投票选项出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess = {
            title: '新增投票选项成功',
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
        } else {
            this.serverSuccess.content = "保存成功"
            Modal.createModal.bind(this, {modalValues: this.serverSuccess, type: 'messageSuccess'})()
        }
        return true
    }

    render() {
        let symbol = 'form-pollOption-add'
        return <Form.HorizontalForm url={endpoints.pollOptionsave+"?key="+this.props.location.query.key}
                                    callback={this.callback.bind(this)}
                                    initUrl={endpoints.pollOptionadd+"?key="+this.props.location.query.key}
                                    symbol={symbol}/>
    }
}




