import HomePage from '~/pages/home';
import LoginPage from '~/pages/auth/login';
import Register from '~/pages/auth/register';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: null,
    },
    {
        path: '/login',
        component: LoginPage,
        layout: null,
    },
    {
        path: '/register',
        component: Register,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
