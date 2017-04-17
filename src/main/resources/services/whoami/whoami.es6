import {whoami} from '/lib/auth';

function get(request) {
    return  { body: whoami()};
}

exports.get = get;