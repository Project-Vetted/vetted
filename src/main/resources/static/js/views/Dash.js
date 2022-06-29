import {getHeaders} from "../auth.js";
import {BASE_URL} from "../baseUrl.js";
import createView from "../createView.js";

export default function Dash(props) {

    localStorage.setItem("user_id", props.user.id.toString())
    localStorage.setItem("user_role", props.user.role.toString())
    //language=HTML
    return `
        <style>
            /* Fonts */
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Rock+Salt&display=swap');
            /**********************/
            /* Custom properties */
            /**********************/

            :root {
                --light-color: #fff;
                --dark-color: #171721;
                --dark-color-lighter: #7E8299;
                --accent-color: #AFAAFE;
                --body-background-color: #202028;
                --border-bottom-color: rgba(255, 255, 255, .05);
                --transparent-button-color: rgba(255, 255, 255, .1);
                --font-size-small: 1.4rem;
                --font-size-normal: 1.6rem;
                --font-size-medium: 2rem;
                --font-size-large: 2.4rem;
                --font-family: 'Poppins', sans-serif;
                --margin-small: 1rem;
                --margin-medium: 1.5rem;
                --gap-small: 1rem;
                --gap-medium: 2.5rem;
            }

            .theme-light {
                --light-color: #350259;
                --dark-color: #fff;
                --dark-color-lighter: #7E8299;
                --body-background-color: #eef0f8;
                --border-bottom-color: rgba(23, 23, 23, .05);
                --transparent-button-color: var(--accent-color);
            }

            /**********************/
            /* Base styles */
            /**********************/

            *,
            *::before,
            *::after {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html {
                font-size: 62.5%;
            }

            body {
                font-family: var(--font-family);
                font-size: var(--font-size-normal);
                color: var(--light-color);
                line-height: 1.5;
                background-color: var(--body-background-color);
            }

            ul {
                list-style: none;
                color: inherit;
            }

            img {
                max-width: 100%;
                display: block;
            }

            button {
                font: inherit;
                color: #9F9BE7;
                background: transparent;
                border: none;
                border-radius: 0.4rem;
                cursor: pointer;
            }

            i {
                font-size: var(--font-size-large);
                line-height: 0;
            }

            /**********************/
            /* Reusable classes */
            /**********************/

            .container {
                max-width: 134rem;
                margin: 0 auto;
                padding: 0 1.5rem;
            }

            .place-items-center {
                display: inline-flex !important;
                align-items: center;
                justify-content: center;
            }

            .d-grid {
                display: grid;
            }

            /**********************/
            /* Floating background image */
            /**********************/

            .floating-background-image {
                width: 100%;
                height: 45rem;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }

            .floating-background-image img {
                width: 100%;
                object-fit: cover;
                height: 100%;
            }

            /**********************/
            /* Header */
            /**********************/

            .header {
                background-color: var(--dark-color);
            }

            .nav {
                height: 6rem;
                display: flex;
                align-items: center;
            }

            .logo {
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                font-size: var(--font-size-medium);
            }

            .align-right {
                margin-left: auto;
                background-color: var(--accent-color);
                border-radius: 0.4rem;
            }

            .icon-btn {
                width: 3.5rem;
                height: 3.5rem;
            }

            .theme-dark-icon {
                display: none;
            }

            .nav-mobile {
                width: 100%;
                height: 100vh;
                background-color: var(--light-color);
                position: fixed;
                top: 0;
                left: 0;
                padding: 2.5rem;
                transform: translateX(-105%);
                z-index: 999;
                transition: transform 0.5s;
            }

            .list {
                display: flex;
                flex-direction: column;
                gap: var(--gap-small);
            }

            .list-link {
                display: inline-block;
                padding: 1rem 1.5rem;
                font-size: var(--font-size-small);
                color: var(--dark-color-lighter);
            }

            .current {
                color: var(--dark-color);
            }

            .menu-toggle-close {
                background-color: var(--body-background-color);
                position: absolute;
                top: 2.5rem;
                right: 2.5rem;
            }

            .dropdown-menu {
                background-color: #D1BAFF;
                gap: 0;
                margin-left: 1.5rem;
                transform: translateY(-3px);
                height: 0;
                opacity: 0;
                transition: transform 0.5s;
                pointer-events: none;
            }

            .dropdown > .list-link i {
                transition: transform 0.25s;
            }

            /**********************/
            /* JavaScript styles */
            /**********************/

            .nav-mobile.active {
                transform: translateX(0);
            }

            .theme-light .theme-dark-icon {
                display: block;
            }

            .theme-light .theme-light-icon {
                display: none;
            }

            .dropdown.active > .list-link i {
                transform: rotate(90deg);
            }

            .dropdown.active .dropdown-menu {
                height: initial;
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }

            /**********************/
            /* Welcome message */
            /**********************/

            .card {
                background-color: var(--dark-color);
                padding: 2.5rem;
                border-radius: 0.4rem;
                box-shadow: 0.5rem 0.5rem 1rem rgba(82, 63, 105, 0.05);
            }

            .title {
                font-size: var(--font-size-normal);
                margin-bottom: var(--margin-small);
            }

            .independent-title {
                font-size: var(--font-size-medium);
                color: var(--light-color);
                padding: 2.5rem 0 1.25rem;
            }

            .main-title {
                font-size: medium;
            }

            .card-header {
                padding-block: 1rem;
                margin-bottom: var(--margin-medium);
                border-bottom: 1px solid var(--border-bottom-color);
            }

            .card-header .title {
                margin-bottom: 0;
                font-size: 20px;
            }

            .card-image {
                padding: 2.5rem;
            }

            .card-description {
                font-size: var(--font-size-small);
                margin-bottom: var(--margin-small);
            }

            /**********************/
            /* Management area */
            /**********************/
            .management-area {
                padding-block: 2.5rem;
            }

            .management-area-container, .card-group {
                gap: var(--gap-medium);
            }

            .management-area .card-header {
                border-bottom: none;
            }

            .card-body-link {
                font-size: medium;
                background-color: none;
                margin-bottom: var(--margin-medium);
                padding: 1.5rem;
                border-radius: 0.4rem;
                display: flex;
                align-items: center;
                gap: var(--gap-small);
                text-decoration: none;
            }

            .card-body-link i {
                font-size: 18px;
                color: #9F9BE7;
                text-decoration: none;
            }

            .card-body-link a::before {
                text-decoration: none;
            }

            .card-body-link span {
                font-size: 16px;
                color: var(--accent-color);
            }

            .card-group .card {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                min-height: 17.5rem;
                border-radius: 0.4rem;
            }

            .card-group .card::after {
                content: '';
                position: absolute;
                width: 10rem;
                height: 10rem;
                top: -2px;
                right: -2px;
                z-index: -1;
                border-radius: inherit;
            }

            .border-green::after {
                background-image: linear-gradient(235deg, #D1BAFF, transparent, var(--dark-color));
            }

            .border-yellow::after {
                background-image: linear-gradient(235deg, var(--accent-color), transparent, var(--dark-color));
            }

            .border-orange::after {
                background-image: linear-gradient(235deg, #5C5696, transparent, var(--dark-color));
            }

            .border-pink::after {
                background-image: linear-gradient(235deg, #4C489D, transparent, var(--dark-color));
            }

            .card-group .card-description {
                margin-bottom: var(--margin-medium);
            }

            .card-group .list-link {
                background-color: var(--transparent-button-color);
                color: var(--light-color);
            }

            /**********************/
            /* Scrollbar */
            /**********************/
            ::-webkit-scrollbar {
                width: 1rem;
            }

            ::-webkit-scrollbar-track {
                background-color: #320259;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #D1BAFF;
            }

            ::-webkit-scrollbar-thumb:hover {
                background-color: #5C5696;
            }

            /**********************/
            /* Media queries */
            /**********************/

            @media screen and (min-width: 768px) {
                .nav {
                    height: 7rem;
                }

                .independent-title {
                    font-size: var(--font-size-large);
                    padding: 4rem 0 2rem;
                }

                .card-body {
                    grid-template-columns: repeat(2, 1fr);
                    align-items: center;
                    gap: var(--gap-medium);
                    padding-block: 2.5rem;
                }

                .card-image {
                    padding: 0;
                }

                .card-image img {
                    max-width: 80%;
                    margin: auto;
                }

                .management-area-container {
                    grid-template-columns: 35rem 1fr;
                }
            }

            @media screen and (min-width: 1024px) {
                .menu-toggle-btn {
                    display: none !important;
                }

                .nav-mobile {
                    width: initial;
                    height: initial;
                    background-color: initial;
                    position: initial;
                    padding: initial;
                    transform: initial;
                    transition: initial;
                }

                .nav-mobile > .list {
                    flex-direction: row;
                    margin-left: 4rem;
                }

                .list-link, .card-body-link {
                    transition: color 0.25s, background-color 0.25s;
                }

                .nav-mobile .list-link {
                    border-radius: 0.4rem;
                }

                .current .nav-mobile .list-link:hover,
                .nav-mobile .list-link:focus {
                    background-color: var(--accent-color);
                    color: var(--light-color);
                }

                .dropdown {
                    position: relative;
                }

                .dropdown-menu {
                    width: 25rem;
                    height: initial;
                    background-color: var(--light-color);
                    padding: 1.5rem;
                    margin-left: 0;
                    border-radius: 0.4rem;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    transform: translateY(0.8rem);
                    box-shadow: 0 0 3rem rgba(23, 23, 23, 0.2);
                    transition: transform 0.25s, opacity 0.25s;
                }

                .dropdown.active .dropdown-menu {
                    transform: translateY(1.5rem);
                }

                .dropdown-menu .list-link {
                    display: block;
                }

                .card-body-link:hover {
                    background-color: #D1BAFF;
                }

                .card-group {
                    grid-template-columns: repeat(2, 1fr);
                }

                .border-green {
                    grid-column: 1/-1;
                }

                .border-yellow, .border-orange {
                    grid-column: 1/2;
                }

                .border-pink {
                    grid-column: 2/-1;
                    grid-row: 2/4;
                }

                .card-group .list-link:hover {
                    background-color: var(--light-color);
                    color: var(--dark-color);
                }

            }

        </style>
        <!-- Floating-background-image -->
        <div class="floating-background-image">
            <img src="./assets/imgs/pexels-veeterzy-114979.jpeg">
        </div>
        <!-- Header -->
        <header class="header">
            <nav class="nav container">
                <a href="/" class="logo">Vetted</a>
                <div class="nav-mobile">
                    <ul class="list">
                        <li class="list-item">
                            <a href="#" class="list-link" onclick="window.location.href='/';">Home</a>
                        </li>
                        <li class="list-item">
                            <a href="#" class="list-link" id="chat-feature-btn">Chat</a>
                        </li>
                        <li class="list-item">
                            <a href="#" class="list-link">Rating</a>
                        </li>
                        <li class="list-item dropdown">
                            <button class="list-link dropdown-btn place-items-center">User Settings <i
                                    class="ri-arrow-drop-right-line"></i></button>
                            <ul class="list dropdown-menu">
                                <li class="list-item">
                                    <a href="#" class="list-link" onclick="window.location.href='/settings';">Profile
                                        Settings</a>
                                </li>
                                <li class="list-item">
                                    <a href="#" class="list-link">Friends List</a>
                                </li>
                                <li class="list-item">
                                    <a href="https://benice.com/" class="list-link">Community Guidelines</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button class="icon-btn menu-toggle-btn menu-toggle-close place-items-center">
                        <i class="ri-close-line"></i>
                    </button>
                </div>

                <div class="align-right">
                    <button class="icon-btn menu-toggle-btn menu-toggle-open place-items-center">
                        <i class="ri-function-line"></i>
                    </button>
                    <button class="icon-btn theme-toggle-btn place-items-center">
                        <i class="ri-sun-line theme-light-icon"></i>
                        <i class="ri-moon-line theme-dark-icon"></i>

                    </button>
                    <button class="icon-btn place-items-center">
                        <i class="ri-user-3-line"></i>
                    </button>
                </div>
            </nav>
        </header>
        <!-- Welcome-message -->
        <section class="welcome-message">
            <div class="container">
                <h2 class="title independent-title">User Dashboard</h2>
                <div class="card">
                    <header class="card-header">
                        <small>Getting started</small>
                        <h2 class="title">Welcome Back, ${props.user.username} / ${props.user.points} points</h2>
                    </header>
                    <div class="card-body d-grid">
                        <div class="card-image">
                            <img src="./assets/imgs/vetted_banner.png" alt="">
                        </div>
                        <div class="card-information">
                            <h1 class="title main-title">
                                Post Traumatic Stress Disorder (PTSD)
                            </h1>
                            <p class="card-description">
                                Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a
                                terrifying event — either experiencing it or witnessing it. Symptoms may include
                                flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the
                                event.
                                Most people who go through traumatic events may have temporary difficulty adjusting and
                                coping, but with time and good self-care, they usually get better. If the symptoms get
                                worse, last for months or even years, and interfere with your day-to-day functioning,
                                you may have PTSD.
                                Getting effective treatment after PTSD symptoms develop can be critical to reduce
                                symptoms and improve function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Management-area -->
        <section class="management-area">
            <div class="management-area-container container d-grid">
                <div class="card">
                    <header class="card-header">
                        <h2 class="title">Quick Actions</h2>
                        <!--                        <small>Access frequently visited places quicker</small>-->
                    </header>
                    <div class="card-body">

                        <a href="#" class="card-body-link">
                            <i class="ri-shield-line" onclick="window.location.href='/settings';">Account Settings</i>
                        </a>
                        <a href="#" class="card-body-link">
                            <i class="ri-team-line">Manage Friends List</i>
                        </a>
                        <a href="#" class="card-body-link">
                            <i class="ri-user-star-fill">User Rating</i>
                        </a>
                        <a href="#" class="card-body-link">
                            <i class="ri-user-voice-fill"></i>
                            <span class="link-name" id="chat-feature-btn">Manage Chat</span>
                        </a>
                        <!--                        onclick="window.location.href='/chat'-->
                        <!--user activity options-->
                        <div class="activity">
                            <h2 class="card-header">Category Selection</h2>
                            <div>
                                <button type="button" class="card-body-link cat-btn" id="ptsd-btn" value="PTSD">PTSD
                                </button>
                                <button type="button" class="card-body-link cat-btn" id="depression-btn"
                                        value="Depression">Depression
                                </button>
                                <button type="button" class="card-body-link cat-btn" id="anxiety-btn" value="Anxiety">
                                    Anxiety
                                </button>
                                <button type="button" class="card-body-link cat-btn" id="alcohol-btn"
                                        value="Alcohol Abuse">Alcohol Abuse
                                </button>
                                <button type="button" class="card-body-link cat-btn" id="sex-btn" value="Sex Addiction">
                                    Sex Addiction
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="card-group d-grid">
                    <div class="card border-green">
                        <div>
                            <h1 class="title">Protecting Veterans' Access to Mental Health Care</h1>
                            <h5 class="card-description">
                                By: National Alliance on Mental Illness (NAMI) <br>

                                "Veterans health care is a public trust and a national responsibility. Ensuring
                                America’s veterans have timely access to high-quality mental health care is imperative
                                to reduce the high rate of suicide among veterans and to provide quality of life after
                                service. Congress should keep what works and make it better by acting to preserve and
                                improve the VA health care system and the Veterans Choice Program."
                            </h5>
                        </div>
                        <a href="https://www.nami.org/Advocacy/Policy-Priorities/Improving-Health/Protecting-Veterans-Access-to-Mental-Health-Care>"
                        <button class="list-link">Learn More</button>
                        </a>
                    </div>
                    <div class="card border-yellow">
                        <div>
                            <h1 class="title">Leverage Your Community</h1>
                            <img src="../../assets/imgs/community_dash_pic.jpeg" height="150px" width="100px"
                                 align="left"/>
                            <br>
                            <h4 class="card-description">
                                "Leverage is a particular type of treatment pressure that is used within community
                                mental health services to increase patients' adherence to treatment. Because leverage
                                involves practitioners making proposals that attempt to influence patients' behaviours
                                and choices, the use of leverage raises ethical issues. Particular attention must be
                                paid to determine how the requirements of the four duties should be applied in each
                                specific treatment scenario, and in making careful judgements when these duties pull in
                                opposing directions."
                            </h4>
                        </div>
                        <br>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/24496210/">
                        <button class="list-link">Learn More</button>
                        </a>
                    </div>
                    <div class="card border-orange">
                        <div>
                            <h1 class="title">Understanding the General Rating Formula for Mental Health Conditions</h1>
                        </div>
                        <a href="https://www.hillandponton.com/part4-rating-ptsd/"
                        <button class="list-link">Learn More</button>
                        </a>
                    </div>
                    <div class="card border-pink">
                        <div>
                            <h1 class="title">State of Mental Health</h1>
                            <img src="../../assets/imgs/protecting_vet_pic.jpeg" height="150px" width="150px"
                                 align="right"/>
                            <h4>"For the 8th year in a row, Mental Health America (MHA) released its annual State of
                                Mental Health in America Report, which ranks all 50 states and the District of Columbia
                                based on fifteen mental health prevalence and access measures for youth and adults. This
                                year, Massachusetts moved to the No. 1 spot, from No. 3 in last year’s report, and
                                Nevada remained last at No. 51 for the sixth year in a row.

                                The 2022 State of Mental Health in America report confirms the trend that mental health
                                in the U.S. continued to get worse leading into the COVID-19 pandemic. This report also
                                contains two spotlights on policies that can improve access to mental health resources
                                in the U.S. – 988 implementation and increasing mental health education and supports in
                                schools."</h4>
                        </div>
                        <a href="https://mhanational.org/research-reports/2022-state-mental-health-america-report">
                            <button class="list-link">Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
}

export function DashEvents() {
    CategoryButtonEvent();
    InteractDashEvent();
    ChatButtonEventRoleChecker();
}

function ChatButtonEventRoleChecker() {
    $(document).on('click', '#chat-feature-btn', function (e) {
        const userRole = localStorage.getItem("user_role")
        if (userRole === 'USER' || userRole === 'VISITOR') {
            createView("/dashboard")
            alert("You must be a verified veteran to use this feature. Please contact customer support for more information :)")
        } else if (userRole === 'VET') {
            createView("/chat");
        }

    })
}

function CategoryButtonEvent() {
    $(document).on('click', '.cat-btn', function (e) {
            console.log(e)
            const userId = localStorage.getItem("user_id")
            if (!userId) {
                return
            }
            const reqBody = [
                $(this).val()
            ]


            return fetch(`${BASE_URL}/${userId}/updateCategories`, {
                method: 'PATCH',
                body: JSON.stringify(
                    reqBody
                ),
                headers: getHeaders(),
            })
                .catch(err => console.log(err))
        }
    )
}

function InteractDashEvent() {

//Toggle mobile menu
    const menuToggleOpen = document.querySelector('.menu-toggle-open');
    const menuToggleClose = document.querySelector('.menu-toggle-close');
    const navMobileEl = document.querySelector('.nav-mobile');


    menuToggleOpen.addEventListener('click', () => navMobileEl.classList.add('active'));
    menuToggleClose.addEventListener('click', () => navMobileEl.classList.remove('active'));

//Toggle theme
    const bodyEl = document.body;
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const currentTheme = localStorage.getItem('currentTheme');


    if (currentTheme) {
        bodyEl.classList.add('theme-light');
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyEl.classList.toggle('theme-light');
        if (bodyEl.classList.contains('theme-light')) {
            localStorage.setItem('currentTheme', 'themeActive');
        } else {
            localStorage.removeItem('currentTheme', 'themeActive');
        }
    });

//Show dropdown menu
    document.addEventListener('click', element => {
        const dropdown = document.querySelector('.dropdown');

        if (element.target.classList.contains('dropdown-btn')) {
            dropdown.classList.add('active');
        } else {
            dropdown.classList.remove('active');
        }
    });
}

// export function LikesEvent() {
//     $(document).on('click', '#give-like', function (e) {
//             imTheUpVotee();
//             console.log(e)
//             const upVotee = 1;
//             const upVoter = localStorage.getItem("user_id")
//             if (!upVoter) {
//                 return
//             }
//             return fetch(`http://localhost:8080/api/users/${upVotee}/${upVoter}/upvote`, {
//                 method: 'Get',
//                 headers: getHeaders(),
//             })
//                 .catch(err => console.log(err))
//         }
//     )
//
//
// }

// function imTheUpVotee() {
//     $(document).on('click', '#give-like', function () {
//         $('#give-like').addClass('1');
//     })
// }


