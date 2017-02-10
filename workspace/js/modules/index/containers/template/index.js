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

global.template_content_position_click = function () {
    if (this.state.data.layoutScale) {
        if (!this.state.layout) {
            this.state.layout = {
                column_click: function (className) {
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
                            if (parseInt(from[0]) < this.state.layout.contentPosition.from[0]) {
                                this.state.layout.contentPosition.from[0] = parseInt(from[0])
                            }
                            if (parseInt(from[1]) < this.state.layout.contentPosition.from[1]) {
                                this.state.layout.contentPosition.from[1] = parseInt(from[1])
                            }
                            if (parseInt(to[0]) > this.state.layout.contentPosition.to[0]) {
                                this.state.layout.contentPosition.to[0] = parseInt(to[0])
                            }
                            if (parseInt(to[1]) > this.state.layout.contentPosition.to[1]) {
                                this.state.layout.contentPosition.to[1] = parseInt(to[1])
                            }
                            for (var i = this.state.layout.contentPosition.from[0]; i < this.state.layout.contentPosition.to[0]; i++) {
                                for (var j = this.state.layout.contentPosition.from[1]; j < this.state.layout.contentPosition.to[1]; j++) {
                                    var className = "div-column-" + i + "-" + j;
                                    var domSelected = document.getElementsByClassName(className)[0];
                                    if (domSelected.getAttribute("class").indexOf("selected") < 0) {
                                        domSelected.setAttribute("class", domSelected.getAttribute("class") + " selected")
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
        }
        var widthScale = parseInt(this.state.data.layoutScale.split("*")[0]);
        var heightScale = parseInt(this.state.data.layoutScale.split("*")[1]);
        var cloumnScale = 12 / heightScale;
        var divRow = [];
        for (var i = 0; i < widthScale; i++) {
            var divColumn = [];
            for (var j = 0; j < heightScale; j++) {
                var className = "div-column div-column-" + i + "-" + j + " col-xs-" + cloumnScale;
                if (this.state.layout.contentPosition && this.state.layout.contentPosition.from[0] <= i
                    && this.state.layout.contentPosition.from[1] <= j
                    && this.state.layout.contentPosition.to[0] >= (i + 1)
                    && this.state.layout.contentPosition.to[1] >= (j + 1)
                ) {
                    className += " selected";
                }
                divColumn[j] = <div className={className}
                                    onClick={this.state.layout.column_click.bind(this,className)} key={j}
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
                    this.state.data.contentPosition = "{from:[" + this.state.layout.contentPosition.from[0] + "," + this.state.layout.contentPosition.from[1] + "],to:[" + this.state.layout.contentPosition.to[0] + "," + this.state.layout.contentPosition.to[1] + "]}"
                }
                this.forceUpdate();
            },
            footerCloseButton: {
                visible: true,
                title: 'close',
            },
        };
        Modal.createModal.bind(this,{modalValues:confirmModalData,type:'message'})();
    } else {
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

global.template_layout_scale_change = function(){
    this.state.layout = null;
    this.state.data.contentPosition = null;
    this.forceUpdate();
}

