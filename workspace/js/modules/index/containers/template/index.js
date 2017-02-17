/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');
import {
    TemplateListWrapper,
    TemplateUpdateWrapper,
    TemplateAddWrapper
} from '../../components/template/DefaultTemplateWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '模板列表'}}>
                    <TemplateListWrapper />
                </Panel.PanelWithHeader>
            </div>)
            ;
    }
}


export class TableUpdateBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '更新模板'}}>
                <TemplateUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增模板'}}>
                <TemplateAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

global.template_layout_scale_change = function () {
    this.state.layout = null;
    this.state.data.contentPosition = null;
    this.state.data.templateBlocks = null;
    this.forceUpdate();
}

global.template_content_position_click = function () {
    if (this.state.data.layoutScale) {
        if (!this.state.layout) {
            this.state.layout = {};
        }
        if (this.state.data.contentPosition && !this.state.layout.contentPosition) {
            this.state.layout.contentPosition = JSON.parse(this.state.data.contentPosition);
        }
        if (this.state.data.blocksPosition && !this.state.layout.blocksPosition) {
            this.state.layout.blocksPosition = this.state.data.blocksPosition;
        }
        if (!this.state.layoutMethods) {
            this.state.layoutMethods = {}
        }
        if (!this.state.layoutMethods.column_click) {
            this.state.layoutMethods.column_click = function (className) {
                var domSelected = document.getElementsByClassName(className)[0];
                var from = domSelected.getAttribute("data-from").split(",");
                var to = domSelected.getAttribute("data-to").split(",");
                if (!this.state.layout.contentPosition) {
                    this.state.layout.contentPosition = {
                        from: [parseInt(from[0]), parseInt(from[1])],
                        to: [parseInt(to[0]), parseInt(to[1])]
                    }
                    domSelected.setAttribute("class", domSelected.getAttribute("class") + " selected")
                } else {
                    if (domSelected.getAttribute("class").indexOf("selected") < 0) {
                        //新增的情况，需要考虑多个的selected
                        var block_column_flag = false;
                        var tempPosition = {from: [], to: []}
                        if (parseInt(from[0]) < this.state.layout.contentPosition.from[0]) {
                            tempPosition.from[0] = parseInt(from[0])
                        } else {
                            tempPosition.from[0] = this.state.layout.contentPosition.from[0];
                        }
                        if (parseInt(from[1]) < this.state.layout.contentPosition.from[1]) {
                            tempPosition.from[1] = parseInt(from[1])
                        } else {
                            tempPosition.from[1] = this.state.layout.contentPosition.from[1];
                        }
                        if (parseInt(to[0]) > this.state.layout.contentPosition.to[0]) {
                            tempPosition.to[0] = parseInt(to[0])
                        } else {
                            tempPosition.to[0] = this.state.layout.contentPosition.to[0];
                        }
                        if (parseInt(to[1]) > this.state.layout.contentPosition.to[1]) {
                            tempPosition.to[1] = parseInt(to[1])
                        } else {
                            tempPosition.to[1] = this.state.layout.contentPosition.to[1];
                        }

                        outerloop:for (var i = tempPosition.from[0]; i < tempPosition.to[0]; i++) {
                            for (var j = tempPosition.from[1]; j < tempPosition.to[1]; j++) {
                                if (this.state.layout.blocksPosition) {
                                    for (var key in this.state.layout.blocksPosition) {
                                        if (this.state.layout.blocksPosition.hasOwnProperty(key)) {
                                            var blockPosition = this.state.layout.blocksPosition[key]
                                            //然后执行 className的判断和关联
                                            if (blockPosition && blockPosition.from[0] == i && blockPosition.from[1] == j && blockPosition.to[0] == (i + 1) && blockPosition.to[1] == (j + 1)) {
                                                block_column_flag = true;
                                                break outerloop;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!block_column_flag) {
                            this.state.layout.contentPosition = tempPosition;
                            for (var i = this.state.layout.contentPosition.from[0]; i < this.state.layout.contentPosition.to[0]; i++) {
                                for (var j = this.state.layout.contentPosition.from[1]; j < this.state.layout.contentPosition.to[1]; j++) {
                                    var className = "div-column-" + i + "-" + j;
                                    var domSelected = document.getElementsByClassName(className)[0];
                                    if (domSelected.getAttribute("class").indexOf("selected") < 0) {
                                        domSelected.setAttribute("class", domSelected.getAttribute("class") + " selected")
                                    }
                                }
                            }
                        }
                    } else {
                        //删除的情况，同样需要考虑多个的删除情况，因为需要考虑content必须是方型的
                        var temp_from = [];
                        var temp_to = [];
                        if (parseInt(from[1]) == this.state.layout.contentPosition.from[1]) {
                            temp_from[1] = parseInt(from[1])
                            temp_to[1] = parseInt(to[1]);
                            if (parseInt(to[1]) < this.state.layout.contentPosition.to[1]) {
                                temp_from[0] = this.state.layout.contentPosition.from[0];
                                temp_to[0] = this.state.layout.contentPosition.to[0];
                                this.state.layout.contentPosition.from[1] = this.state.layout.contentPosition.from[1] + 1;
                            } else if (parseInt(to[1]) == this.state.layout.contentPosition.to[1]) {
                                temp_from[0] = parseInt(from[0]);
                                temp_to[0] = parseInt(to[0]);
                                if (parseInt(from[0]) == this.state.layout.contentPosition.from[0]) {
                                    if (parseInt(to[0]) == this.state.layout.contentPosition.to[0]) {
                                        this.state.layout.contentPosition = null;
                                    } else {
                                        this.state.layout.contentPosition.from[0] = this.state.layout.contentPosition.from[0] + 1;
                                    }
                                } else if (parseInt(to[0]) == this.state.layout.contentPosition.to[0]) {
                                    this.state.layout.contentPosition.to[0] = this.state.layout.contentPosition.to[0] - 1;
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        } else if (parseInt(to[1]) == this.state.layout.contentPosition.to[1]) {
                            temp_from[1] = parseInt(from[1]);
                            temp_to[1] = parseInt(to[1]);
                            if (parseInt(from[1]) > this.state.layout.contentPosition.from[1]) {
                                temp_to[0] = this.state.layout.contentPosition.to[0];
                                temp_from[0] = this.state.layout.contentPosition.from[0];
                                this.state.layout.contentPosition.to[1] = this.state.layout.contentPosition.to[1] - 1;
                            } else {
                                return;
                            }
                        }
                        for (var i = temp_from[0]; i < temp_to[0]; i++) {
                            for (var j = temp_from[1]; j < temp_to[1]; j++) {
                                var className = "div-column-" + i + "-" + j;
                                var domSelected = document.getElementsByClassName(className)[0];
                                if (domSelected.getAttribute("class").indexOf("selected") > 0) {
                                    domSelected.setAttribute("class", domSelected.getAttribute("class").replace(" selected", ""));
                                }
                            }
                        }
                    }
                }
            }
        }
        var widthScale = parseInt(this.state.data.layoutScale.split("*")[0]);
        var heightScale = parseInt(this.state.data.layoutScale.split("*")[1]);
        var cloumnScale = 12 / heightScale;
        var divRow = [];
        for (var i = 0; i < widthScale; i++) {
            var divColumn = [];
            for (var j = 0; j < heightScale; j++) {
                var classNameOriginal = "div-column div-column-" + i + "-" + j + " col-xs-" + cloumnScale;
                var className = classNameOriginal;
                if (this.state.layout && this.state.layout.blocksPosition) {
                    var block_column_flag = false;
                    for (var key in this.state.layout.blocksPosition) {
                        if (this.state.layout.blocksPosition.hasOwnProperty(key)) {
                            var blockPosition = this.state.layout.blocksPosition[key]
                            //然后执行 className的判断和关联
                            if (blockPosition && blockPosition.from[0] == i && blockPosition.from[1] == j && blockPosition.to[0] == (i + 1) && blockPosition.to[1] == (j + 1)) {
                                className += " selected div-column-block";
                                block_column_flag = true;
                                break;
                            }
                        }
                    }
                    if (block_column_flag) {
                        divColumn[j] = <div className={className}
                                            key={j}
                                            data-from={i+","+j}
                                            data-to={(i+1)+","+(j+1)}></div>
                        continue;
                    }
                }
                if (this.state.layout.contentPosition && this.state.layout.contentPosition.from[0] <= i
                    && this.state.layout.contentPosition.from[1] <= j
                    && this.state.layout.contentPosition.to[0] >= (i + 1)
                    && this.state.layout.contentPosition.to[1] >= (j + 1)
                ) {
                    className += " selected";
                }
                divColumn[j] = <div className={className}
                                    onClick={this.state.layoutMethods.column_click.bind(this,classNameOriginal)} key={j}
                                    data-from={i+","+j}
                                    data-to={(i+1)+","+(j+1)}></div>
            }
            divRow[i] = <div className="div-row row" style={{height:"100px"}} key={i} data-from={i}
                             data-to={i+1}>{divColumn}</div>;
        }
        var content = <div className="div-template-content-position">
            {divRow}
        </div>;

        var confirmModalData = {
            content: content,
            title: '选择内容位置',
            closeFun: function () {
                if (!this.state.layout.contentPosition) {
                    this.state.data.contentPosition = null;
                } else {
                    this.state.data.contentPosition = "{\"from\":[" + this.state.layout.contentPosition.from[0] + "," + this.state.layout.contentPosition.from[1] + "],\"to\":[" + this.state.layout.contentPosition.to[0] + "," + this.state.layout.contentPosition.to[1] + "]}"
                }
                this.forceUpdate();
            },
            footerCloseButton: {
                visible: true,
                title: 'close',
            },
        };
        Modal.createModal.bind(this, {modalValues: confirmModalData, type: 'message'})();
    }
    else {
        var basicModalData = {
            content: <span>请先选择布局范围</span>,
            title: 'title',
            closeFun: function () {
                return true;
            },
            footerCloseButton: {
                visible: true,
                title: 'close',
            }
        };
        Modal.createModal.bind(this, {modalValues: basicModalData, type: 'messageError'})();
    }

}

global.template_include_blocks_change = function (target) {
    if (!target.checked) {
        if (this.state.layout && this.state.layout.blocksPosition && this.state.layout.blocksPosition["block_id_" + target.value]) {
            delete this.state.layout.blocksPosition["block_id_" + target.value]
        }
    } else {
        if (!this.state.data.layoutScale) {
            this.state.data.blocksPosition = null;
            this.state.data.templateBlocks = null;
            this.forceUpdate();
            var basicModalData = {
                content: <span>请先选择布局范围</span>,
                title: 'title',
                closeFun: function () {
                    return true;
                },
                footerCloseButton: {
                    visible: true,
                    title: 'close',
                }
            };
            Modal.createModal.bind(this, {modalValues: basicModalData, type: 'messageError'})();
        } else {
            if (!this.state.layout) {
                this.state.layout = {blockTarget: target};
            } else {
                this.state.layout.blockTarget = target;
            }
            if (this.state.data.contentPosition && !this.state.layout.contentPosition) {
                this.state.layout.contentPosition = JSON.parse(this.state.data.contentPosition);
            }
            if (this.state.data.blocksPosition && !this.state.layout.blocksPosition) {
                this.state.layout.blocksPosition = this.state.data.blocksPosition;
            }
            if (!this.state.layoutMethods) {
                this.state.layoutMethods = {}
            }
            if (!this.state.layoutMethods.column_block_click) {
                this.state.layoutMethods.column_block_click = function (className) {
                    //传入一个className
                    var domSelected = document.getElementsByClassName(className)[0];
                    if (domSelected.getAttribute("class").indexOf("div-column-temp-block-selected") < 0) {
                        //首先删除一个
                        var selectedBefore = document.getElementsByClassName("div-column-temp-block-selected")
                        if (selectedBefore && selectedBefore.length > 0) {
                            selectedBefore[0].setAttribute("class", selectedBefore[0].getAttribute("class").replace(" div-column-temp-block-selected", ""))
                        }
                        domSelected.setAttribute("class", domSelected.getAttribute("class") + " div-column-temp-block-selected");
                        var from = domSelected.getAttribute("data-from").split(",");
                        var to = domSelected.getAttribute("data-to").split(",");
                        if (!this.state.layout.blocksPosition) {
                            this.state.layout.blocksPosition = {};
                        }
                        this.state.layout.blocksPosition["block_id_" + this.state.layout.blockTarget.value] = {
                            "from": [parseInt(from[0]), parseInt(from[1])],
                            "to": [parseInt(to[0]), parseInt(to[1])]
                        };
                    }
                }
            }
            var widthScale = parseInt(this.state.data.layoutScale.split("*")[0]);
            var heightScale = parseInt(this.state.data.layoutScale.split("*")[1]);
            var cloumnScale = 12 / heightScale;
            var divRow = [];
            for (var i = 0; i < widthScale; i++) {
                var divColumn = [];
                for (var j = 0; j < heightScale; j++) {
                    var className = "div-column div-column-" + i + "-" + j + " col-xs-" + cloumnScale;
                    if (this.state.layout && this.state.layout.contentPosition && this.state.layout.contentPosition.from[0] <= i
                        && this.state.layout.contentPosition.from[1] <= j
                        && this.state.layout.contentPosition.to[0] >= (i + 1)
                        && this.state.layout.contentPosition.to[1] >= (j + 1)
                    ) {
                        className += " selected div-column-content";
                        divColumn[j] = <div className={className}
                                            key={j}
                                            data-from={i+","+j}
                                            data-to={(i+1)+","+(j+1)}></div>
                    }
                    else if (this.state.layout && this.state.layout.blocksPosition) {
                        var blockOnClickfun = this.state.layoutMethods.column_block_click.bind(this, className);
                        for (var key in this.state.layout.blocksPosition) {
                            if (this.state.layout.blocksPosition.hasOwnProperty(key)) {
                                var blockPosition = this.state.layout.blocksPosition[key]
                                //然后执行 className的判断和关联
                                if (blockPosition && blockPosition.from[0] == i && blockPosition.from[1] == j && blockPosition.to[0] == (i + 1) && blockPosition.to[1] == (j + 1)) {
                                    className += " selected div-column-block";
                                    blockOnClickfun = null;
                                    break;
                                }
                            }
                        }
                        divColumn[j] = <div className={className}
                                            key={j} onClick={blockOnClickfun}
                                            data-from={i+","+j}
                                            data-to={(i+1)+","+(j+1)}></div>
                    } else {
                        divColumn[j] = <div className={className}
                                            onClick={this.state.layoutMethods.column_block_click.bind(this,className)}
                                            key={j}
                                            data-from={i+","+j}
                                            data-to={(i+1)+","+(j+1)}></div>
                    }
                }
                divRow[i] = <div className="div-row row" style={{height:"100px"}} key={i} data-from={i}
                                 data-to={i+1}>{divColumn}</div>;
            }
            var content = <div className="div-template-block-position">
                {divRow}
            </div>;

            var confirmModalData = {
                content: content,
                title: '选择block位置',
                closeFun: function () {
                    if (!this.state.layout.blocksPosition) {
                        this.state.data.blocksPosition = null;
                        this.state.data.templateBlocks = null;
                    } else {
                        this.state.data.templateBlocks = [];
                        for (var key in this.state.layout.blocksPosition) {
                            if (this.state.layout.blocksPosition.hasOwnProperty(key)) {
                                this.state.data.templateBlocks.push(parseInt(key.replace("block_id_", "")));
                            }
                        }
                        this.state.data.blocksPosition = this.state.layout.blocksPosition;
                    }
                    this.forceUpdate();
                },
                footerCloseButton: {
                    visible: true,
                    title: 'close',
                },
            };
            Modal.createModal.bind(this, {modalValues: confirmModalData, type: 'message'})();
        }
    }
}

global.template_include_resources_change = function (target) {
    if (!target.checked) {
        if (this.state.data && this.state.data.resources && this.state.data.resources["resource_id_" + target.value]) {
            delete this.state.data.resources["resource_id_" + target.value]
        }
    } else {

        if (!this.state.layout) {
            this.state.layout = {resourceTarget: target};
        } else {
            this.state.layout.resourceTarget = target;
        }

        if (!this.state.layout.resourceFormRule) {
            this.state.layout.resourceFormRule = {
                "structure": [
                    {
                        "name": "location",
                        "label": "资源位置",
                        "type": "select",
                        "required": true,
                        "items": [{
                            "label": "头部",
                            "value": "head"
                        }, {
                            "label": "脚部",
                            "value": "foot"
                        }],
                        "validateRules": [
                            {
                                "name": "REQUIRED_VALIDATE",
                                "errorMsg": "不能为空"
                            }
                        ]
                    },
                    {
                        "name": "order",
                        "label": "顺序",
                        "type": "number",
                        "required": true,
                        defaultValue: 0,
                        "validateRules": [
                            {
                                "name": "REQUIRED_VALIDATE",
                                "errorMsg": "不能为空"
                            }
                        ]
                    }
                ],
                "submit": {
                    "label": "保存"
                },
                "reset": {
                    "label": "重置"
                }
            };
        }
        if (!this.state.layout.resourceFormGenerateFun) {
            this.state.layout.resourceFormGenerateFun = function () {
                var returnObj = {
                    "status": "success",
                    responseData: this.state.layout.resourceFormRule
                }
                if (this.state.data.resources) {
                    for (var key in this.state.data.resources) {
                        if (this.state.data.resources.hasOwnProperty(key)) {
                            if (parseInt(key.replace("resource_id_", "")) == parseInt(this.state.layout.resourceTarget.value)) {
                                //FORM default value
                                returnObj.responseData.structure[0].defaultValue = this.state.data.resources[key].location;
                                returnObj.responseData.structure[1].defaultValue = parseInt(this.state.data.resources[key].order);
                            }
                        }
                    }
                }
                return returnObj;
            }

        }
        if (!this.state.layout.resourceFormUpdateFun) {
            this.state.layout.resourceFormUpdateFun = function (dataObj) {
                if (dataObj.data) {
                    if (!this.state.data.resources) {
                        this.state.data.resources = {}
                    }
                    this.state.data.resources["resource_id_" + this.state.layout.resourceTarget.value] = dataObj.data;
                    this.state.layout.resourceDefaultModal.state.alertVisible = false;
                    this.state.layout.resourceDefaultModal.forceUpdate();
                }
            }
        }
        //开始初始化modal，save的时候同步data
        //写出form
        var providerForm = <ReactRedux.Provider store={global.basicStore}>
            <Form.HorizontalForm url={this.state.layout.resourceFormUpdateFun.bind(this)}
                                 initUrl={this.state.layout.resourceFormGenerateFun.bind(this)}
                                 symbol={"template-resource-position-form"}/>
        </ReactRedux.Provider>;
        var defaultModalData = {
            content: providerForm,
            title: '选择资源位置',
            footerCloseButton: {
                visible: false
            },
            closeFun: function () {
                if (!this.state.data.resources) {
                    this.state.data.templateResources = null;
                } else {
                    this.state.data.templateResources = [];
                    for (var key in this.state.data.resources) {
                        if (this.state.data.resources.hasOwnProperty(key)) {
                            this.state.data.templateResources.push(parseInt(key.replace("resource_id_", "")));
                        }
                    }
                }
                this.forceUpdate();
            }
        };
        this.state.layout.resourceDefaultModal = Modal.createModal.bind(this, {
            modalValues: defaultModalData,
            type: 'default'
        })();
    }
}
