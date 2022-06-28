

export function matchByCategory(props) {

    console.log(props);

    let me = {}
    let usersArray = [];
    let categoriesArray = [];
    let userCategoriesArray = [];
    let connUserArray = [];

    let userId = 2;

    props.users.forEach(element => {
        usersArray.push(element);
    });
        console.log(usersArray);

    props.categories.forEach(element => {
        categoriesArray.push(element);
    });
        console.log(categoriesArray);

    props.userCategories.forEach(element => {
        userCategoriesArray.push(element);
    });
        console.log(userCategoriesArray);



    // console.log(currentUserCategories);

    // console.log(currentUserCategories);
    // connUserArray = [...new Set(connUserArray)];
    // console.log(connUserArray);


}
