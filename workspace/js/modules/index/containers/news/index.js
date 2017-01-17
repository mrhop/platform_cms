/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {NewsTypeListWrapper,NewsTypeUpdateWrapper,NewsTypeAddWrapper} from '../../components/newsType/DefaultNewsTypeWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '新闻类型列表'}}>
                    <NewsTypeListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新新闻类型'}}>
                <NewsTypeUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增新闻类型'}}>
                <NewsTypeAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

