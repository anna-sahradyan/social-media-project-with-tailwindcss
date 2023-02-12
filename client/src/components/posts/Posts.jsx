import React from 'react';
import {CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import Post from "./Post";

const Posts = ({setCurrentId}) => {
    const {posts, isLoading} = useSelector((state) => state.posts);
    if (!posts.length && !isLoading) return "No Posts!!"
    return (
        <>
            <div className={"grid  grid-cols-4 gap-4 w-[calc(100%-400px)] p-2"}>
                {isLoading ? (<CircularProgress/>) : (
                    posts.map((item, index) =>
                        <Post post={item} key={`${item}_${index}`} setCurrentId={setCurrentId}/>
                    ))}

            </div>
        </>
    );
};

export default Posts;