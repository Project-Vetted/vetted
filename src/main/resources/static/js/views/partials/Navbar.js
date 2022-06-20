// import {isDash} from "../Dash.js";

export default function Navbar(props) {

    // if (isDash === true) {
    //     return null;
    // } else if (isDash !== true) {

        //language=HTML
        return `
            <header class="header">

                <a href="#home" class="logo"> <img src="../../../assets/imgs/official_vetted_logo.png" width="100px"
                                                   height="100px"></i></a>

                <nav class="navbar navbar-scrolled">
                    <div id="nav-close" class="fas fa-times"></div>
                    <a href="/" data-link>Home</a>
                    <a href="/about" data-link>About</a>
                    <a href="/login" data-link>Login</a>
                    <a href="#contact">contact</a>
                    <a href="#resource">resource blog</a>
                    <a href="/register" data-link>Register</a>
                    <a href="/user" data-link>User</a>
                    <a href="/dashboard" data-link>Dashboard</a>
                    <a href="/rating" data-link>Rating</a>
                    <a href="https://www.linkedin.com/in/mersedyes-livingston/"> <i class="fab fa-linkedin"></i>
                        linkedin
                    </a>
                    <a href="https://github.com/Project-Vetted"> <i class="fab fa-github"></i> github </a>
                </nav>
            </header>
        `;
    // }
}