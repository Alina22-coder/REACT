import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <h2> Comments Page</h2>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
            </ul>
           <Outlet/>
        </div>
    );
};