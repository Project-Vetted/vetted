export default function VeteranRegistration() {
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Vetted - Registration</title>
            <link rel="stylesheet" href="./assets/css/veteran-registration.css">
        </head>
        <body>
        <div class="container">
            <form id="form1">
                <h3>Create Account</h3>
                <input type="fname" placeholder="First Name" required>
                <input type="lname" placeholder="Last Name" required>
                <input type="DOB" placeholder="DOB (format YYYY-MM-DD)" required>
                <input type="SSN" placeholder="SSN (format ###-##-####)" required>
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

            <div class="step-row">
                <div id="progress"></div>
                <div class="step-col"><small>Step 1</small></div>
                <div class="step-col"><small>Step 2</small></div>
                <div class="step-col"><small>Step 3</small></div>
            </div>
        </div>
        </body>
    `;
}

export function VeteranRegistrationEvent() {
    let form1 = document.getElementById("form1");
    let form2 = document.getElementById("form2");
    let form3 = document.getElementById("form3");

    let progress = document.getElementById("progress");

    $(document).on('click', '#next1', function () {
        form1.style.display = "none";
        form2.style.display = "block";
        progress.style.width = "240px";
    })

    $(document).on('click', '#back1', function () {
        form1.style.display = "none";
        form2.style.display = "block";
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