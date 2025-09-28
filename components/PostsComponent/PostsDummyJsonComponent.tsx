import {useEffect, useState} from "react";
import type {PostsDummyjsonArrModel} from "../../models/PostsModel/PostsDummyjsonModel/PostsDummyjsonArrModel.ts";
import {loadPostsDummyjson} from "../../serviсe/api.serviсe.ts";
import {PostDummyJsonComponent} from "../PostComponent/PostDummyJsonComponent.tsx";

export const PostsDummyJsonComponent = () => {
    const [postsDummyjson, setPostsDummyjson] = useState<PostsDummyjsonArrModel[]>([]);

    useEffect(() => {
        loadPostsDummyjson()
            .then(postsDummyjson => {
                console.log(postsDummyjson);
                setPostsDummyjson(postsDummyjson)
            })
    }, []);

    return (
        <div className="post-dummyjson-component">
            {
                postsDummyjson.map(postDummyjson => (<PostDummyJsonComponent key={postDummyjson.id} postDummyjson={postDummyjson}/>))
            }
        </div>
    )
}