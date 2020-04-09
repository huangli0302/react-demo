import loadable from './../utils/index'
const Home = loadable(() => import('./../views/home/Home'));
const User = loadable(() => import('./../views/user/User'));
const StoreDemo = loadable(() => import('./../views/storeDemo/StoreDemo'));
const Login = loadable(() => import('./../views/login/Login'));
const Test = loadable(() => import('./../views/test/Test'));
export default { Home, User, StoreDemo, Login,Test };
export const menus = [
{ 
    key: '/Home/User',
    title: '用户',
    icon: 'mobile',
    component: 'User' 
},
{ 
    key: '/Home/StoreDemo',
    title: '用户',
    icon: 'mobile',
    component: 'StoreDemo' 
},
{ 
    key: '/Home/Test',
    title: '用户',
    icon: 'mobile',
    component: 'Test' 
}
];