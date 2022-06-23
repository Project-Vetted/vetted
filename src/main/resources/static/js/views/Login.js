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

<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--    <meta charset="UTF-8">-->
<!--    <title>Vetted - Login</title>-->
<!--    &lt;!&ndash;    Font awesome&ndash;&gt;-->
<!--    <script src="https://kit.fontawesome.com/ca8971332a.js" crossorigin="anonymous"></script>-->
<!--    &lt;!&ndash;    Stylesheet&ndash;&gt;-->
<!--    <link rel="stylesheet" href="assets/css/login.css">-->

<!--</head>-->
<!--<body>-->
<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: linear-gradient(90deg, #C7C5F4, #776BCC);
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .login-screen {
        height: 600px;
        width: 360px;
        position: relative;
        background: linear-gradient(90deg, #5D54A4, #7C78B8);
        box-shadow: 0px 0px 24px #5C5696;
        cursor: crosshair;
    }

    .screen-content {
        position: relative;
        height: 100%;
        z-index: 1;
    }

    .login-background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);
    }

    .screen-background-shapes {
        position: absolute;
        transform: rotate(45deg);
    }

    .background-shape1 {
        height: 520px;
        width: 520px;
        background: #FFF;
        top: -50px;
        right: 120px;
        border-radius: 0 72px 0 0;
    }

    .background-shape2 {
        height: 220px;
        width: 220px;
        background: #6C63AC;
        top: -172px;
        right: 0;
        border-radius: 32px;
    }

    .background-shape3 {
        height: 540px;
        width: 190px;
        background: linear-gradient(270deg, #5D54A4, #6A679E);
        top: -24px;
        right: 0;
        border-radius: 32px;
    }

    .background-shape4 {
        height: 400px;
        width: 200px;
        background: #7E7BB9;
        top: 420px;
        right: 50px;
        border-radius: 60px;
    }

    .login {
        width: 340px;
        padding: 30px;
        padding-top: 156px;
    }

    .login-field {
        position: relative;
        padding: 20px 0px;
    }

    .login-icon {
        position: absolute;
        top: 30px;
        color: #7875B5;
    }

    .login-input {
        width: 75%;
        border: none;
        border-bottom: 3px solid #350259;
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        transition: .2s;
    }

    .login-input:active,
    .login-input:focus,
    .login-input:hover {
        outline: none;
        border-bottom-color: #6A679E;
    }

    .login-submit {
        background: #fff;
        font-size: 14px;
        margin-top: 30px;
        padding: 16px 20px;
        border-radius: 26px;
        border: 1px solid #D4D3E8;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 100%;
        color: #4C489D;
        box-shadow: 0px 2px 2px #5C5696;
        cursor: pointer;
        transition: .2s;
    }

    .login-submit:active,
    .login-submit:focus,
    .login-submit:hover {
        border-color: #6A679E;
        outline: none;
    }
</style>
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

    `;

}


