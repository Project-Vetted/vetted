export default function About(props) {
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
       </style>
        
        <header>
            <h1>About Page</h1>
        </header>
        <main>
            <div>
                <p>About page is here.</p>
            </div>
        </main>
       
    `;
}