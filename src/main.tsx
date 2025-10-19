import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";

// створюємо кореневий React-додаток і рендеримо його в DOM
createRoot(document.getElementById('root')!)
    // використовуємо RouterProvider для підключення маршрутизатора до React-додатку
    .render(<RouterProvider router={routes}/>)
