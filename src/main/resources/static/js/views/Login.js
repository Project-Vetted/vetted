export default function Login(props) {

    //language=HTML
    return `
<!--        <!DOCTYPE html>-->
<!--        <html>-->
<!--        <head>-->
<!--            <meta charset="UTF-8"/>-->
<!--            <title>Log In</title>-->
<!--        </head>-->
<!--        <body>-->

<!--        <div style="margin-top: 80px">-->
<!--            <h1>Log In</h1>-->
<!--        </div>-->

<!--        <form id="login-form">-->
<!--            <div style="margin-top: 80px">-->
<!--                <label for="username">Email</label>-->
<!--                <input id="username" name="username" type="text"/>-->
<!--                <label for="password">Password</label>-->
<!--                <input id="password" name="password" type="password"/>-->
<!--                <input id="login-btn" type="submit" value="Log In"/>-->
<!--            </div>-->
<!--        </form>-->
<!--        </body>-->
<!--        </html>-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vetted - Login</title>
    <!--    Font awesome-->
    <script src="https://kit.fontawesome.com/ca8971332a.js" crossorigin="anonymous"></script>
    <!--    Stylesheet-->
    <link rel="stylesheet" href="assets/css/login.css">

</head>
<body>
<div class="container">
    <div class="login-screen">
        <div class="screen-content">
            <form class="login" id="login-form">
                <div class="login-field">
                    <i class="login-icon fas fa-user"></i>
                    <input type="text" class="login-input" id="email" placeholder="Enter your e-mail">
                </div>
                <div class="login-field">
                    <i class="login-icon fas fa-lock"></i>
                    <input type="password" class="login-input" id="password" placeholder="Enter password">
                </div>
                <br>
                <button class="login-submit" id="login-btn">
                    <span class="button-text">Access Vetted    </span>
                    <i class="button__icon fas fa-chevron-right"></i>
                    <i class="button__icon fas fa-chevron-right"></i>
                    <i class="button__icon fas fa-chevron-right"></i>

                </button>
            </form>
        </div>
        <div class="login-background">
            <span class="screen-background-shapes background-shape4"></span>
            <span class="screen-background-shapes background-shape3"></span>
            <span class="screen-background-shapes background-shape2"></span>
            <span class="screen-background-shapes background-shape1"></span>
        </div>
    </div>
</div>
</body>
</html>
    `;

}


