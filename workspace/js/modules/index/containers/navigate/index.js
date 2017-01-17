/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {NavigateListWrapper,NavigateUpdateWrapper,NavigateAddWrapper} from '../../components/navigate/DefaultNavigateWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '导航列表'}}>
                    <NavigateListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新导航'}}>
                <NavigateUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增导航'}}>
                <NavigateAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

