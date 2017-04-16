
var thymeleafLib = require('/lib/xp/thymeleaf');
var authLib = require('/lib/xp/auth');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('default.html'); // The view to render

    var model = {
        user : authLib.getUser()
    };

    return {
        body: thymeleafLib.render(view, model),
    }

}