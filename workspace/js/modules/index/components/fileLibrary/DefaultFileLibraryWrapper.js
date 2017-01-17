//--DEMOtABLE STRUCTURE
let endpointsLocal = {
    getTableUrl: endpoints.fileLibrarys,
    deleteTableRowUrl: endpoints.deletefileLibrary
}


export class FileLibraryListWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let symbol = 'table-fileLibrary-list'
        return <Table.RowEditableTable minHeight={300} addUrl={baseUrl+'fileLibrary/add.html'}
                                       updateUrl={baseUrl+'fileLibrary/info.html'} endpoints={endpointsLocal}
                                       symbol={symbol}  {...this.props}/>
    }
}


export class FileLibraryUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '更新多媒体文件出错',
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
        ReactRouter.browserHistory.push(baseUrl + "fileLibrary/list.html");
    }

    render() {
        let symbol = 'form-fileLibrary-update'
        return <Form.HorizontalForm url={endpoints.fileLibraryupdate} callback={this.callback.bind(this)}
                                    initUrl={endpoints.fileLibraryinfo+'?key='+this.props.location.query.key}
                                    updateUrl={endpoints.fileLibraryoptionupdate}
                                    submitedRouteUrl={baseUrl+"fileLibrary/list.html"}
                                    backup={this.backup}
                                    symbol={symbol}/>
    }
}

export class FileLibraryAddWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.serverFailureModalData = {
            title: '新增多媒体文件出错',
            footerCloseButton: {
                visible: true,
                title: '关闭',
            }
        }
        this.serverSuccess= {
            title: '新增多媒体文件成功',
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
        let symbol = 'form-fileLibrary-add'
        return <Form.HorizontalForm url={endpoints.fileLibrarysave} callback={this.callback.bind(this)}
                                    initUrl={endpoints.fileLibraryadd}
                                    updateUrl={endpoints.fileLibraryoptionupdate}
                                    symbol={symbol}/>
    }
}




