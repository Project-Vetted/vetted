export default function About(props) {
    //language=HTML
    return `
        <style>
            <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower|Montserrat|Quicksand&display=swap" rel="stylesheet">

            * {
                font-family: 'Montserrat', sans-serif;
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
                background: rgba(175, 170, 254, 0.5);
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
            /*About page content*/
            .container {
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-image: url(./static/assets/imgs/about_us_bg.jpeg);
                background-size: cover;
                background-position: center center;
                color: #fff;
                padding: 0
            }

            .nav {
                display: flex;
                justify-content: space-between;
                width: 90%;
                margin: 10px;
            }

            .nav span {
                margin-left: 20px;
            }

            .about-us {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                flex-direction: column;
            }

            .who-we-are {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .who-we-are span {
                width: 60%;
                align-items: center;
                text-align: center;
            }

            .cards {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px;
                flex-wrap: wrap;
            }

            .card-img {
                border-radius: 5px;
            }

            .cards .card {
                width: 16rem;
                margin: 20px;
            }

            .card p {
                font-size: 14px;
            }

            .social-media {
                width: 90%;
                display: flex;
                justify-content: flex-end;
            }

            .social-media i {
                margin: 10px;
            }

            .active {
                border-bottom: 1px solid #fff;
            }

            .card-img1 {
                width: 100%;
                height: 12rem;
                background-image: url('01.jpg');
                background-size: cover;
                background-position: center center;
            }

            .card-img2 {
                width: 100%;
                height: 12rem;
                background-image: url('02.jpg');
                background-size: cover;
                background-position: center center;
            }

            .card-img3 {
                width: 100%;
                height: 12rem;
                background-image: url('03.jpg');
                background-size: cover;
                background-position: center center;
            }

            .card-img4 {
                width: 100%;
                height: 12rem;
                background-image: url('04.jpg');
                background-size: cover;
                background-position: center center;
            }
            
            /*MEDIA*/
            @media (max-width: 1200px) {
                .header {
                    padding: 2rem;
                }
            }

            @media (max-width: 1024px) {
                html {
                    font-size: 55%;
                    scroll-padding-top: 7rem;
                }
            }

            @media (min-width: 1440px) {
                html {
                    font-size: 55%;
                    scroll-padding-top: 7rem;
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
        
        
    `;
}