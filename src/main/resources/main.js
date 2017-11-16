var thymeleaf = require('/lib/xp/thymeleaf');
var router = require('/lib/router')();
var helper = require('/lib/helper');
var swController = require('/lib/pwa/sw-controller');
var siteTitle = 'PWA Starter';
var authLib = require('/lib/xp/auth');

var renderPage = function(pageName) {
    return function() {
        return {
            body: thymeleafLib.render(resolve('pages/' + pageName), {
                title: siteTitle,
                baseUrl: helper.getBaseUrl()
            })
        };
    }
};



routerInit();


// ROUTES
router.get('/', function (req) {
    return {
        body: thymeleaf.render(resolve('pages/default.html'), {
            title: siteTitle,
            appUrl: helper.getAppUrl(),
            baseUrl: helper.getBaseUrl(),
            precacheUrl: helper.getBaseUrl() + '/precache',
            user : authLib.getUser(),
            isLive: (req.mode == 'live')
        })
    }
});

router.get('/about', renderPage('about.html'));

router.get('/contact', renderPage('contact.html'));

router.get('/sw.js', swController.get);

// Init Router defaults.
function routerInit(){

    // Add a filter to just log the request.
    router.filter(function(req, next) {
        // Log info.
        //   log.info('Entered ' + req.path);
        // Execute next and return.
        return next(req);

    });

// Make the router every GET request
    exports.get = function(req) {
        return router.dispatch(req);
    };

// Make the router every POST request
    exports.post = function(req) {
        return router.dispatch(req);
    };

// Make the router every PUT request
    exports.put = function(req) {
        return router.dispatch(req);
    };

// Make the router every DELETE request
    exports.delete = function(req) {
        return router.dispatch(req);
    };

}


// Log when application is stopped
__.disposer(function() {
    log.info('Application ' + app.name + ' stopped');
});

// Log application started
log.info('Application ' + app.name + ' started');
log.info("Application can be reached on basePath: /app/" + app.name);