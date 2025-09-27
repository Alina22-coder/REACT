import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <h2 className="users-page__title">Users Page</h2>
            <div className="users-page">
                <ul className="users-page-list">
                    <li className="users-page-item"><Link to={'jsonplaceholder'}>jsonplaceholder </Link></li>
                    <li className="users-page-item"><Link to={'dummyjson'}>dummyjson </Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};