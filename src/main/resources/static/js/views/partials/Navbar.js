export default function Navbar(props) {

    //language=HTML
    return `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

            .header .navbar a {
                margin-left: 2rem;
                font-size: 1.7rem;
                color: #350259;
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

        <header class="header">
            <div id="logo-nav">
            <a href="#home" class="logo"> <img src="../../../assets/imgs/official_vetted_logo.png" width="100px"
                                               height="100px"></i></a>
            </div>
            <nav class="navbar navbar-scrolled">
                <div id="nav-close" class="fas fa-times"></div>
                <a href="/" data-link>Home</a>
                <a href="/login" data-link>Login</a>
                <a href="/veteran" data-link>Register</a>
                <a href="/dashboard" data-link>Dashboard</a>
            </nav>
        </header>
    `;
}
