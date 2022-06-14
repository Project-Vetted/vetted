export default function Navbar(props) {

    //language=HTML
    return `
        <nav>
            <a href="/about" data-link>About</a>
            <a href="/" data-link>Home</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
            <a href="/user" data-link>User</a>
        </nav>
    `;
}