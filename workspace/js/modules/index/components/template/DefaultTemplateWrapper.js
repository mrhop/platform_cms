//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.templates,
    deleteTableRowUrl: endpoints.deletetemplate
}


export class TemplateListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-template-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'template/add.html'}
                                       updateUrl={baseUrl+'template/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class TemplateUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新模板出错',
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
        ReactRouter.browserHistory.push(baseUrl + "template/list.html");
    }

    render() {
        let symbol = 'form-template-update'
        return <Form.HorizontalForm url={endpoints.templateupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.templateinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.templateoptionupdate}
                                    submitedRouteUrl={baseUrl+"template/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class TemplateAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增模板出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增模板成功',
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
        let symbol = 'form-template-add'
        return <Form.HorizontalForm url={endpoints.templatesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.templateadd}
                                    updateUrl={endpoints.templateoptionupdate}
                                    symbol={symbol}/>
    }
}




