import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel/PostModel.ts";
import {loadPosts} from "../../servise/api.servise.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        loadPosts()
            .then(posts => setPosts(posts));
    }, []);


    return (
        <div className="posts">
            <h2 className="post__title">POSTS</h2>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};