import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <h2 className="comments-page__title"> Comments Page</h2>
            <div className="comments-page">
                <ul className="comments-page-list">
                    <li className="comments-page-item"><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                    <li className="comments-page-item"><Link to={'dummyjson'}>dummyjson</Link></li>
                </ul>
            </div>
           <Outlet/>
        </div>
    );
};