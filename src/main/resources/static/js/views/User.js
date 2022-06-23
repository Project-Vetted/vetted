import createView from "../createView.js";

export default function UserIndex(props) {
    //language=HTML
    return `
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
                min-height: 20vh;
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
                width: 20%;
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

        <header class="container">
            <div style="margin-top: 80px">
                <h1>Welcome, ${props.user.username}</h1>
            </div>
        </header>
        <main class="">
            <form id="user-info-form" class="container">
                <div style="margin-top: 80px">
                    <label for="email">Current Email</label>
                    <input disabled id="email" name="email" type="email" value="${props.user.email}">

                    <label for="old-password">New Email</label>
                    <input id="new-email" name="old-email" type="email"
                           value="${props.user.email}"/>

                    <label for="new-password">New Password</label>
                    <input id="new-password" name="new-password" type="password"
                           value="this is not your real password"/>

                    <button id="change-email-button" data-id="${props.user.id}" type="button" class="login-submit">
                        Change Email
                    </button>

                    <button id="change-password-button" data-id="${props.user.id}" type="button" class="login-submit">
                        Change Password
                    </button>
                </div>
            </form>
        </main>
    `
}

export function UserEvent() {
    addUpdateEmailListener();
    addUpdatePasswordListener();
}

function addUpdatePasswordListener() {
    $(document).on('click', '#change-password-button', function (e) {

        e.preventDefault();

        const BASE_URL = "http://localhost:8080/api/users"
        const id = $(this).data("id");
        const newPassword = $("#new-password").val();

        const request = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BASE_URL}/${id}/updatePassword?newPassword=${newPassword}`, request)
            .then(res => console.log(res.status))
            .catch(error => console.log(error))
            .finally(() => createView("/user"))
    })
}

function addUpdateEmailListener() {
    $(document).on('click', '#change-email-button', function (e) {

        e.preventDefault();

        const BASE_URL = "http://localhost:8080/api/users"
        const id = $(this).data("id");
        const newEmail = $("#new-email").val();

        const request = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BASE_URL}/${id}/updateEmail?newEmail=${newEmail}`, request)
            .then(res => console.log(res.status))
            .catch(error => console.log(error))
            .finally(() => createView("/user"))
    })
}