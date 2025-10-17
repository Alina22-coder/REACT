import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {CarsPage} from "../pages/CarsPage/CarsPage.tsx";
import CreateCarPage from "../pages/CreateCarPage/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: '/cars', element: <CarsPage/>},
            {path: '/cars/create', element: <CreateCarPage/>}
        ]
    }
])