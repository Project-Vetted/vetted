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
                background: rgba(175,170,254, 0.5);
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
                background: -webkit-gradient(linear, left top, left bottom, from(rgba(41, 29, 58, 0.9)), to(rgba(41, 29, 58, 0.9)));
                background: linear-gradient(rgba(41, 29, 58, 0.9), rgba(41, 29, 58, .9));
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
                color: #918DD2;
                float: right;
            }

            .header .navbar a:hover {
                color: #6C63AC;
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
                width: 150rem;
                height: 100rem;
            }

            .home .box .content span {
                font-size: 4rem;
                color: #350259;
            }

            .home .box .content h3 {
                font-size: 6rem;
                color: #350259;
                padding-top: .5rem;
                text-transform: uppercase;
            }

            .home .box .content p {
                line-height: 2;
                color: #350259;
                font-size: 2rem;
                font-weight: bolder;
                padding: 1rem 1rem;
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
            
            /*.modal{*/
            /*    padding: 1em;*/
            /*    max-width: 50ch;*/
            /*border: 1px solid #350259;*/
            /*    */
            /*    & > * {*/
            /*    margin: 0 0 0.5rem 0;*/
            /*      }*/
            /*}*/
            
            /*.modal::backdrop{*/
            /*    background: #350259;*/
            /*    opacity: 0.7;*/
            /*}*/
            
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
                box-shadow: 4rem 4rem 0 rgba(93, 53, 122, 0.3);
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
                color: #350259;
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
                font-size: 2rem;
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

            @media (max-width: 1024px) {
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
                    padding-top: 20rem;
                }

                .home .box .content span {
                    font-size: 3rem;
                }

                .home .box .content h3 {
                    font-size: 4rem;
                }
            }
            
            @media (min-width: 1440px) {
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
                        padding-top: 40rem;
                    }

                    .home .box .content span {
                        font-size: 3rem;
                        color: #fff;
                    }

                    .home .box .content h3 {
                        font-size: 4rem;
                        color: #fff;
                    }
                    
                    .home .box .content p{
                        font-size: 1.5rem;
                        color: #fff;
                        font-weight: bold;
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
                .home .box .content {
                    text-align: center;
                    padding-top: 20rem;
                }

                .home .box .content span {
                    font-size: 3rem;
                }

                .home .box .content h3 {
                    font-size: 4rem;
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
                                    and are seeking connection, compassion, and relational consistency. In a modern climate where veterans are seeking support 
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
<!--         home section ends -->

<!--         about section starts  -->
<!--will need to add new content here depending on what I do with the about page-->
        <section class="about" id="about">

            <div class="image">
                <img src="../../assets/imgs/about-img.png" alt="">
            </div>

            <div class="content">
                <h3>About vetted</h3>
                <p>Vetted is an application for veterans who struggle with various mental health issues and are seeking
                    connection, compassion, and relational consistency. Vetted is a secured platform that verifies
                    veteran user credentials to allow for privacy and randomizes usernames to maintain privacy. Users
                    are able to access mental health information, develop personal goals, and communicate with other
                    veterans via chat or video. In a modern climate where veterans are seeking support and lack proper
                    resources, Vetted is an application that empowers veterans to join arms with each other bridging the
                    mental health gap. </p>
               
            </div>

        </section>

        <!-- about section ends -->

        <!-- sign-in/register section starts  -->

        <section class="register" id="register">
            <h1 class="heading">Join The Vetted Community Now!!!</h1>
            <div class="swiper register">
                <div class="register-action">
                    <p class="text">You have made it this far, so why stop? You are one click away from taking control of 
                    your mental health. Join the Vetted community today!</p>
                    <a href="#register" class="btn register-btn">Register</a>
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
                    <p>To protect the safety of the community, all members of Vetted must have their credentials 
                        confirmed upon registration. This assures that all members are veterans with at least two years
                        of service and safeguards the Vetted community from those who wish to inflict harm in any form.</p>
<!--                    <a href="#" class="btn">read more</a>-->
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-2.jpeg" alt="">
                    <h3>privacy & anonymity</h3>
                    <p>To prevent revealing veterans who prefer to disguise their identity, a secure verification process,
                        randomized usernames supplied upon registration, and password requirements are in place.</p>
<!--                    <a href="#" class="btn">read more</a>-->
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-4.jpeg" alt="">
                    <h3>build connections</h3>
                    <p>The Vetted community allows you to connect with other veterans through our chat and friends list 
                        tools. Combating mental health challenges is greatest accomplished with combat comrades who grasp 
                        your difficulties and also how to support you.</p>
<!--                    <a href="#" class="btn">read more</a>-->
                </div>
            </div>
        </section>
        
        <!-- services section ends -->

        <!-- testimonials section starts  -->
        <section class="category">
            <h1 class="heading">The Need for Vetted</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../../assets/imgs/testimonials1.jpeg" alt="">
                    <h3>VA has $20 million</h3>
                    <p> for new ideas but not to increase mental health support. I saw this, and it made me lost my mind.
                    I've been going on nine months back-and-forth with the VA to get mental healthcare because my mental
                    health is deteriorating. I keep getting told you don't look so bad, and you have great advocacy skills 
                    so your mental health cannot be that bad.</p>
                    <a href="#" class="btn open-btn">read more</a>
                </div>
                <dialog class="modal" id="modal">
                    <h2>I almost lost my mind</h2>
                    <p>Va has $20 million for new ideas but not to increase mental health support. I saw this, and it made me lost my mind.
                        I've been going on nine months back-and-forth with the VA to get mental healthcare because my mental
                        health is deteriorating. I keep getting told you don't look so bad, and you have great advocacy skills
                        so your mental health cannot be that bad.</p><br>
                    <p>It took me nine months, and I had a full on breakdown with a provider that I thought was going to be 
                    my permanent therapist only to be told this is a short term program, and then they send me on my way to
                    be referred out to the community to finally get long-term care.</p><br>
                    <p>You want to lower suicide rates? Listen to us when we have problems and start finding ways to get us
                    into the community if you're backlogged.</p>
                    <button class="button close-button">Close Window</button>
                </dialog>

                <div class="box">
                    <img src="../../assets/imgs/testimonials2.jpeg" alt="">
                    <h3>VA Doc No-show</h3>
                    <p>Had my first video appointment with a VA mental health provider this morning, despite scheduling
                    back in March. Confirmed the appointment, went to log on ten minutes prior and waited until the 
                    appointment time. Waited until thirty minutes until after the appointment was supposed to start, and 
                    the provider still hadn't shown up.</p>
                    <a href="#" class="btn open-btn">read more</a>
                </div>
                <dialog class="modal" id="modal">
                    <h2>VA Doc No-show</h2>
                    <p>Had my first video appointment with a VA mental health provider this morning, despite scheduling
                        back in March. Confirmed the appointment, went to log on ten minutes prior and waited until the
                        appointment time. Waited until thirty minutes until after the appointment was supposed to start, and
                        the provider still hadn't shown up.</p><br>
                    <p>Made sure to double-check that I had the correct information and everything. I guess my question is,
                        what exactly do I do from here? Really don't want to wait several months again just to be seen.
                        Any help is appreciated.</p>
                    <p>You want to lower suicide rates? Listen to us when we have problems and start finding ways to get us
                        into the community if you're backlogged.</p>
                    <button class="button close-button">Close Window</button>
                </dialog>
                <div class="box">
                    <img src="../../assets/imgs/testimonials3.jpeg" alt="">
                    <h3>Who can I really talk to?</h3>
                    <p>Long story short I'm feeling hopeless and lost my feeling of any self-worth I had. I just want to 
                    talk things out and have a safe space to just cry. It's been a year since I got out of active duty and
                    its been nothing less than miserable and depressing, and I just want to talk to someone.</p>
                    <a href="#" class="btn open-btn">read more</a>
                </div>
                <dialog class="modal" id="modal">
                    <h2>Who can I really talk to?</h2>
                    <p>Long story short I'm feeling hopeless and lost my feeling of any self-worth I had. I just want to
                        talk things out and have a safe space to just cry. It's been a year since I got out of active duty,
                        and it's been nothing less than miserable and depressing, and I just want to talk to someone. I've 
                        already tried on source, but they feel so artificial that I felt even worse talking to them. Am I able
                    to use my health insurance to talk to a specialist, anybody really? Thanks for y'all's time.</p><br>
                    <button class="button close-button">Close Window</button>
                </dialog>

            </div>
        </section>
        <!-- testimonials section ends -->

        <!-- blogs section starts  -->

        <section class="blogs" id="blogs">

            <h1 class="heading"> our quarterly post </h1>

            <div class="swiper blogs-slider">

                <div class="swiper-wrapper">

                    <div class="swiper-slide slide">
                        <img src="../../assets/imgs/quarterly_post_pic.jpeg" alt="">
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> June 2022 </a>
                            <a href="#"> <i class="fas fa-user"></i> by vetted </a>
                        </div>
                        <h3>Mental well-being: An important outcome for mental health services?</h3>
                        <p>The World Health Organization defines mental well-being as an individual's ability to develop
                            their potential, work productively and creatively, build strong and positive relationships
                            with others and contribute to their community.</p>
                        <a href="shorturl.at/clpvK" class="btn">read more</a>
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
                    <a href="#contact">login</a>
                    <a href="#visiter-user">register</a>
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
                    <a href="https://github.com/Project-Vetted/vetted"> <i class="fab fa-github"></i> github </a>
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

// const modal = document.querySelector('.modal');
// const openModal = document.querySelector('.open-btn');
// const closeModal = document.querySelector('.close-button');
//
// openModal.addEventListener('click', () => {
//     modal.showModal();
// });
//
// closeModal.addEventListener('click', () => {
//     modal.closeModal();
// });
