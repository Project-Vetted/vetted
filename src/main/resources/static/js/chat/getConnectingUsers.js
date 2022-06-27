import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

function getConnectingUsers(userId) {

    let userArray = [];
    let userCategoriesArray = [];
    let currentUserCategories = [];
    let connUserArray = [];

    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'codeup',
        database: 'vetted_db'
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });


    let selectUsers = "SELECT * FROM `users`";

    connection.query(
        selectUsers, function (err, result) {
            if (err) {
                console.log("db fetch error, error");
                throw err;
            }
            else {
                // console.log(result);

                result.forEach(element => {
                    userArray.push(element);
                    // console.log(element);
                });
                // console.log(userArray);

                let selectCategories = "SELECT * FROM `user_category`";

                connection.query(
                    selectCategories, function (err, result) {
                        if (err) {
                            console.log("db fetch error, error");
                            throw err;
                        }
                        else {
                            // console.log(result);

                            result.forEach(element => {
                                userCategoriesArray.push(element);
                                // console.log(element);
                            });
                            // console.log(userArray);
                            // console.log(userCategoriesArray);

                            for (let i = 0; i < userCategoriesArray.length; i++) {
                                if (userCategoriesArray[i]['user_id'] === userId) {
                                    currentUserCategories.push(userCategoriesArray[i]['category_id'])
                                }
                            }

                            // console.log(currentUserCategories);

                                for (let x = 0; x < userCategoriesArray.length; x++) {
                                    if (userCategoriesArray[x]['user_id'] !== userId && currentUserCategories.includes(userCategoriesArray[x]['category_id'])) {
                                        connUserArray.push(userArray[(userCategoriesArray[x]['user_id']) - 1]);
                                    }
                                }
                                connUserArray = [...new Set(connUserArray)];
                                console.log(connUserArray);
                        }
                    });
            }
        });
}

getConnectingUsers(2);
