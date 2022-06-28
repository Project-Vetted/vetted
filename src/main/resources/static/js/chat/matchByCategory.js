

export function matchByCategory(props) {

    console.log(props);

    let me = {}
    let usersArray = [];
    let categoriesArray = [];
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

    // props.categories.forEach(element => {
    //     categoriesArray.push(element);
    // });
    // console.log(categoriesArray);



    // console.log(currentUserCategories);

    // console.log(currentUserCategories);
    // connUserArray = [...new Set(connUserArray)];
    // console.log(connUserArray);


}
