import {CommentsDummyJsonComponent} from "../CommentsDummyJsonComponent.tsx";
import {Outlet} from "react-router-dom";

export const CommentsDummyjsonComponent = () => {
    return (
        <div className="comments-dummyjson">
            <h2 className="comments-dummyjson__title">Comments Dummyjson Component</h2>
            <CommentsDummyJsonComponent/>
            <Outlet/>
        </div>
    );
};