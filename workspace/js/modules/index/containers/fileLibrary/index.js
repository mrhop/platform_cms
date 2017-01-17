/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {FileLibraryListWrapper,FileLibraryUpdateWrapper,FileLibraryAddWrapper} from '../../components/fileLibrary/DefaultFileLibraryWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '媒体文件列表'}}>
                    <FileLibraryListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新媒体文件'}}>
                <FileLibraryUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增媒体文件'}}>
                <FileLibraryAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

