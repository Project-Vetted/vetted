import createView from "../createView.js";

export default function Register() {

    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Register</title>
        </head>
        <body>

        <div style="margin-top: 80px">
            <h1>Register here!</h1>
        </div>

        <form id="register-form">
            <div style="margin-top: 80px">
                <label for="username">Username</label>
                <input id="username" name="username" type="text"/>
                <label for="email">Email</label>
                <input id="email" name="email" type="email">
                <label for="password">Password</label>
                <input id="password" name="password" type="password"/>
                <input id="register-btn" type="button" value="Register"/>
            </div>
        </form>
        </body>
        </html>
    `;
}

export function RegisterEvent() {

    $(document).on('click', '#register-btn', function (e) {
        const reqBody = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }

        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(reqBody)
        }

        //TODO: Receiving this error when registering a new user: Failed to load resource: the server responded with a status of 500 ()
        fetch("http://localhost:8080/api/users/create", options)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
}