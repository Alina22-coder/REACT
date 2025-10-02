import {Outlet} from "react-router-dom";
import {UsersDummyComponent} from "../UsersDummyComponent.tsx";

export const UsersDummyjsonComponent = () => {
    return (
        <div className="user-dummyjson">
            <Outlet/>
            <h2 className="user-dummyjson__title">Users Dummyjson Component</h2>
            <UsersDummyComponent/>
        </div>
    );
};