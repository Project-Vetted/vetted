export default function Home(props) {

    //language=HTML
    return `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

            * {
                font-family: 'Poppins', sans-serif;
                margin: 0;
                padding: 0;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                outline: none;
                border: none;
                text-decoration: none;
                text-transform: capitalize;
                -webkit-transition: .2s linear;
                transition: .2s linear;
            }

            html {
                font-size: 62.5%;
                overflow-x: hidden;
                scroll-behavior: smooth;
                scroll-padding-top: 5rem;
            }

            html::-webkit-scrollbar {
                width: 1rem;
            }

            html::-webkit-scrollbar-track {
                background: #D1BAFF;
            }

            html::-webkit-scrollbar-thumb {
                background: #291d3a;
            }

            section {
                padding: 5rem 9%;
            }

            /*******************
            buttons
            *******************/
            .btn {
                margin-top: 1rem;
                display: inline-block;
                border: 0.2rem solid #350259;
                color: #350259;
                cursor: pointer;
                background: none;
                font-size: 1.7rem;
                padding: 1rem 3rem;
            }

            .btn:hover {
                background: #320259;
                color: #D1BAFF;
            }

            /*******************
            header
            *******************/
            .heading {
                text-align: center;
                margin-bottom: 2.5rem;
                font-size: 4rem;
                color: #350259;
            }

            /*#social-media {*/
            /*    justify-content: end;*/
            /*}*/

            .header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                padding: 1rem 9%;
                z-index: 1000;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                /*background: #291d3a;*/
                background: -webkit-gradient(linear, left top, left bottom, from(rgba(41, 29, 58, 1)), to(rgba(41, 29, 58, 1)));
                background: linear-gradient(rgba(41, 29, 58, 1), rgba(41, 29, 58, 1));
                border-bottom: 2px solid rgba(41, 29, 58);
                height: 10rem;
            }

            .header.active {
                background: #fff;
                -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
            }
            
            .header .navbar a {
                margin-left: 2rem;
                font-size: 1.7rem;
                color: #6C63AC;
                float: right;
            }

            .header .navbar a:hover {
                color: #918DD2;
            }

            .header .navbar #nav-close {
                font-size: 5rem;
                cursor: pointer;
                color: #350259;
                display: none;
            }

            .header .icons a,
            .header .icons div {
                font-size: 2.5rem;
                margin-left: 2rem;
                cursor: pointer;
                color: #350259;
            }

            .header .icons a:hover,
            .header .icons div:hover {
                color: #350259;
            }

            .home {
                padding: 0;
            }

            .home .box {
                min-height: 100vh;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                background-size: cover !important;
                background-position: center !important;
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                justify-content: flex-end;
                padding: 2rem 9%;
            }

            .home .box.second {
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
            }

            .home .box .content {
                width: 50rem;
            }

            .home .box .content span {
                font-size: 4rem;
                color: rgba(41, 29, 58, 1);
            }

            .home .box .content h3 {
                font-size: 6rem;
                color: rgba(41, 29, 58, 1);
                padding-top: .5rem;
                text-transform: uppercase;
            }

            .home .box .content p {
                line-height: 2;
                color: #350259;
                font-size: 1.5rem;
                padding: 1rem 0;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
                font-size: 3rem;
                color: #350259;
            }

            .category .box-container {
                display: -ms-grid;
                display: grid;
                /*-ms-grid-columns: (minmax(29rem, 1fr))[auto-fit];*/
                grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
                gap: 1.5rem;
            }

            .category .box-container .box {
                text-align: center;
                padding: 1rem;
            }

            .category .box-container .box img {
                height: 20rem;
                width: 20rem;
                border-radius: 50%;
                margin-bottom: 1rem;
            }

            .category .box-container .box h3 {
                font-size: 2rem;
                color: #350259;
            }

            .category .box-container .box p {
                font-size: 1.5rem;
                color: #42026F;
                padding: 1rem 0;
                line-height: 2;
            }

            /*******************
            about section
            *******************/
            .about {
                background: #eee;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                gap: 2rem;
            }

            .about .image {
                -webkit-box-flex: 1;
                -ms-flex: 1 1 42rem;
                flex: 1 1 42rem;
                padding-right: 5rem;
                padding-bottom: 5rem;
            }

            .about .image img {
                width: 100%;
                -webkit-box-shadow: 4rem 4rem 0 rgba(0, 0, 0, 0.1);
                box-shadow: 4rem 4rem 0 rgba(0, 0, 0, 0.1);
                /*background-size: cover;*/
            }

            .about .content {
                -webkit-box-flex: 1;
                -ms-flex: 1 1 42rem;
                flex: 1 1 42rem;
            }

            .about .content h3 {
                font-size: 3rem;
                color: rgba(41, 29, 58, 1);
            }

            .about .content p {
                font-size: 1.5rem;
                color: #42026F;
                padding: 1rem 0;
                line-height: 2;
            }

            .services {
                background: #eee;
            }

            .services .box-container {
                display: -ms-grid;
                display: grid;
                /*-ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];*/
                grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
                gap: 1.5rem;
            }

            .services .box-container .box {
                text-align: center;
                padding: 2rem;
                border: 0.2rem solid #350259;
                border-radius: .5rem;
                background: #fff;
            }

            .services .box-container .box:hover {
                background: #350259;
            }

            .services .box-container .box:hover img {
                -webkit-filter: invert(1);
                filter: invert(1);
            }

            .services .box-container .box:hover p {
                color: #fff;
            }

            .services .box-container .box:hover .btn {
                border-color: #fff;
                color: #fff;
            }

            .services .box-container .box:hover .btn:hover {
                background: #fff;
                color: #10221b;
            }

            .services .box-container .box img {
                height: 10rem;
                margin-bottom: 1rem;
            }

            .services .box-container .box h3 {
                font-size: 2rem;
                color: #350259;
            }

            .services .box-container .box p {
                font-size: 1.5rem;
                color: #350259;
                padding: 1rem 0;
                line-height: 2;
            }

            /*******************
            sign-in/register
            *******************/
            .register .text {
                padding: 2rem;
                font-size: 1.5rem;
                font-style: italic;
                background: #eee;
                border-radius: .5rem;
                color: #350259;
                line-height: 2;
                position: relative;
                z-index: 0;
                margin-bottom: 3rem;
            }

            .register .text::before {
                content: '';
                position: absolute;
                bottom: -1.5rem;
                left: .7rem;
                height: 3rem;
                width: 3rem;
                background: #eee;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            .blogs {
                background: #eee;
            }

            .blogs .slide {
                text-align: center;
                padding: 2rem;
            }

            .blogs .slide img {
                height: 25rem;
                width: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                border-radius: .5rem;
            }

            .blogs .slide .icons {
                background: #350259;
                border-radius: .5rem;
                padding: 1rem;
                position: relative;
                top: -2rem;
                display: inline-block;
            }

            .blogs .slide .icons a {
                font-size: 1.4rem;
                color: #eee;
                margin: 0 1rem;
            }

            .blogs .slide .icons a:hover {
                color: #D1BAFF;
            }

            .blogs .slide .icons a i {
                padding-right: .5rem;
                color: #D1BAFF;
            }

            .blogs .slide h3 {
                font-size: 2rem;
                color: #350259;
            }

            .blogs .slide p {
                font-size: 1.4rem;
                padding: 1rem 0;
                line-height: 2;
                color: #3C0265;
            }

            .newsletter .content {
                max-width: 70rem;
                margin: 1rem auto;
                text-align: center;
            }

            .newsletter .content p {
                font-size: 1.5rem;
                line-height: 2;
                color: #5D357A;
            }

            .newsletter .content form {
                margin-top: 2rem;
                background: #fff;
                border-radius: 5rem;
                border: 0.2rem solid #350259;
                padding: .7rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
            }

            .newsletter .content form .email {
                width: 100%;
                background: none;
                text-transform: none;
                font-size: 1.6rem;
                color: #350259;
                padding: 0 1.3rem;
            }

            .newsletter .content form .btn {
                margin-top: 0;
                border-radius: 5rem;
                background: #350259;
                color: #C0B2FF;
            }

            .newsletter .content form .btn:hover {
                background: #C0B2FF;
                color: #350259;
            }

            .footer {
                background: -webkit-gradient(linear, left top, left bottom, from(rgba(41, 29, 58, 0.5)), to(rgba(41, 29, 58, 1))), url('./static/assets/imgs/footer-bg.png') no-repeat;
                background: linear-gradient(rgba(41, 29, 58, 0.5), rgba(41, 29, 58, 1)), url('./static/assets/imgs/footer-bg.png') no-repeat;
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }

            .footer .box-container {
                display: -ms-grid;
                display: grid;
                /*-ms-grid-columns: (minmax(25rem, 1fr))[auto-fit];*/
                grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
                gap: 1.5rem;
            }

            .footer .box-container .box h3 {
                font-size: 2rem;
                padding: 1.5rem 0;
                color: #fff;
            }

            .footer .box-container .box a {
                display: block;
                font-size: 1.4rem;
                color: #C0B2FF;
                padding: 1rem 0;
            }

            .footer .box-container .box a i {
                color: #918DD2;
                padding-right: .5rem;
            }

            .footer .box-container .box a:hover {
                color: #9F9BE7;
            }

            .footer .box-container .box a:hover i {
                padding-right: 2rem;
            }

            .footer .group-name {
                text-align: center;
                margin-top: 2.5rem;
                padding: 1rem;
                padding-top: 2.5rem;
                font-size: 2rem;
                color: #fff;
            }

            .footer .group-name span {
                color: #918DD2;
            }

            @media (max-width: 1200px) {
                .header {
                    padding: 2rem;
                }

                section {
                    padding: 3rem 2rem;
                }
            }

            @media (max-width: 991px) {
                html {
                    font-size: 55%;
                    scroll-padding-top: 7rem;
                }

                .home .box {
                    padding: 2rem;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    background-position: right !important;
                }

                .home .box.second {
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    background-position: left !important;
                }

                .home .box .content {
                    text-align: center;
                }

                .home .box .content span {
                    font-size: 3rem;
                }

                .home .box .content h3 {
                    font-size: 4rem;
                }
            }

            @media (max-width: 768px) {
                .header #menu-btn {
                    display: inline-block;
                }

                .header .navbar {
                    position: fixed;
                    top: 0;
                    left: -110%;
                    background: #fff;
                    z-index: 10000;
                    width: 35rem;
                    height: 100%;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-flow: column;
                    flex-flow: column;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                }

                .header .navbar.active {
                    left: 0;
                    -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
                    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
                }

                .header .navbar a {
                    margin: 1rem 0;
                    font-size: 3rem;
                }

                .header .navbar #nav-close {
                    display: block;
                    position: absolute;
                    top: 1rem;
                    right: 2rem;
                }

                .swiper-button-next::after,
                .swiper-button-prev::after {
                    display: none;
                }
            }

            @media (max-width: 450px) {
                html {
                    font-size: 50%;
                }

                .heading {
                    font-size: 3rem;
                }
            }
        </style>

        <section class="home" id="home">
            <div class="swiper home-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="box" style="background: url('../../assets/imgs/home-bg-1.png') no-repeat;">
                            <div class="content">
                                <span>Welcome to</span>
                                <h3>Vetted</h3>
                                <em><p>a secure platform for veterans who struggle with various mental health issues 
                                    and are seeking connection, compassion, and relational consistency. Users are able 
                                    to access mental health information, develop personal goals, and communicate with other
                                    veterans via chat or video. In a modern climate where veterans are seeking support 
                                    and lack proper resources, Vetted is an app that empowers veterans to join arms with
                                    each other bridging the mental health gap.</p></em>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box second" style="background: url('../../assets/imgs/home-bg-2.png') no-repeat;">
                            <div class="content">
                                <span>this is your</span>
                                <h3>safe space</h3>
                                <p>Vetted provides a veteran community of individuals who struggle with mental health
                                    issues or would like to support other veterans.</p>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box" style="background: url('../../assets/imgs/home-bg-3.png') no-repeat;">
                            <div class="content">
                                <span>own your mental</span>
                                <h3>health</h3>
                                <p>Vetted has a video chat feature that is available 24/7 for veterans. Veterans have
                                    access to their own personalized dashboard that provides updated information
                                    pertinent to their selected communities.</p>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <!-- home section ends -->

        <!-- about section starts  -->
<!--will need to add new content here depending on what I do with the about page-->
        <section class="about" id="about">

            <div class="image">
                <img src="../../assets/imgs/about-img.png" alt="">
            </div>

            <div class="content">
                <h3>vetted</h3>
                <p>Vetted is an application for veterans who struggle with various mental health issues and are seeking
                    connection, compassion, and relational consistency. Vetted is a secured platform that verifies
                    veteran user credentials to allow for privacy and randomizes usernames to maintain privacy. Users
                    are able to access mental health information, develop personal goals, and communicate with other
                    veterans via chat or video. In a modern climate where veterans are seeking support and lack proper
                    resources, Vetted is an application that empowers veterans to join arms with each other bridging the
                    mental health gap.</p>
                <a href="#" class="btn">read more</a>
            </div>

        </section>

        <!-- about section ends -->

        <!-- sign-in/register section starts  -->

        <section class="register" id="register">
            <h1 class="heading">sign-in/register</h1>
            <div class="swiper register">
                <div class="register-action">
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum
                        pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati,
                        adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                    <a href="#" class="btn">Register</a>
                </div>
            </div>
            </div>
        </section>

        <!-- sign-in/register section ends -->

        <!-- services section starts  -->

        <section class="services">
            <h1 class="heading"> why vetted </h1>
            <div class="box-container">

                <div class="box">
                    <img src="../../assets/imgs/serv-1.jpeg" alt="">
                    <h3>vetted members</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-2.jpeg" alt="">
                    <h3>privacy & anonymity</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-4.jpeg" alt="">
                    <h3>build connections</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
        </section>

        <!-- services section ends -->

        <!-- testimonials section starts  -->
        <section class="category">
            <h1 class="heading">Testimonials</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../../assets/imgs/about_image_1.jpeg" alt="">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/about_image_2.jpeg" alt="">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/about_image_3.jpeg" alt="">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

<!--                <div class="box">-->
<!--                    <img src="../../assets/imgs/category-4.jpeg" alt="">-->
<!--                    <h3>Lorem ipsum dolor sit.</h3>-->
<!--                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>-->
<!--                    <a href="#" class="btn">read more</a>-->
<!--                </div>-->
            </div>
        </section>
        <!-- testimonials section ends -->

        <!-- blogs section starts  -->

        <section class="blogs" id="blogs">

            <h1 class="heading"> our quarterly post </h1>

            <div class="swiper blogs-slider">

                <div class="swiper-wrapper">

                    <div class="swiper-slide slide">
                        <img src="../../assets/imgs/img-1.jpg" alt="">
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> June 2022 </a>
                            <a href="#"> <i class="fas fa-user"></i> by vetted </a>
                        </div>
                        <h3>why is your mental health important?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                        <a href="#" class="btn">read more</a>
                    </div>

                    <div class="swiper-slide slide">
                        <img src="../../assets/imgs/img-2.jpg" alt="">
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                            <a href="#"> <i class="fas fa-user"></i> by admin </a>
                        </div>
                        <h3>how does vetted benefit the vet community?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- blogs section ends -->

        <!-- newsletter section  -->

        <section class="newsletter">
            <div class="content">
                <h1 class="heading">Vetted Highlights</h1>
                <p>To help you track with Vetted news, provide your email to keep track of what's going on.</p>
                <form action="">
                    <input type="email" name="" placeholder="enter your email address" id="" class="email">
                    <input type="submit" value="subscribe" class="btn">
                </form>
            </div>
        </section>

        <!-- footer section starts  -->
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>quick links</h3>
                    <<a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                    <a href="#resource">resource blog</a>
                    <a href="#visiter-user">Sign-in/Register</a>
                </div>

                <div class="box">
                    <h3>contact us</h3>
                    <a href="#"> <i class="fas fa-phone"></i> +123-345-5678 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> info@codeup.com </a>
                    <a href="#"> <i class="fas fa-map"></i> Dallas, Texas </a>
                </div>

                <div class="box">
                    <h3>Social Media</h3>
                    <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                    <a href="#"> <i class="fab fa-github"></i> github </a>
                </div>
            </div>

            <div class="group-name">created by <span>Globo Gym</span> | all rights reserved</div>

        </section>
        <!-- footer section ends -->

        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <!-- Initialize Swiper -->
        <script>
            const swiper = new Swiper(".home-slider", {
                loop: true,
                grabCursor: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        </script>

        <!-- custom js file link  -->
        <script src="src/main/resources/static/js/main.js"></script>
<!--        <script src="../main.js"></script>-->

        <script src="src/main/resources/static/js/pre.js"></script>


    `;
}

export function HomeEvent() {
    homeBtnEvent();
    navCloseEvent();
    searchForm();
}

let navbar = document.querySelector('.header .navbar');


function homeBtnEvent() {
    $(document).on('click', '#menu-btn', function () {
        navbar.classList.add('active');
    })
}

function navCloseEvent() {
    $(document).on('click', '#nav-close', function () {
        navbar.classList.remove('active');
    })
}

function searchForm() {
    let searchForm = document.querySelector('.search-form');

    $(document).on('click', '#search-btn', function () {
        searchForm.classList.add('active');
    })
}

window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

}