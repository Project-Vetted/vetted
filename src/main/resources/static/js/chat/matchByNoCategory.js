

export function matchByNoCategory(props, matchedUsers) {

    let usersArray = props.users;
    let unmatchedUsersArray = [];
    let matchedUserIdsArray = []


    for (let i = 0; i < matchedUsers.length; i++) {
        matchedUserIdsArray.push(matchedUsers[i]['id']);
    }

    for (let i = 0; i < usersArray.length; i++) {
        if (matchedUserIdsArray.includes(usersArray[i]['id']) === false && usersArray[i]['username'] !== props.me.username) {
            unmatchedUsersArray.push(usersArray[i]);
        }

    }

    return unmatchedUsersArray;

}
