var libs = {
    thymeleaf: require('/lib/xp/thymeleaf'),
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('default.html'); // The view to render

    return {
        body: libs.thymeleaf.render(view, {}),
    }

}