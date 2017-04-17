import {
 getUser,
 getProfile,
 getMemberships
} from '/lib/xp/auth';

export function whoami() {
    let user = getUser({
        includeProfile : true
    });

    let whoami = {
     user,
    "memberships" : getMemberships( user.key )
    };

    return whoami;
}