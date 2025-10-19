import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu/Menu.tsx";
import '../App.css'

// експортуємо компонент, щоб його можна було використовувати в інших файлах
export const MainLayout = () => {
    //робимо навігаційне меню та місце куди буде підставлятися контент дочірніх маршрутів
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};