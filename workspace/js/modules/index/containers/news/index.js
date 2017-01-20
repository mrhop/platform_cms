/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {NewsListWrapper,NewsUpdateWrapper,NewsAddWrapper} from '../../components/news/DefaultNewsWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '新闻列表'}}>
                    <NewsListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新新闻'}}>
                <NewsUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增新闻'}}>
                <NewsAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

