// layout
import HomeLayout from '~/components/Layout/HomeLayout';
// page
import HomePage from '~/pages/home';
import LoginPage from '~/pages/auth/login';
import Register from '~/pages/auth/register';
import NewsPage from '~/pages/news';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: HomeLayout,
    },
    {
        path: '/home',
        component: HomePage,
        layout: HomeLayout,
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
    {
        path: '/news',
        component: NewsPage,
        layout: HomeLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
