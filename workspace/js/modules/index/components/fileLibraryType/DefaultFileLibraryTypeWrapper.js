//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.fileLibraryTypes,
    deleteTableRowUrl: endpoints.deletefileLibraryType
}


export class FileLibraryTypeListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-fileLibraryType-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'fileLibraryType/add.html'}
                                       updateUrl={baseUrl+'fileLibraryType/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class FileLibraryTypeUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新多媒体类型出错',
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
        ReactRouter.browserHistory.push(baseUrl + "fileLibraryType/list.html");
    }

    render() {
        let symbol = 'form-fileLibraryType-update'
        return <Form.HorizontalForm url={endpoints.fileLibraryTypeupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.fileLibraryTypeinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.fileLibraryTypeoptionupdate}
                                    submitedRouteUrl={baseUrl+"fileLibraryType/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class FileLibraryTypeAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增多媒体类型出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增多媒体类型成功',
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
        let symbol = 'form-fileLibraryType-add'
        return <Form.HorizontalForm url={endpoints.fileLibraryTypesave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.fileLibraryTypeadd}
                                    updateUrl={endpoints.fileLibraryTypeoptionupdate}
                                    symbol={symbol}/>
    }
}




