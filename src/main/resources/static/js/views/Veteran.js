export default function Veteran() {

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
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../imgs/registration_background.png");
            background-position: center;
            background-size: cover;
        }

        .container {
            width: 400px;
            height: 600px;
            margin: 8% auto;
            background: #FFFFFF;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
            box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15),
            inset -5px -5px 15px rgba(255, 255, 255, 0.15),
            5px 5px 15px rgba(0, 0, 0, 0.15),
            -5px -5px 15px rgba(255, 255, 255, 0.15);
        }

        .container-test {
            width: 400px;
            height: 600px;
            margin: 8% auto;
            background: #FFFFFF;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
            box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15),
            inset -5px -5px 15px rgba(255, 255, 255, 0.15),
            5px 5px 15px rgba(0, 0, 0, 0.15),
            -5px -5px 15px rgba(255, 255, 255, 0.15);
        }

        h3 {
            text-align: center;
            margin-bottom: 40px;
            color: #777;
        }

        .container form {
            width: 280px;
            position: absolute;
            top: 100px;
            left: 40px;
            cursor: crosshair;
            transition: 0.5s;
        }

            /*.container-test form {*/
            /*    width: 280px;*/
            /*    position: absolute;*/
            /*    top: 100px;*/
            /*    left: 40px;*/
            /*    cursor: crosshair;*/
            /*    transition: 0.5s;*/
            /*}*/

        form input {
            width: 100%;
            padding: 10px 5px;
            margin: 5px 0;
            border: 0;
            border-bottom: 1px solid #991;
            outline: none;
            background: transparent;
        }

        ::placeholder {
            color: #777;
        }

        .btn-box {
            width: 100%;
            height: 30px auto;
            text-align: center;
        }

        form button {
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

        #form2 {
            display: none;
        }

        #form3 {
            display: none;
        }

        .step-row {
            width: 400px;
            height: 40px;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            box-shadow: 0 -1px 5px -1px #000;
        }

        .step-col {
            width: 120px;
            text-align: center;
            color: #350259;
            position: relative;
        }

        #progress {
            position: absolute;
            height: 100%;
            width: 120px;
            background: linear-gradient(to right, #C0B2FF, #350259);
            transition: 1s;
        }

        #progress::after {
            content: '';
            height: 0;
            width: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            position: absolute;
            right: -20px;
            top: 0;
            border-left: 20px solid #350259;
        }

        /*Verification Loader*/
        .loader {
            position: relative;
            margin: auto;
            box-sizing: border-box;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid rgba(255, 255, 255, 0.1);
            transform-origin: 50% 50%;
            transform: perspective(200px) rotateX(66deg);
            animation: spinner-wiggle 1.2s infinite;
        }

        .loader:before,
        .loader:after {
            content: "";
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            box-sizing: border-box;
            border: 4px solid #0000;
            animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
            spinner-fade 1.2s linear infinite;
        }

        .loader:before {
            border-top-color: #350259;
        }

        .loader:after {
            border-top-color: #4C489D;
            animation-delay: 0.4s;
        }

        @keyframes spinner-spin {
            100% {
                transform: rotate(360deg)
            }
        }

        @keyframes spinner-fade {
            25%, 75% {
                opacity: 0.1
            }
            50% {
                opacity: 1
            }
        }


        /*Community checkboxes*/
        body,
        html {
            margin: 0;
            padding: 0;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: linear-gradient(90deg, #5D54A4, #7C78B8);
            /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #C7C5F4, #776BCC);
            /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #C7C5F4, #776BCC);
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        .community-container {
            max-width: 640px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 13px;
        }

        ul.ks-cboxtags {
            list-style: none;
            padding: 20px;
        }

        ul.ks-cboxtags li {
            display: inline;
        }

        ul.ks-cboxtags li label {
            display: inline-block;
            background-color: rgba(255, 255, 255, .9);
            border: 2px solid rgba(139, 139, 139, .3);
            color: #adadad;
            border-radius: 25px;
            white-space: nowrap;
            margin: 3px 0px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            transition: all .2s;
        }

        ul.ks-cboxtags li label {
            padding: 8px 12px;
            cursor: pointer;
        }

        ul.ks-cboxtags li label::before {
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            font-size: 12px;
            padding: 2px 6px 2px 2px;
            content: "\\f067";
            transition: transform .3s ease-in-out;
        }

        ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
            content: "\\f00c";
            transform: rotate(-360deg);
            transition: transform .3s ease-in-out;
        }

        ul.ks-cboxtags li input[type="checkbox"]:checked + label {
            border: 2px solid #350259;
            background-color: #C0B2FF;
            color: #350259;
            transition: all .2s;
        }

        ul.ks-cboxtags li input[type="checkbox"] {
            display: absolute;
        }

        ul.ks-cboxtags li input[type="checkbox"] {
            position: absolute;
            opacity: 0;
        }

        ul.ks-cboxtags li input[type="checkbox"]:focus + label {
            border: 2px solid #5C5696;
        }
        </style>
        
        <div class="container-test">

            <div class="step-row">
                <div id="progress"></div>
                <div class="step-col"><small>Step 1</small></div>
                <div class="step-col"><small>Step 2</small></div>
                <div class="step-col"><small>Step 3</small></div>
            </div>
            
            <form id="form1">
                <h3>Create Account</h3>
                <input type="text" id="propF" placeholder="First Name" required>
                <input type="text" id="propL" placeholder="Last Name" required>
                <input type="text" id="propB" placeholder="DOB (format YYYY-MM-DD)" required>
                <input type="password" id="propS" placeholder="SSN (format ###-##-####)" required>
                <input type="text" placeholder="Email" required>

                <br>
                <br>
                <br>
                <br>
                <div class="btn-box">
                    <button type="button" id="next1" class="submit btn-primary">Next>>></button>
                </div>
            </form>
            <!--Form page 2-->
            <form id="form2">
                <span class="loader"></span>
                <h3>Veteran Status - You are approved!</h3>

                <br>
                <input type="username" placeholder="Enter your desired username">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Confirm Password">
                <br>
                <br>
                <br>
                <br>
                <div class="btn-box">
                    <button type="button" id="back1" class="submit btn-primary"><<< Back</button>
                    <button type="button" id="next2" class="submit btn-primary">Next>>></button>
                </div>
            </form>
            <!--Form page 3-->
            <form id="form3">
                <h3>Verification Status - Approved</h3>
                <h5>You have been vetted and approved! Please select your desired communities:</h5>
                <div class="community-container">
                    <ul class="ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash"><label
                                for="checkboxOne">PTSD</label></li>
                        <li><input type="checkbox" id="checkboxTwo" value="Cotton Candy" checked><label
                                for="checkboxTwo">Anxiety</label></li>
                        <li><input type="checkbox" id="checkboxThree" value="Rarity" checked><label for="checkboxThree">Depression</label>
                        </li>
                        <li><input type="checkbox" id="checkboxFour" value="Moondancer"><label for="checkboxFour">Alcohol
                            Abuse</label></li>
                        <li><input type="checkbox" id="checkboxFive" value="Surprise"><label for="checkboxFive">Addiction</label>
                        </li>
                    </ul>
                </div>
                <h5>By click submit, you are agreeing to Vetted <a href="https://benice.com/">community guidelines.</a>
                </h5>
                <br>
                <div class="btn-box">
                    <button type="button" id="back2" class="submit btn-primary"><<< Back</button>
                    <button type="button" class="submit btn-primary">Submit>>></button>
                </div>
            </form>
        </div>
    `;
}

export function VeteranRegistrationEvent() {
    let form1 = document.getElementById("form1");
    let form2 = document.getElementById("form2");
    let form3 = document.getElementById("form3");

    let progress = document.getElementById("progress");


    $(document).on('click', '#next1', function () {
        function VerifyEvent() {
                const reqBody = {
                    "ssn": $('#propS').val(),
                    "first_name": $('#propF').val(),
                    "last_name": $('#propL').val(),
                    "birth_date": $('#propB').val()
                }

                const options = {
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": `${VA_KEY}`
                    },
                    method: 'POST',
                    body: JSON.stringify(reqBody)
                }

                fetch("https://sandbox-api.va.gov/services/veteran_confirmation/v0/status", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
            }

        VerifyEvent();
        form1.style.display = "none";
        form2.style.display = "block";
        progress.style.width = "240px";
    })

    $(document).on('click', '#back1', function () {
        form1.style.display = "block";
        form2.style.display = "none";
        progress.style.width = "120px";
    })

    $(document).on('click', '#next2', function () {
        form2.style.display = "none";
        form3.style.display = "block";
        progress.style.width = "360px";
    })

    $(document).on('click', '#back2', function () {
        form1.style.display = "none";
        form2.style.display = "block";
        progress.style.width = "240px";
    })
}

