

export function matchByCategory(props) {

    let userId = props.me.id;
    let usersArray = props.users;
    let usersCategoriesArray = props.userCategories;
    let currentUserCategories = [];
    let matchedUsersArray = [];


    for (let i = 0; i < usersCategoriesArray.length; i++) {
        if (usersCategoriesArray[i]['user_id'] === userId) {
            currentUserCategories.push(usersCategoriesArray[i]['category_id'])
        }
    }

    for (let x = 0; x < usersCategoriesArray.length; x++) {
        if (usersCategoriesArray[x]['user_id'] !== userId && currentUserCategories.includes(usersCategoriesArray[x]['category_id'])) {
            matchedUsersArray.push(usersArray[(usersCategoriesArray[x]['user_id']) - 1]);
        }
    }

    matchedUsersArray = [...new Set(matchedUsersArray)];

    return matchedUsersArray;

}
