/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {PollListWrapper,PollUpdateWrapper,PollAddWrapper} from '../../components/poll/DefaultPollWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '投票列表'}}>
                    <PollListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新投票'}}>
                <PollUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增投票'}}>
                <PollAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

