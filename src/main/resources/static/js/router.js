import Home, {HomeEvent} from "./views/Home.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvent} from "./views/User.js";
import Dash, {DashEvent, LikesEvent} from "./views/Dash.js";
import Rating from "./views/Rating.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvent
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: "Register",
            viewEvent: RegisterEvent
        },
        '/rating': {
            returnView: Rating,
            state: {user: '/api/users/me'},
            uri: '/rating',
            title: "Rating",

        },
        '/dashboard': {
            returnView: Dash,
            state: {
                user: '/api/users/me'
            },
            uri: '/dashboard',
            title: "Dashboard",
            viewEvent: (DashEvent, LikesEvent)
        },
        '/user': {
            returnView: UserIndex,
            state: {
                user: '/api/users/me'
            },
            uri: '/user',
            title: 'User',
            viewEvent: UserEvent
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About',
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    return routes[URI];
}