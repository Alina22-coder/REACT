import {UsersComponent} from "../UsersComponent.tsx";
import {Outlet} from "react-router-dom";
import "../UsersComponent.css"

export const UsersJsonplaceholderComponent = () => {
    return (
        <div className="users-jsonplaceholder">
            <h2 className="users-jsonplaceholder__title">Users Jsonplaceholder Component</h2>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};