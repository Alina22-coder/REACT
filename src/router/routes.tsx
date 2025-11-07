import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {Commercial} from "../components/Commercial/Commercial.tsx";
import {Hotels} from "../components/Hotels/Hotels.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Commercial /> },
            { path:"/hotels", element: <Hotels /> },
        ],
    },
]);
