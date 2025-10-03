import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";


export const routes = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>, children: [
            {path:'users', element: <UsersPage/>}
        ]
    }
])