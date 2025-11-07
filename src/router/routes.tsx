import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {ModuleState} from "../components/ModuleState/ModuleState.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <ModuleState /> },
        ],
    },
]);
