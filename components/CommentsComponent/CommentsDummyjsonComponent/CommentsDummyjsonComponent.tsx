import {CommentsDummyJsonComponent} from "../CommentsDummyJsonComponent.tsx";
import {Outlet} from "react-router-dom";

export const CommentsDummyjsonComponent = () => {
    return (
        <div>
            <h2>Comments Dummyjson Component</h2>
            <CommentsDummyJsonComponent/>
            <Outlet/>
        </div>
    );
};