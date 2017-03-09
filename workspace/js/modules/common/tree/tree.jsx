/**
 * Created by Donghui Huo on 2016/6/2.
 */
require('./tree.scss');
import {
    getTreeDispatch
} from './actions'
class BasicTree extends React.Component {

    constructor(props) {
        super(props);
        //需要在receiveprops的时候进行data的植入和更新
        this.state = {parentId: this.props.parentId, treeHidden: true};
    }

    componentWillMount() {
        if (this.props.url) {
            if (this.state.parentId) {
                this.props.getTreeDispatch({
                    endpoint: this.props.url,
                    parentId: this.state.parentId,
                    symbol: this.props.symbol
                });
            } else {
                this.props.getTreeDispatch({endpoint: this.props.url, symbol: this.props.symbol});
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.url != this.props.url) {
            this.state.parentId = nextProps.parentId;
            delete this.state.treeData;
            if (this.state.parentId) {
                this.props.getTreeDispatch({
                    endpoint: nextProps.url,
                    parentId: this.state.parentId,
                    symbol: this.props.symbol
                });
            } else {
                this.props.getTreeDispatch({endpoint: nextProps.url, symbol: this.props.symbol});
            }
        }else if (nextProps.treeData && !this.state.treeData) {
            this.state.treeData = nextProps.treeData;
        }
    }

    clickInput() {
        //点击input的时候，弹出tree在其下方
        console.log("clickInput");
        if (this.state.treeHidden) {
            this.state.treeHidden = false;
        } else {
            this.state.treeHidden = true;
        }
        this.forceUpdate();
    }

    clickItemBg() {
        //点击input的时候，弹出tree在其下方
        this.state.treeHidden = true;
        this.forceUpdate();
    }

    clickIcon(item) {
        //判断target是否有child，判断是open还是close状态,判断是否已经读取了数据,然后进行获取
        console.log("clickIcon")
        this.state.iconClicked = true;
        if (item.hasChild) {
            if (item.opened) {
                //关闭
                delete item.opened;
                delete this.state.parentId
                this.forceUpdate();
            } else {
                item.opened = true
                this.state.parentId = item.id;
                if (item.children) {
                    this.forceUpdate();
                } else {
                    this.props.getTreeDispatch({
                        endpoint: this.props.url,
                        parentId: this.state.parentId,
                        symbol: this.props.symbol
                    });
                }
            }

        }
        //do force stop progerate
    }

    click(item) {
        //点击目标，并将值写入input中即可
        //当有callback时，执行callback
        if (!this.state.iconClicked) {
            this.state.treeHidden = true;
            this.state.defaultTitle = item.title;
            this.props.data && (this.props.data[this.props.name] = item.id )
            this.props.onchange && this.props.onchange();
            this.forceUpdate();
        } else {
            delete this.state.iconClicked
        }
    }


    render() {
        if (this.state.treeData) {
            //生成dom，首先是一个div--input，然后是div-ul-li,最后是一个wrapper
            var treeDomItems = [];
            for (var i = 0; i < this.state.treeData.length; i++) {
                treeDomItems[i] = this.generateTreeItem(this.state.treeData[i]);
            }
            var className = "tree-items-wrapper" + (this.state.treeHidden ? " tree-hidden" : "");
            var treeDom = <div className={className}>
                <div className="tree-bg"  onClick={this.clickItemBg.bind(this)}></div>
                <ul className="tree-items">{treeDomItems}</ul>
            </div>
            var inputDom = <div className="tree-input-wrapper"><input type="text"
                                                                      className="form-control text tree-input"
                                                                      onClick={this.clickInput.bind(this)}
                                                                      readOnly="readonly"
                                                                      value={this.state.defaultTitle}/></div>
            const rule = this.props.rule;
            let eleClassNames = classNames('tree-wrapper form-group', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);

            let labelClassNames = null
            let errorBlockClassNames = 'error-block';
            var treeEle = null;
            if(this.props.formType==="horizontalForm"){
                labelClassNames = 'col-sm-2'
                errorBlockClassNames = classNames(errorBlockClassNames, 'col-sm-10')
                treeEle = <div className={"col-sm-10"}>
                    {inputDom}{treeDom}
                </div>
            }else{
                treeEle = <div>
                    {inputDom}{treeDom}
                </div>
            }
            return <div className={eleClassNames} id={this.props.id}>
                {this.props.formType != "noLabelForm" ? (<label
                    className={labelClassNames}>{rule.label ? rule.label : null}{rule.label && rule.required ?
                    <span className="required">*</span> : null}</label>) : ""}
                {treeEle}
                {(rule.validated === undefined || rule.validated) ? null :
                    <span className={errorBlockClassNames}>{rule.errorMsg}</span>}
            </div>
        } else {
            return <div></div>
        }
    }

    generateTreeItem(item) {
        if(this.props.data && (this.props.data[this.props.name] == item.id )){
            this.state.defaultTitle = item.title;
        }
        var className = "tree-item" + (item.hasChild ? " has-child" : "") + (this.props.data && (this.props.data[this.props.name] == item.id ) ? " selected" : "");
        if (item.id === this.state.parentId) {
            item.children = this.props.treeData;
        }
        if (item.children) {
            var treeDomItems = []
            for (var i = 0; i < item.children.length; i++) {
                var tempItem = item.children[i];
                treeDomItems[i] = this.generateTreeItem(tempItem)
            }
            var className = className + (item.id === this.state.parentId ? " opened" : "");
            return <li key={"li-"+item.id} className={className} data-value={item.id}>
                <div className="tree-item-div" onClick={this.click.bind(this,item)}><span className="item-icon"
                                                                                          onClick={this.clickIcon.bind(this,item)}></span><span
                    className="item-value">{item.title}</span></div>
                <ul className="tree-items">{treeDomItems}</ul>
            </li>
        } else {
            return <li key={"li-"+item.id} className={className}>
                <div className="tree-item-div" onClick={this.click.bind(this,item)}><span
                    className="item-icon" onClick={this.clickIcon.bind(this,item)}></span><span
                    className="item-value">{item.title}</span></div>
            </li>;
        }
    }

}

function mapStateToProps(state, ownProps) {
    if (ownProps.symbol && state && state.tree && state.tree.main[ownProps.symbol]) {
        const {
            status,
            message,
            treeData
        } = state.tree.main[ownProps.symbol]
        return {
            status,
            message,
            treeData
        }
    } else {
        return {};
    }
}

module.exports = {
    BasicTree: ReactRedux.connect(mapStateToProps, {
        getTreeDispatch
    })(BasicTree),
};
