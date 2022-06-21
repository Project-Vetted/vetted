import {getHeaders} from "../auth.js";


export default function Dash(props) {

    localStorage.setItem("user_id", props.user.id.toString())
    //language=HTML
    return `
        <style>
            git@github.com:Project-Vetted/frontend.git@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }

            :root{
                /* ===== Colors ===== */
                --primary-color: #C0B2FF;
                --panel-color: #9F9BE7;
                --text-color: #350259;
                --black-light-color: #fff;
                --border-color: #D1BAFF;
                --toggle-color: #350259;
                --box1-color: #918DD2;
                --box2-color: #918DD2;
                --box3-color: #918DD2;
                --title-icon-color: #350259;

                /* ====== Transitions ====== */
                --tran-05: all 0.5s ease;
                --tran-03: all 0.3s ease;
                --tran-03: all 0.2s ease;
            }

            body{
                min-height: 100vh;
                background-color: var(--primary-color);
            }
            body.dark{
                --primary-color: #42026F;
                --panel-color: #53197C;
                --text-color: #C0B2FF;
                --black-light-color: #C0B2FF;
                --border-color: #C0B2FF;
                --toggle-color: #C0B2FF;
                --box1-color: #350259;
                --box2-color: #3C0265;
                --box3-color: #42026F;
                --title-icon-color: #C0B2FF;
            }
            /* === Custom Scroll Bar CSS === */
            ::-webkit-scrollbar {
                width: 8px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            ::-webkit-scrollbar-thumb {
                background: var(--primary-color);
                border-radius: 12px;
                transition: all 0.3s ease;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #350259;
            }

            nav{
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 250px;
                padding: 10px 14px;
                background-color: var(--panel-color);
                border-right: 1px solid var(--border-color);
                transition: var(--tran-05);
            }
            nav.close{
                width: 73px;
            }
            nav .logo-name{
                display: flex;
                align-items: center;
            }
            nav .logo-image{
                display: flex;
                justify-content: center;
                min-width: 45px;
            }
            nav .logo-image img{
                width: 40px;
                object-fit: cover;
                border-radius: 50%;
            }

            nav .logo-name .logo_name{
                font-size: 22px;
                font-weight: 600;
                color: var(--text-color);
                margin-left: 14px;
                transition: var(--tran-05);
            }
            nav.close .logo_name{
                opacity: 0;
                pointer-events: none;
            }
            nav .menu-items{
                margin-top: 40px;
                height: calc(100% - 90px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .menu-items li{
                list-style: none;
            }
            .menu-items li a{
                display: flex;
                align-items: center;
                height: 50px;
                text-decoration: none;
                position: relative;
            }
            .nav-links li a:hover:before{
                content: "";
                position: absolute;
                left: -7px;
                height: 5px;
                width: 5px;
                border-radius: 50%;
                background-color: var(--primary-color);
            }
            body.dark li a:hover:before{
                background-color: var(--text-color);
            }
            .menu-items li a i{
                font-size: 24px;
                min-width: 45px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--black-light-color);
            }
            .menu-items li a .link-name{
                font-size: 18px;
                font-weight: 400;
                color: var(--black-light-color);
                transition: var(--tran-05);
            }
            nav.close li a .link-name{
                opacity: 0;
                pointer-events: none;
            }
            .nav-links li a:hover i,
            .nav-links li a:hover .link-name{
                color: var(--primary-color);
            }
            body.dark .nav-links li a:hover i,
            body.dark .nav-links li a:hover .link-name{
                color: var(--text-color);
            }
            .menu-items .logout-mode{
                padding-top: 10px;
                border-top: 1px solid var(--border-color);
            }
            .menu-items .mode{
                display: flex;
                align-items: center;
                white-space: nowrap;
            }
            .menu-items .mode-toggle{
                position: absolute;
                right: 14px;
                height: 50px;
                min-width: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            .mode-toggle .switch{
                position: relative;
                display: inline-block;
                height: 22px;
                width: 40px;
                border-radius: 25px;
                background-color: var(--toggle-color);
            }
            .switch:before{
                content: "";
                position: absolute;
                left: 5px;
                top: 50%;
                transform: translateY(-50%);
                height: 15px;
                width: 15px;
                background-color: var(--panel-color);
                border-radius: 50%;
                transition: var(--tran-03);
            }
            body.dark .switch:before{
                left: 20px;
            }

            .dashboard{
                position: relative;
                left: 250px;
                background-color: var(--panel-color);
                min-height: 100vh;
                width: calc(100% - 250px);
                padding: 10px 14px;
                transition: var(--tran-05);
            }
            nav.close ~ .dashboard{
                left: 73px;
                width: calc(100% - 73px);
            }
            .dashboard .top-nav{
                position: fixed;
                top: 0;
                left: 250px;
                display: flex;
                width: calc(100% - 250px);
                justify-content: space-between;
                align-items: center;
                padding: 10px 14px;
                background-color: var(--panel-color);
                transition: var(--tran-05);
                z-index: 10;
            }
            nav.close ~ .dashboard .top-nav{
                left: 73px;
                width: calc(100% - 73px);
            }
            .dashboard .top-nav .sidebar-toggle{
                font-size: 26px;
                color: var(--text-color);
                cursor: pointer;
            }
            .dashboard .top-nav .search-box{
                position: relative;
                align-items: flex-end;
                height: 40px;
                max-width: 600px;
                width: 100%;
                margin: 0 30px;
            }
            .top-nav .search-box input{
                position: absolute;
                border: 1px solid var(--border-color);
                background-color: var(--panel-color);
                padding: 0 25px 0 50px;
                border-radius: 5px;
                height: 100%;
                width: 100%;
                color: var(--text-color);
                font-size: 15px;
                font-weight: 400;
                outline: none;
            }
            .top-nav .search-box i{
                position: absolute;
                left: 15px;
                font-size: 22px;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
                color: var(--black-light-color);
            }
            .top-nav img{
                width: 40px;
                border-radius: 50%;
            }
            .dashboard .dash-content{
                padding-top: 50px;
            }
            .dash-content .title{
                display: flex;
                align-items: center;
                margin: 60px 0 30px 0;
            }
            .dash-content .title i{
                position: relative;
                height: 35px;
                width: 35px;
                background-color: var(--primary-color);
                border-radius: 6px;
                color: var(--title-icon-color);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
            }
            .dash-content .title .text{
                font-size: 24px;
                font-weight: 500;
                color: var(--text-color);
                margin-left: 10px;
            }
            .dash-content .boxes{
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            .dash-content .boxes .box{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 12px;
                width: calc(100% / 3 - 15px);
                padding: 15px 20px;
                background-color: var(--box1-color);
                transition: var(--tran-05);
            }
            .boxes .box i{
                font-size: 35px;
                color: var(--text-color);
            }
            .boxes .box .text{
                white-space: nowrap;
                font-size: 18px;
                font-weight: 500;
                color: var(--text-color);
            }
            .boxes .box .number{
                font-size: 40px;
                font-weight: 500;
                color: var(--text-color);
            }
            .boxes .box.box2{
                background-color: var(--box2-color);
            }
            .boxes .box.box3{
                background-color: var(--box3-color);
            }

            @media (max-width: 1000px) {
                nav{
                    width: 73px;
                }
                nav.close{
                    width: 250px;
                }
                nav .logo_name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav.close .logo_name{
                    opacity: 1;
                    pointer-events: auto;
                }
                nav li a .link-name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav.close li a .link-name{
                    opacity: 1;
                    pointer-events: auto;
                }
                nav ~ .dashboard{
                    left: 73px;
                    width: calc(100% - 73px);
                }
                nav.close ~ .dashboard{
                    left: 250px;
                    width: calc(100% - 250px);
                }
                nav ~ .dashboard .top-nav{
                    left: 73px;
                    width: calc(100% - 73px);
                }
                nav.close ~ .dashboard .top-nav{
                    left: 250px;
                    width: calc(100% - 250px);
                }
            }

            @media (max-width: 780px) {
                .dash-content .boxes .box{
                    width: calc(100% / 2 - 15px);
                    margin-top: 15px;
                }
            }
            @media (max-width: 560px) {
                .dash-content .boxes .box{
                    width: 100% ;
                }
            }
            @media (max-width: 400px) {
                nav{
                    width: 0px;
                }
                nav.close{
                    width: 73px;
                }
                nav .logo_name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav.close .logo_name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav li a .link-name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav.close li a .link-name{
                    opacity: 0;
                    pointer-events: none;
                }
                nav ~ .dashboard{
                    left: 0;
                    width: 100%;
                }
                nav.close ~ .dashboard{
                    left: 73px;
                    width: calc(100% - 73px);
                }
                nav ~ .dashboard .top-nav{
                    left: 0;
                    width: 100%;
                }
                nav.close ~ .dashboard .top-nav{
                    left: 0;
                    width: 100%;
                }
            }

            .blog-pic{
                height: 150px;
                width: 150px;
            }
            /*user options button*/
            .user-btn{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                text-decoration: #fff;
                padding: 20px 50px;
                font-size: 1.25rem;
                position: relative;
            }

            .chat-btn{
                background-color: #D1BAFF;
                border-radius: 50px;
                transition: transform 0.3s ease;
            }
            .chat-btn::after, chat-btn::before{
                content: "";
                position: absolute;
                opacity: 0.3;
                background: #D1BAFF;
                border-radius: inherit;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                transition: transform 0.3s ease;
            }

            .chat-btn:hover{
                transform: translate(-12px, -12px);
            }

            .chat-btn:hover::after{
                transform: translate(6px, 6px);
            }

            .chat-btn:hover::before{
                transform: translate(6px, 6px);
            }
            /*resources btn*/
            .resources-btn{
                background-color: #D1BAFF;
                border-radius: 50px;
                transition: transform 0.3s ease;
            }
            .resources-btn::after, resources-btn::before{
                content: "";
                position: absolute;
                opacity: 0.3;
                background: #D1BAFF;
                border-radius: inherit;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                transition: transform 0.3s ease;
            }

            .resources-btn:hover{
                transform: translate(-12px, -12px);
            }

            .resources-btn:hover::after{
                transform: translate(6px, 6px);
            }

            .resources-btn:hover::before{
                transform: translate(6px, 6px);
            }
            /*protocol btn*/
            .protocol-btn{
                background-color: #D1BAFF;
                border-radius: 50px;
                transition: transform 0.3s ease;
            }
            .protocol-btn::after, protocol-btn::before{
                content: "";
                position: absolute;
                opacity: 0.3;
                background: #D1BAFF;
                border-radius: inherit;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                transition: transform 0.3s ease;
            }

            .protocol-btn:hover{
                transform: translate(-12px, -12px);
            }

            .protocol-btn:hover::after{
                transform: translate(6px, 6px);
            }

            .protocol-btn:hover::before{
                transform: translate(6px, 6px);
            }

        </style>
        <nav>
            <div class="logo-name">
                <div class="logo-image">
                    <img src="../../assets/imgs/official_vetted_logo.png" alt="vetted logo">
                </div>

                <span class="logo_name">Vetted</span>
            </div>

            <div class="menu-items">
                <ul class="nav-links">
                    <li><a href="#">
                        <i class="uil uil-estate"></i>
                        <span class="link-name">Home</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-comments"></i>
                        <span class="link-name">Chat</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-files-landscapes"></i>
                        <span class="link-name">Vetted Blog</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-thumbs-up"></i>
                        <span class="link-name">Rating</span>
                    </a></li>
                </ul>
                <!--lower side navbar-->
                <ul class="logout-mode">
                    <li><a href="#">
                        <i class="uil uil-signout"></i>
                        <span class="link-name">Sign Out</span>
                    </a></li>

                    <li class="mode">
                        <a href="#">
                            <i class="uil uil-moon"></i>
                            <span class="link-name">Switch Mode</span>
                        </a>

                        <div class="mode-toggle">
                            <span class="switch"></span>
                        </div>
                    </li>
                </ul>
                <!--end of lower side navbar-->
            </div>
        </nav>

        <!--dashboard features-->
        <section class="dashboard">
            <div class="top-nav">
                <i class="uil uil-bars sidebar-toggle"></i>

                <div class="search-box">
                    <i class="uil uil-search"></i>
                    <input type="text" placeholder="Type your search here">
                </div>

                <img src="../../assets/imgs/vetted_profile.png" alt="profile picture for user">
            </div>
            <!--vetted dashboard-->
            <div class="dash-content">
                <div class="overview">
                    <div class="title">
                        <i class="uil uil-tachometer-fast-alt"></i>
                        <span class="text">Vetted Dashboard</span>
                    </div>

                    <!--user info blog posts-->
                    <div class="boxes">
                        <div class="box box1">
                            <i class="blog-pic" id="blog-pic1"></i>
                            <span class="text">Mental Health & COVID-19</span>
                            <span class="text">Information and mental health resources.</span>
                            <a href="https://mhanational.org/covid19" class="btn">More...</a>
                        </div>
                        <div class="box box2">
                            <i class="blog-pic" id="blog-pic2"></i>
                            <span class="text">State of Mental Health in America</span>
                            <span class="text">Check out our 2022 mental health ranking.</span>
                            <a href="https://mhanational.org/issues/state-mental-health-america" class="btn">More...</a>

                        </div>
                        <div class="box box3">
                            <i class="blog-pic" id="blog-pic3"></i>
                            <span class="text">Action Alerts</span>
                            <span class="text">Take action on key mental health issues.</span>
                            <a href="https://mhanational.org/issues/action-alerts" class="btn">More...</a>
                        </div>
                    </div>
                </div>

                <!--user activity options-->
                <div class="activity">
                    <div class="title">
                        <i class="uil uil-clock-three"></i>
                        <span class="text">User Options</span>
                    </div>
                    <div class="user-btn" id="user-btn">
                        <a href="#" class="chat-btn">Chat</a>
                        <a href="#" class="resources-btn">Resources</a>
                        <a href="#" class="protocol-btn">Protocol</a>
                    </div>
                </div>

                <!--user activity options-->
                <div class="activity">
                    <h3>Category Selection</h3>
                    <div>
                        <button type="button" class="cat-btn" id="ptsd-btn" value="PTSD">PTSD</button>
                        <button type="button" class="cat-btn" id="depression-btn" value="Depression">Depression</button>
                        <button type="button" class="cat-btn" id="anxiety-btn" value="Anxiety">Anxiety</button>
                        <button type="button" class="cat-btn" id="alcohol-btn" value="Alcohol Abuse">Alcohol Abuse
                        </button>
                        <button type="button" class="cat-btn" id="sex-btn" value="Sex Addiction">Sex Addiction</button>
                    </div>
                </div>
                <hr>
<!--                <div class="likes">-->
<!--                    <h3>Give this person a like</h3>-->
<!--                    <div>-->
<!--                        <button type="button" id="give-like" value="like">Give Like</button>-->
<!--                    </div>-->
<!--                </div>-->
                <!--end of dashboard features-->
            </div>
            </div>
        </section>

        <!--program scripts-->
        <script src="../../js/dashboard.js"></script>
       
    `
}

export function DashEvents() {
    CategoryButtonEvent();
    OtherDashEvent();
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


            return fetch(`http://localhost:8080/api/users/${userId}/updateCategories`, {
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

function OtherDashEvent() {

    const body = document.querySelector("body"),
        modeToggle = body.querySelector(".mode-toggle");
    var sidebar = body.querySelector("nav");
    var sidebarToggle = body.querySelector(".sidebar-toggle");

    let getMode = localStorage.getItem("mode");
    if(getMode && getMode ==="dark"){
        body.classList.toggle("dark");
    }

    let getStatus = localStorage.getItem("status");
    if(getStatus && getStatus ==="close"){
        sidebar.classList.toggle("close");
    }

    modeToggle.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        }else{
            localStorage.setItem("mode", "light");
        }
    });

    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
        if(sidebar.classList.contains("close")){
            localStorage.setItem("status", "close");
        }else{
            localStorage.setItem("status", "open");
        }
    })



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


