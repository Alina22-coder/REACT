import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayoutPage/MainLayout.tsx";
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage/ProductsPage.tsx";

import {UsersJsonplaceholderComponent} from "../components/UsersComponent/UsersJsonplaceholderComponent/UsersJSONPlaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../components/UsersComponent/UsersDummyjsonComponent/UsersDummyjsonComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/PostsComponent/PostsJsonplaceholderComponent/PostsJsonplaceholderComponent.tsx";
import {PostsDummyjsonComponent} from "../components/PostsComponent/PostsDummyjsonComponent/PostsDummyjsonComponent.tsx";
import {CommentsJsonplaceholderComponent} from "../components/CommentsComponent/CommentsJsonplaceholderComponent/CommentsJsonplaceholderComponent.tsx";
import {CommentsDummyjsonComponent} from "../components/CommentsComponent/CommentsDummyjsonComponent/CommentsDummyjsonComponent.tsx";
import {CartsPage} from "../pages/CartsPage/CartsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path:'jsonplaceholder', element:<UsersJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<UsersDummyjsonComponent/>, children: [
                            {path:'carts/:id', element: <CartsPage/>}
                        ]
                    }
                ]
            },
            {path: 'posts', element: <PostsPage/>, children: [
                    {path:'jsonplaceholder', element: <PostsJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<PostsDummyjsonComponent/>}
                ]},
            {path: 'comments', element: <CommentsPage/>,
                children: [
                    {path:'jsonplaceholder', element: <CommentsJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<CommentsDummyjsonComponent/>}
                ]},
            {path: 'products', element: <ProductsPage/>}
        ]
    }
]);