import Home, {HomeEvent} from "./views/Home.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import Settings, {UserSettingsEvent} from "./views/Settings.js";
import Dash, {DashEvents} from "./views/Dash.js";
import Rating from "./views/Rating.js";
import Chat from "./views/Chat.js";
import Veteran, {VeteranRegistrationEvent} from "./views/Veteran.js"

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
            noNav: true,
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            noNav: true,
            returnView: Register,
            state: {},
            uri: '/register',
            title: "Register",
            viewEvent: RegisterEvent
        },
        '/veteran': {
            noNav: true,
            returnView: Veteran,
            state: {},
            uri: '/veteran',
            title: "Registration",
            viewEvent: VeteranRegistrationEvent
        },
        '/rating': {
            noNav: true,
            returnView: Rating,
            state: {user: '/api/users/me'},
            uri: '/rating',
            title: "Rating",

        },
        '/dashboard': {
            noNav: true,
            returnView: Dash,
            state: {
                user: '/api/users/me'
            },
            uri: '/dashboard',
            title: "Dashboard",
            viewEvent: DashEvents
        },
        '/settings': {
            returnView: Settings,
            state: {
                user: '/api/users/me'
            },
            uri: '/settings',
            title: 'Settings',
            viewEvent: UserSettingsEvent
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
        },
        '/chat': {
            noNav: true,
            returnView: Chat,
            state: {user: "/api/users/me"},
            uri: '/chat',
            title: 'Chat',
        }
    };

    return routes[URI];
}