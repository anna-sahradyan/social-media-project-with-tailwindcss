import React, {useState} from 'react';
import {Button, CardActions, Card, CardMedia, CardContent, Typography, IconButton} from "@material-ui/core";
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDispatch} from "react-redux";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import {deletePost, likePost} from "../../actions/posts";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import {useNavigate} from "react-router";

const Post = ({post, setCurrentId}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = post?.likes?.find((like) => like === userId);
    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon
                        fontSize="small"/>&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined
                        fontSize="small"/>&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small"/>&nbsp;Like</>;
    }
    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    return (
        <>
            <Card className={"grid  w-[230px] h-full  border-2 shadow-indigo-300 cursor-pointer "}>
                <CardMedia className={"w-full h-60"} component="img" image={post.selectedFile || '/img/person1.jpg'}
                           title={post.title}/>
                <div>
                    <Typography variant={"h6"}>{post.name}</Typography>
                    <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId == post?.creator || user?.result?._id === post?.creator) && (<div>
                    <IconButton aria-label="settings" className={"absolute -top-72 left-48 "} style={{color: "red"}}
                                size={"small"} onClick={() => setCurrentId(post._id)}>
                        <MoreVertIcon/>
                    </IconButton>
                </div>)}

                <div>
                    <Typography variant="body2" color="textSecondary"
                                component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>

                    <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
                    <CardContent>
                        <Typography variant="body2" gutterBottom color="textSecondary"
                                    component="p">{post.message}</Typography>
                    </CardContent>
                </div>
                <CardActions>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                        <Likes/>
                    </Button>
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Button size="small" color="primary" style={{left: 20}}
                                onClick={() => dispatch(deletePost(post._id))}>
                            <DeleteIcon fontSize="small"/> &nbsp; Delete
                        </Button>
                    )}
                </CardActions>

            </Card>
        </>
    );
};

export default Post;