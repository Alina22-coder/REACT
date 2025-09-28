import {PostsDummyJsonComponent} from "../PostsDummyJsonComponent.tsx";
import {Outlet} from "react-router-dom";

export const PostsDummyjsonComponent = () => {
    return (
        <div className="post-dummyjson">
            <h2 className="post-dummyjson__title">Posts Dummyjson Component</h2>
            <PostsDummyJsonComponent/>
            <Outlet/>
        </div>
    );
};