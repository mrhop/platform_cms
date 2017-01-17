/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {OperationListWrapper,OperationUpdateWrapper} from '../../components/operation/DefaultOperationWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '操作记录列表'}}>
                    <OperationListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '查看操作记录'}}>
                <OperationUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}


