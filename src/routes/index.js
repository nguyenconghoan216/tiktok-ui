import { HeaderOnly } from '../components/Layout';

import Home from './../pages/Home/index';
import Following from './../pages/Following/index';
import Profile from './../pages/Profile/index';

import Upload from './../pages/Upload/index';
import Search from './../pages/Search/index';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
