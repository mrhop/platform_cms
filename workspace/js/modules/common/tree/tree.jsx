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
        this.state = {parentId: this.props.parentId}
    }

    componentWillMount() {
        if(this.props.url){
            this.getTreeDispatch({endpoint: this.props.url, parentId: this.state.parentId, symbol: this.props.symbol});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.treeData && !this.state.treeData) {
            this.state.treeData = nextProps.treeData;
        }
    }


    clickIcon(target) {
        //判断target是否有child，判断是open还是close状态,判断是否已经读取了数据,然后进行获取
        console("clickIcon")
    }

    clickInput(target) {
        //点击input的时候，弹出tree在其下方
        console("clickInput")
    }

    click(target) {
        //点击目标，并将值写入input中即可
        //当有callback时，执行callback
        console("click")
        //
        //this.props.item.value = target.value;
        if(this.props.onchange){
            this.props.onchange();
        }
    }


    render() {
        if (this.state.treeData) {
            //生成dom，首先是一个div--input，然后是div-ul-li,最后是一个wrapper
            var inputDom = <div className="tree-input-wrapper"><input type="text"
                                                                      onClick={this.clickInput.bind(this)}
                                                                      readonly className="tree-input"
                                                                      value={this.state.defaultTitle}/></div>
            var treeDomItems = [];
            for (var i = 0; i < this.state.treeData.length; i++) {
                treeDomItems[i] = this.generateTreeItem(this.state.treeData[i]);
            }
            var treeDom = <div className="tree-items-wrapper">
                <ul className="tree-items" onClick={this.clickIcon.bind(this)}>{treeDomItems}</ul>
            </div>
            return <div id={this.props.id} className="tree-wrapper">{inputDom}{treeDom}</div>
        } else {
            return <div></div>
        }
    }

    generateTreeItem(item) {
        var className = "tree-item" + (item.hasChild ? " has-child" : "");
        if (item.id === this.props.parentId) {
            item.children = this.props.tableData;
        }
        if (item.children) {
            var treeDomItems = []
            for (var i = 0; i < item.children.length; i++) {
                var tempItem = item.children[i];
                treeDomItems[i] = generateTreeItem(tempItem)
            }
            var className = className + (item.id === this.props.parentId ? " opened" : "");
            return <li className={className} data-value={item.id} onClick={this.clickIcon.bind(this)}><span
                data-value={item.id} data-title={item.title}
                onClick={this.click.bind(this)}>{item.title}</span>
                <ul className="tree-items">{treeDomItems}</ul>
            </li>
        } else {
            return <li className={className}><span data-value={item.id}>{item.title}</span></li>;
        }
    }

}

function mapStateToProps(state, ownProps) {
    if (ownProps.symbol && state && state.tree && state.tree.main[ownProps.symbol]) {
        const {
            status,
            message,
            treeData,
            parentId
        } = state.tree.main[ownProps.symbol]
        return {
            status,
            message,
            treeData,
            parentId
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
