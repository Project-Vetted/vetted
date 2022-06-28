

export function unmatchedUsers(props, matchedUsers) {

    // console.log(props);

    let userId = props.me.id;
    let unmatchedUsersArray = []

    props.users.forEach(element => {
        unmatchedUsersArray.push(element);
    });

    console.log(unmatchedUsersArray);

    for (let i = 0; i < unmatchedUsersArray; i++) {

    }
}
