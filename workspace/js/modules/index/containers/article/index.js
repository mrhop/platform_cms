/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {ArticleListWrapper,ArticleUpdateWrapper,ArticleAddWrapper} from '../../components/article/DefaultArticleWrapper';

export default class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : '文章列表'}}>
                    <ArticleListWrapper />
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
            <Panel.PanelWithHeader panelValues={{title : '更新文章信息'}}>
                <ArticleUpdateWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

export class TableAddBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel.PanelWithHeader panelValues={{title : '新增文章'}}>
                <ArticleAddWrapper {...this.props}/>
            </Panel.PanelWithHeader>);
    }
}

