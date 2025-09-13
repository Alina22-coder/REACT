import {useEffect, useState} from "react";
import {loadPosts} from "../../servise/api.service.ts";
import type {IPostModel} from "../../models/posts-model.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        loadPosts()
            .then(value => setPosts(value));
    }, []);

    return (
            <div>
                {
                posts.map((post) => <PostComponent key={post.id} post={post}/>)
                }
            </div>
    );
};