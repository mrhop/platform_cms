/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {BlockListWrapper,BlockUpdateWrapper,BlockAddWrapper} from '../../components/block/DefaultBlockWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '模块列表'}}>
                    <BlockListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新模块信息'}}>
                <BlockUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增模块'}}>
                <BlockAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

