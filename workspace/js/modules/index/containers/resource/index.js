/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {ResourceListWrapper,ResourceUpdateWrapper,ResourceAddWrapper} from '../../components/resource/DefaultResourceWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '资源列表'}}>
                    <ResourceListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新资源信息'}}>
                <ResourceUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增资源'}}>
                <ResourceAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

