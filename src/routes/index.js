import HomePage from '~/pages/home';
import AuthPage from '~/pages/auth';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: null,
    },
    {
        path: '/auth',
        component: AuthPage,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
