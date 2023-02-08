import React, {useEffect} from 'react';
import {CircularProgress, Divider, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import moment from "moment";
import CommentsBlock from "./CommentsBlock";
import {getPost} from "../../actions/posts.js";


const PostDetails = () => {
    const {post, posts, isLoading} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const openPost = (_id) => navigate(`/posts/${_id}`);
    const recommendedPosts = false;
    useEffect(() => {
        dispatch(getPost(id));
        }, [id]);
    // if (!post) return null;
    // if (isLoading) {
    //     return(
    //         <Paper elevation={6} className={""}>
    //             <CircularProgress size="7em"/>
    //         </Paper>
    //     )
    //
    // }

    return (
        <>
            <div className={"flex w-full "}>
                <Paper  className={"rounded-3xl w-[90%] m-[20px] m-[auto]  flex justify-between"}  elevation={6} >
                        <div className={"m-2 flex-1"}>
                            <Typography variant="h3" component="h2">{post?.title}</Typography>
                            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post?.tags.map((tag) => `#${tag} `)}</Typography>
                            <Typography gutterBottom variant="body1" component="p">{post?.message}</Typography>
                            <Typography variant="h6">Created by: {post?.name}</Typography>
                            <Typography variant="body1">{moment(post?.createdAt).fromNow()}</Typography>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                            <Divider style={{ margin: '20px 0' }} />
                            <CommentsBlock post={post} />
                            <Divider style={{ margin: '20px 0' }} />
                        </div>
                        <div  className={"flex  "}>
                            <img className={"flex flex-1 w-[450px] h-96  rounded-2xl object-cover m-auto m-2  "} src={post?.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post?.title} />

                    </div>
                    {!!recommendedPosts.length && (
                        <div className={""}>
                            <Typography gutterBottom variant="h5">You might also like:</Typography>
                            <Divider />
                            <div className={""}>
                                {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                                    <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                                        <Typography gutterBottom variant="h6">{title}</Typography>
                                        <Typography gutterBottom variant="subtitle2">{name}</Typography>
                                        <Typography gutterBottom variant="subtitle2">{message}</Typography>
                                        <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                                        <img src={selectedFile} width="200px" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Paper>
            </div>
        </>
    );
};

export default PostDetails;