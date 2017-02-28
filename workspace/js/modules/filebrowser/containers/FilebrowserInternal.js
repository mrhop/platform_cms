require('./FilebrowserInternal.scss');
import {initFilebrowserDispatch} from '../actions/filebrowser';

class Filebrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    onclick(fileTemp) {
        //将值付给父窗口，并关闭当前窗口
        var url = fileTemp.url;
        window.opener.CKEDITOR.tools.callFunction(this.state.CKEditorFuncNum, url);
        window.close();
        return false;
    }

    callbackSuccess(data) {
        console.log("log success")
        this.state.data = data.data;
        this.forceUpdate()
    }

    componentWillMount() {

        //data init
        //endpoints.gettokenbyclient,需要加上其他属性，比如说
        var parameters = (window.location.href.split("?")[1]).split("&")
        for (var index in parameters) {
            var parameterArr = parameters[index].split("=")
            this.state[parameterArr[0]] = parameterArr[1];
        }
        this.props.initFilebrowserDispatch(
            {endpoint: endpoints.filelists + (this.state.type ? ("?type=" + this.state.type) : "")})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.websites && !this.state.formComponentRule) {
            this.state.formComponentRule = {
                "structure": [
                    {
                        "name": "website",
                        "label": "所属网站",
                        "type": "select",
                        "placeholder": "所属网站...",
                        dataType: "number",
                        items: nextProps.websites
                    },
                    {
                        "name": "filter",
                        "label": "关键字",
                        "type": "text",
                        "placeholder": "关键字",
                    },
                    {
                        "name": "type",
                        "type": "hidden",
                        defaultValue: this.state.type,
                        "available": false
                    }
                ],
                "submit": {
                    "label": "查询"
                }
            };
            this.state.formComponent =
                <div className="filebrowser-form-container"><Form.InlineForm url={endpoints.filelists}
                                                                             initUrl={function(){return {"status": "success", responseData: this.state.formComponentRule }}.bind(this)}
                                                                             callback={this.callbackSuccess.bind(this)}
                                                                             symbol={"template-resource-position-form"}/>
                </div>;
        }
        this.state.data = {files: nextProps.files}
    }


    render() {
        if (this.state.formComponent) {
            var filesResult = <span style={{marginLeft:"22px"}}>无文件</span>
            if (this.state.data && this.state.data.files) {
                //标明可以做files的列表，然后根据type进行判断
                if (this.state.type && this.state.type == "image") {
                    var filesRows = []
                    var ceilUpNum = Math.ceil(this.state.data.files.length / 4);
                    for (var i = 0; i < ceilUpNum; i++) {
                        var filesColumns = []
                        for (var j = i; j < 4 * (i + 1); j++) {
                            var fileTemp = this.state.data.files[j];
                            if (fileTemp) {
                                filesColumns[j] =
                                    <div key={"image-"+j} className="col col-sm-3 col-xs-6"><img src={fileTemp.url}
                                                                                                 title={fileTemp.fileName}
                                                                                                 onClick={this.onclick.bind(this,fileTemp)}/>
                                    </div>
                            } else {
                                break;
                            }
                        }
                        filesRows[i] = <div className="row" key={"file-row-"+i}>{filesColumns}</div>;
                    }
                    filesResult = <CustomScrollbar ref="scrollbar-files">{filesRows}</CustomScrollbar>

                } else {
                    var filesArr = []
                    filesArr[0] = <div className="row" key={"file-row-0"}>
                        <div key={"column-1"} className="col col-sm-8 col-xs-6">名称</div>
                        <div key={"column-2"} className="col col-sm-4 col-xs-6">类型</div>
                    </div>
                    for (var i = 1;i<=  this.state.data.files.length;i++) {
                        var fileTemp = this.state.data.files[i-1];
                        filesArr[i] = <div className="row" key={"file-row-"+i}>
                            <div key={"column-1"} className="col col-sm-8 col-xs-6"><a href={fileTemp.url}
                                                                                      onClick={this.onclick.bind(this,fileTemp)}>{fileTemp.fileName}</a></div>
                            <div key={"column-2"} className="col col-sm-4 col-xs-6">{fileTemp.type}</div>
                        </div>
                    }
                    filesResult = <CustomScrollbar ref="scrollbar-files">{filesArr}</CustomScrollbar>
                }
            }

            var filesComponent = <div className="files-container">{filesResult}</div>
            return <div className="filebrowser-wrapper">
                <Panel.PanelWithHeader panelValues={{title : '文件列表'}}>
                    {this.state.formComponent}
                </Panel.PanelWithHeader>
                {filesComponent}
            </div>
        }
        else {
            return <div/>;
        }
    }
}


function mapStateToProps(state, ownProps) {
    if (state && state.filebrowser && state.filebrowser.data) {
        const {
            websites,
            files
        } = state.filebrowser.data
        return {websites, files}
    } else {
        return {};
    }
}

const reactFilebrowser = ReactRedux.connect(mapStateToProps, {
    initFilebrowserDispatch
})(Filebrowser)

export default reactFilebrowser
