import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayoutPage/MainLayout.tsx";
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage/ProductsPage.tsx";



export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]
    }
]);