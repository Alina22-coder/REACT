import {useEffect, useState} from "react";
import type {PostsJsonplaceholderModel} from "../../models/PostsModel/PostsJsonplaceholderModel/PostsJsonplaceholderModel.ts";
import {loadPostsJsonplaceholder} from "../../serviсe/api.serviсe.ts";
import {PostJSONPlaceholderComponent} from "../PostComponent/PostJSONPlaceholderComponent.tsx";

export const PostsJSONPlaceholderComponent = () => {
    const [postsJsonplaceholder, setPostsJsonplaceholder] = useState<PostsJsonplaceholderModel[]>([]);
    useEffect(() => {
        loadPostsJsonplaceholder()
            .then(postsJsonplaceholder => {
                console.log(postsJsonplaceholder);
                setPostsJsonplaceholder(postsJsonplaceholder)
            })
    }, []);

    return (
        <div className="post-jsonplaceholder-component">
            {
                postsJsonplaceholder.map(postJsonplaceholder => (<PostJSONPlaceholderComponent key={postJsonplaceholder.id} postJsonplaceholder={postJsonplaceholder}/>))
            }
        </div>
    )
}