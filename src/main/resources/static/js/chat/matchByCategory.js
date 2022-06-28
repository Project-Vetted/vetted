

export function matchByCategory(props) {

    // console.log(props);

    let userId = props.me.id;
    let usersArray = [];
    let usersCategoriesArray = [];
    let currentUserCategories = [];
    let matchedUsersArray = [];

    props.users.forEach(element => {
        usersArray.push(element);
    });
        // console.log(usersArray);

    props.userCategories.forEach(element => {
        usersCategoriesArray.push(element);
    });
        // console.log(usersCategoriesArray);

    for (let i = 0; i < usersCategoriesArray.length; i++) {
        if (usersCategoriesArray[i]['user_id'] === userId) {
            currentUserCategories.push(usersCategoriesArray[i]['category_id'])
        }
    }
        // console.log(currentUserCategories);

    for (let x = 0; x < usersCategoriesArray.length; x++) {
        if (usersCategoriesArray[x]['user_id'] !== userId && currentUserCategories.includes(usersCategoriesArray[x]['category_id'])) {
            matchedUsersArray.push(usersArray[(usersCategoriesArray[x]['user_id']) - 1]);
        }
    }
    matchedUsersArray = [...new Set(matchedUsersArray)];
    // console.log(matchedUsersArray);
    return matchedUsersArray;

}
