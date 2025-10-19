import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([ //створюємо браузерний router зі списокм шляхів
    {
        path: '/', //кореневий шлях коли користувач переходить на адресу "/"
        element: <MainLayout/>, //компонент, який буде відображати відповідно цього шляху
        children: [  //дочірні шляхи, які відображаються всередині MainLayout
            {index:true, //базовий індексний шлях для батьківського url
                element: <HomePage/>}, //компонент, який відображається на головній сторінці
            {path: 'login', // шлях "/login" — коли користувач переходить на цю адресу
                element: <LoginPage/>}, // компонент, який буде показано для маршруту "/login"
            {path: '/auth/resources', // шлях "/auth/resources"
                element: <AuthResourcesPage/>}, // компонент, який буде відображено на сторінці "/auth/resources"
        ]
    }
])