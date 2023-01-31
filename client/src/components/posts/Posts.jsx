import React from 'react';
import {CircularProgress, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

const Posts = () => {
    const posts = useSelector((state) => state.posts);
console.log(posts)
    return (
        <>
            {posts ? (<CircularProgress/>) : (
                <Grid container alignItems={"stretch"} spacing={3}>
<h1>hello</h1>
                </Grid>
            )}

        </>
    );
};

export default Posts;