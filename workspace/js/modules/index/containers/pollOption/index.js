/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {PollOptionListWrapper,PollOptionUpdateWrapper,PollOptionAddWrapper} from '../../components/pollOption/DefaultPollOptionWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '投票选项列表'}}>
                    <PollOptionListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新投票选项'}}>
                <PollOptionUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增投票选项'}}>
                <PollOptionAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

