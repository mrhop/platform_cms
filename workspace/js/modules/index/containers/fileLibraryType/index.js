/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {FileLibraryTypeListWrapper,FileLibraryTypeUpdateWrapper,FileLibraryTypeAddWrapper} from '../../components/fileLibraryType/DefaultFileLibraryTypeWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '媒体库列表'}}>
                    <FileLibraryTypeListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新媒体库'}}>
                <FileLibraryTypeUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增媒体库'}}>
                <FileLibraryTypeAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

