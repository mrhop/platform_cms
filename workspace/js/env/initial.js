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
        newsTypes: baseUrl + 'newsType/list',
        deletenewsType: baseUrl + 'newsType/delete',
        newsTypeinfo: baseUrl + 'newsType/info',
        newsTypeupdate: baseUrl + 'newsType/update',
        newsTypeadd: baseUrl + 'newsType/add',
        newsTypesave: baseUrl + 'newsType/save',
        newsTypeoptionupdate: baseUrl + 'newsType/rule/update',
        //poll
        polls: baseUrl + 'poll/list',
        deletepoll: baseUrl + 'poll/delete',
        pollinfo: baseUrl + 'poll/info',
        pollupdate: baseUrl + 'poll/update',
        polladd: baseUrl + 'poll/add',
        pollsave: baseUrl + 'poll/save',
        //pollOption
        pollOptions: baseUrl + 'pollOption/list',
        deletepollOption: baseUrl + 'pollOption/delete',
        pollOptioninfo: baseUrl + 'pollOption/info',
        pollOptionupdate: baseUrl + 'pollOption/update',
        pollOptionadd: baseUrl + 'pollOption/add',
        pollOptionsave: baseUrl + 'pollOption/save',
        pollOptionoptionupdate: baseUrl + 'pollOption/rule/update',
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
        fileLibrarys: baseUrl + 'fileLibrary/list',
        deletefileLibrary: baseUrl + 'fileLibrary/delete',
        fileLibraryinfo: baseUrl + 'fileLibrary/info',
        fileLibraryupdate: baseUrl + 'fileLibrary/update',
        fileLibraryadd: baseUrl + 'fileLibrary/add',
        fileLibrarysave: baseUrl + 'fileLibrary/save',
        fileLibraryoptionupdate: baseUrl + 'fileLibrary/rule/update',
        //fileLibraryType
        fileLibraryTypes: baseUrl + 'fileLibraryType/list',
        deletefileLibraryType: baseUrl + 'fileLibraryType/delete',
        fileLibraryTypeinfo: baseUrl + 'fileLibraryType/info',
        fileLibraryTypeupdate: baseUrl + 'fileLibraryType/update',
        fileLibraryTypeadd: baseUrl + 'fileLibraryType/add',
        fileLibraryTypesave: baseUrl + 'fileLibraryType/save',
        fileLibraryTypeoptionupdate: baseUrl + 'fileLibraryType/rule/update',
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
