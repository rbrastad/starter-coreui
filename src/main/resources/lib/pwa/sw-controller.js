var mustache = require('/lib/xp/mustache');
var view = resolve('sw-template.js');
var helper = require('/lib/helper');

exports.get = function() {
    var appUrl = helper.getAppUrl();
    var baseUrl = helper.getBaseUrl();
    
    var preCacheRoot;
    if (appUrl === '/') {
        preCacheRoot = '/';
    } else if (helper.endsWithSlash(appUrl)) {
        preCacheRoot = baseUrl + '\',\'' + appUrl;
    } else {
        preCacheRoot = appUrl + '\',\'' + appUrl + '/';
    }
    
    return {
        headers: {
            'Service-Worker-Allowed': appUrl
        },
        contentType: 'application/javascript',
        body: mustache.render(view, {
            appUrl: appUrl,
            baseUrl: baseUrl,
            preCacheRoot: preCacheRoot
        })
    };
};
