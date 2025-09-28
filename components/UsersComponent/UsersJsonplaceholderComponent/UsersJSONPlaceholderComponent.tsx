import {Outlet} from "react-router-dom";
import {UsersJsonComponent} from "../UsersJsonComponent.tsx";

export const UsersJsonplaceholderComponent = () => {
    return (
        <div className="users-jsonplaceholder">
            <h2 className="users-jsonplaceholder__title">Users Jsonplaceholder Component</h2>
            <UsersJsonComponent/>
            <Outlet/>
        </div>
    );
};