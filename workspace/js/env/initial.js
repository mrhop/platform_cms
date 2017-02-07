/**
 * Created by Donghui Huo on 2016/4/26.
 */
var localeLanguage = 'zh-CN';
var name = "baseurl=";
var nameLanguage = "locale=";
var baseUrl = "/"
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
        baseUrl = c.substring(name.length, c.length);
        break;
    }
    if (c.indexOf(nameLanguage) == 0) {
        localeLanguage = c.substring(name.length, c.length);
        break;
    }
}
module.exports = {
    locale: localeLanguage,
    baseUrl: baseUrl,
    endpoints: {
        gettokenbyclient: baseUrl + 'gettokenbyclient',
        initlogin: baseUrl + 'initlogin',
        gettokenbypassword: baseUrl + 'gettokenbypassword',
        dashboardleftmenu: baseUrl + 'leftmenu',
        //website
        websites: baseUrl + 'website/list',
        deletewebsite: baseUrl + 'website/delete',
        websiteinfo: baseUrl + 'website/info',
        websiteupdate: baseUrl + 'website/update',
        websiteadd: baseUrl + 'website/add',
        websitesave: baseUrl + 'website/save',
        //resource
        resources: baseUrl + 'resource/list',
        deleteresource: baseUrl + 'resource/delete',
        resourceinfo: baseUrl + 'resource/info',
        resourceupdate: baseUrl + 'resource/update',
        resourceadd: baseUrl + 'resource/add',
        resourcesave: baseUrl + 'resource/save',
        //template
        templates: baseUrl + 'template/list',
        deletetemplate: baseUrl + 'template/delete',
        templateinfo: baseUrl + 'template/info',
        templateupdate: baseUrl + 'template/update',
        templateadd: baseUrl + 'template/add',
        templatesave: baseUrl + 'template/save',
        templateoptionupdate: baseUrl + 'template/rule/update',
        //block
        blocks: baseUrl + 'block/list',
        deleteblock: baseUrl + 'block/delete',
        blockinfo: baseUrl + 'block/info',
        blockupdate: baseUrl + 'block/update',
        blockadd: baseUrl + 'block/add',
        blocksave: baseUrl + 'block/save',
        blockoptionupdate: baseUrl + 'block/rule/update',
        //news
        news: baseUrl + 'news/list',
        deletenews: baseUrl + 'news/delete',
        newsinfo: baseUrl + 'news/info',
        newsupdate: baseUrl + 'news/update',
        newsadd: baseUrl + 'news/add',
        newssave: baseUrl + 'news/save',
        newsoptionupdate: baseUrl + 'news/rule/update',
        //newsType
        newsTypes: baseUrl + 'newstype/list',
        deletenewsType: baseUrl + 'newstype/delete',
        newsTypeinfo: baseUrl + 'newstype/info',
        newsTypeupdate: baseUrl + 'newstype/update',
        newsTypeadd: baseUrl + 'newstype/add',
        newsTypesave: baseUrl + 'newstype/save',
        newsTypeoptionupdate: baseUrl + 'newstype/rule/update',
        //poll
        polls: baseUrl + 'poll/list',
        deletepoll: baseUrl + 'poll/delete',
        pollinfo: baseUrl + 'poll/info',
        pollupdate: baseUrl + 'poll/update',
        polladd: baseUrl + 'poll/add',
        pollsave: baseUrl + 'poll/save',
        //pollOption
        pollOptions: baseUrl + 'polloption/list',
        deletepollOption: baseUrl + 'polloption/delete',
        pollOptioninfo: baseUrl + 'polloption/info',
        pollOptionupdate: baseUrl + 'polloption/update',
        pollOptionadd: baseUrl + 'polloption/add',
        pollOptionsave: baseUrl + 'polloption/save',
        pollOptionoptionupdate: baseUrl + 'polloption/rule/update',
        //operation
        operations: baseUrl + 'operation/list',
        deleteoperation: baseUrl + 'operation/delete',
        operationinfo: baseUrl + 'operation/info',
        operationupdate: baseUrl + 'operation/update',
        //navigate
        navigates: baseUrl + 'navigate/list',
        deletenavigate: baseUrl + 'navigate/delete',
        navigateinfo: baseUrl + 'navigate/info',
        navigateupdate: baseUrl + 'navigate/update',
        navigateadd: baseUrl + 'navigate/add',
        navigatesave: baseUrl + 'navigate/save',
        navigateoptionupdate: baseUrl + 'navigate/rule/update',
        //fileLibrary
        fileLibrarys: baseUrl + 'filelibrary/list',
        deletefileLibrary: baseUrl + 'filelibrary/delete',
        fileLibraryinfo: baseUrl + 'filelibrary/info',
        fileLibraryupdate: baseUrl + 'filelibrary/update',
        fileLibraryadd: baseUrl + 'filelibrary/add',
        fileLibrarysave: baseUrl + 'filelibrary/save',
        fileLibraryoptionupdate: baseUrl + 'filelibrary/rule/update',
        //fileLibraryType
        fileLibraryTypes: baseUrl + 'filelibrarytype/list',
        deletefileLibraryType: baseUrl + 'filelibrarytype/delete',
        fileLibraryTypeinfo: baseUrl + 'filelibrarytype/info',
        fileLibraryTypeupdate: baseUrl + 'filelibrarytype/update',
        fileLibraryTypeadd: baseUrl + 'filelibrarytype/add',
        fileLibraryTypesave: baseUrl + 'filelibrarytype/save',
        fileLibraryTypeoptionupdate: baseUrl + 'filelibrarytype/rule/update',
        //article
        articles: baseUrl + 'article/list',
        deletearticle: baseUrl + 'article/delete',
        articleinfo: baseUrl + 'article/info',
        articleupdate: baseUrl + 'article/update',
        articleadd: baseUrl + 'article/add',
        articlesave: baseUrl + 'article/save',
        articleoptionupdate: baseUrl + 'article/rule/update'
    }
}
