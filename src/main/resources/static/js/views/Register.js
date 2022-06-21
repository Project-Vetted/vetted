export default function Register() {

    //language=HTML
    return `

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        cursor: default;
    }

    body {
        background: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("../imgs/registration_background.png");
        background-position: center;
        background-size: cover;
    }

    .container {
        width: 360px;
        height: 400px;
        margin: 8% auto;
        background: #FFFFFF;
        border-radius: 5px;
        position: relative;
    }

    h3{
        text-align: center;
        margin-bottom: 40px;
        color: #777;
    }

    .container form{
        width: 280px;
        position: absolute;
        top: 100px;
        left: 40px;
        cursor: crosshair;
    }

    form input{
        width: 100%;
        padding: 10px 5px;
        margin: 5px 0;
        border: 0;
        border-bottom: 1px solid #991;
        outline: none;
        background: transparent;
    }

    ::placeholder{
        color: #777;
    }

    .btn-box{
        width: 100%;
        height: 30px auto;
        text-align: center;
    }

    form button{
        width: 110px;
        height: 35px;
        margin: 0 10px;
        background: linear-gradient(to right, #C0B2FF, #350259);
        border-radius: 30px;
        border: 0;
        outline: none;
        color: #fff;
        cursor: pointer;
    }
</style>
<div class="container">
    <form action="">
        <h3>Create Account</h3>
        <input type="text" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <input type="password" placeholder="Type your password again" required>

        <div class="btn-box">
            <button type="submit" class="submit btn-primary">Next>>></button>
        </div>
    </form>
</div>
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

        fetch("http://localhost:8080/api/users/create", options)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
}