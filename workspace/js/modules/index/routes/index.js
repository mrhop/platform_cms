import * as Index from '../containers'
import DashBoardContainer from '../../include/dashBoard/dashBoard.jsx'

export default [
    //<ReactRouter.IndexRoute component={Index.dashBoard} />
    <ReactRouter.Route path={baseUrl+"(index.html)"} component={DashBoardContainer}>
        <ReactRouter.IndexRoute component={Index.dashBoard}/>
        <ReactRouter.Route path={baseUrl+"website/list.html"} component={Index.websites}/>
        <ReactRouter.Route path={baseUrl+"website/info.html"} component={Index.websiteUpdate}/>
        <ReactRouter.Route path={baseUrl+"website/add.html"} component={Index.websiteAdd}/>
        <ReactRouter.Route path={baseUrl+"resource/list.html"} component={Index.resources}/>
        <ReactRouter.Route path={baseUrl+"resource/info.html"} component={Index.resourceUpdate}/>
        <ReactRouter.Route path={baseUrl+"resource/add.html"} component={Index.resourceAdd}/>
        <ReactRouter.Route path={baseUrl+"template/list.html"} component={Index.templates}/>
        <ReactRouter.Route path={baseUrl+"template/info.html"} component={Index.templateUpdate}/>
        <ReactRouter.Route path={baseUrl+"template/add.html"} component={Index.templateAdd}/>
        <ReactRouter.Route path={baseUrl+"block/list.html"} component={Index.blocks}/>
        <ReactRouter.Route path={baseUrl+"block/info.html"} component={Index.blockUpdate}/>
        <ReactRouter.Route path={baseUrl+"block/add.html"} component={Index.blockAdd}/>
        <ReactRouter.Route path={baseUrl+"news/list.html"} component={Index.news}/>
        <ReactRouter.Route path={baseUrl+"news/info.html"} component={Index.newsUpdate}/>
        <ReactRouter.Route path={baseUrl+"news/add.html"} component={Index.newsAdd}/>
        <ReactRouter.Route path={baseUrl+"newstype/list.html"} component={Index.newsTypes}/>
        <ReactRouter.Route path={baseUrl+"newstype/info.html"} component={Index.newsTypeUpdate}/>
        <ReactRouter.Route path={baseUrl+"newstype/add.html"} component={Index.newsTypeAdd}/>
        <ReactRouter.Route path={baseUrl+"poll/list.html"} component={Index.polls}/>
        <ReactRouter.Route path={baseUrl+"poll/info.html"} component={Index.pollUpdate}/>
        <ReactRouter.Route path={baseUrl+"poll/add.html"} component={Index.pollAdd}/>
        <ReactRouter.Route path={baseUrl+"polloption/list.html"} component={Index.pollOptions}/>
        <ReactRouter.Route path={baseUrl+"polloption/info.html"} component={Index.pollOptionUpdate}/>
        <ReactRouter.Route path={baseUrl+"polloption/add.html"} component={Index.pollOptionAdd}/>
        <ReactRouter.Route path={baseUrl+"operation/list.html"} component={Index.operations}/>
        <ReactRouter.Route path={baseUrl+"operation/info.html"} component={Index.operationUpdate}/>
        <ReactRouter.Route path={baseUrl+"navigate/list.html"} component={Index.navigates}/>
        <ReactRouter.Route path={baseUrl+"navigate/info.html"} component={Index.navigateUpdate}/>
        <ReactRouter.Route path={baseUrl+"navigate/add.html"} component={Index.navigateAdd}/>
        <ReactRouter.Route path={baseUrl+"filelibrary/list.html"} component={Index.fileLibrarys}/>
        <ReactRouter.Route path={baseUrl+"filelibrary/info.html"} component={Index.fileLibraryUpdate}/>
        <ReactRouter.Route path={baseUrl+"filelibrary/add.html"} component={Index.fileLibraryAdd}/>
        <ReactRouter.Route path={baseUrl+"filelibrarytype/list.html"} component={Index.fileLibraryTypes}/>
        <ReactRouter.Route path={baseUrl+"filelibrarytype/info.html"} component={Index.fileLibraryTypeUpdate}/>
        <ReactRouter.Route path={baseUrl+"filelibrarytype/add.html"} component={Index.fileLibraryTypeAdd}/>
        <ReactRouter.Route path={baseUrl+"article/list.html"} component={Index.articles}/>
        <ReactRouter.Route path={baseUrl+"article/info.html"} component={Index.articleUpdate}/>
        <ReactRouter.Route path={baseUrl+"article/add.html"} component={Index.articleAdd}/>
        <ReactRouter.Route path="/*" component={Index.error404}/>
    </ReactRouter.Route>
]

