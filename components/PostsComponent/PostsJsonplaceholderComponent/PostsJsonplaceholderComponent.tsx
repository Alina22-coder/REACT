import {PostsJSONPlaceholderComponent} from "../PostsJSONPlaceholderComponent.tsx";
import {Outlet} from "react-router-dom";

export const PostsJsonplaceholderComponent = () => {
    return (
        <div className="posts-jsonplaceholder">
            <h2 className="posts-jsonplaceholder__title">Posts Jsonplaceholder Component</h2>
            <PostsJSONPlaceholderComponent/>
            <Outlet/>
        </div>
    );
};