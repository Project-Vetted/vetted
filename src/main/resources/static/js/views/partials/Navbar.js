export default function Navbar(props) {

        //language=HTML
        return `
            <header class="header">

                <a href="#home" class="logo"> <img src="../../../assets/imgs/official_vetted_logo.png" width="200px"
                                                   height="300px"></i></a>

                <nav class="navbar navbar-scrolled">
                    <div id="nav-close" class="fas fa-times"></div>
                    <a href="/" data-link>Home</a>
                    <a href="/about" data-link>About</a>
                    <a href="/login" data-link>Login</a>
                    <a href="/register" data-link>Register</a>

            </header>
        `;
}
