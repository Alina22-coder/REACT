import {Link, Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <h2 className="posts-page__title">Posts Page</h2>
            <div className="posts-page">
                <ul className="posts-page-list">
                    <li className="posts-page-item"><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                    <li className="posts-page-item"><Link to={'dummyjson'}>dummyjson</Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};