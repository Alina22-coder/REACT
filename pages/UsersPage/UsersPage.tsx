import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <h2>Users Page</h2>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder </Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>dummyjson </Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};