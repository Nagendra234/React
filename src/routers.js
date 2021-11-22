import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import Login from './Components/Header/Login'
import Register from './Components/Header/Register'

const routers = [
    {
        exact: true, path: '/', component: Home, tittle: 'Home', isAuth: true,
},
//     {
//          path: '/about', component: About, tittle: 'About', isAuth: true,
// }, {
//     path: '/contact', component: Contact, tittle: 'Contact', isAuth: true,
// },
    {
         path: '/login', component: Login, tittle: 'Login', isAuth: false,
 },
{
    path: '/register', component: Register, tittle: 'Register', isAuth: false,
},
{
    path: '/login', isAuth: true,
},
]

export default routers
