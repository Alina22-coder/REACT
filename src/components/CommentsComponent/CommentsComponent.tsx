import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/comments-model.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import {loadComment} from "../../servise/api.servise.ts";


export const CommentsComponent = () => {
    const [comments, setComments] =  useState<CommentModel[]>([]);

    useEffect( () => {
        loadComment()
            .then(value => setComments(value));
    }, []);


    return (
        <div className="comments">
            {
                comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};