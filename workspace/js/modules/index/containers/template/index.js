/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {TemplateListWrapper,TemplateUpdateWrapper,TemplateAddWrapper} from '../../components/template/DefaultTemplateWrapper';

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

