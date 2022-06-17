export default function Login(props) {

    //language=HTML
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8"/>
        <title>Log In</title>
    </head>
    <body>

    <div style="margin-top: 80px">
        <h1>Log In</h1>
    </div>

    <form id="login-form">
        <div style="margin-top: 80px">
            <label for="username">Email</label>
            <input id="username" name="username" type="text"/>
            <label for="password">Password</label>
            <input id="password" name="password" type="password"/>
            <input id="login-btn" type="submit" value="Log In"/>
        </div>
    </form>
    </body>
    </html>`;

}


