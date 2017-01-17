/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {WebsiteListWrapper,WebsiteUpdateWrapper,WebsiteAddWrapper} from '../../components/website/DefaultWebsiteWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '网站列表'}}>
                    <WebsiteListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新网站信息'}}>
                <WebsiteUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增网站'}}>
                <WebsiteAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

