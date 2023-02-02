import React from 'react';
import {Button, CardActions,Card, CardMedia, CardContent, Typography,IconButton} from "@material-ui/core";
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDispatch} from "react-redux";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';


const Post = ({post,setCurrentId}) => {
    const dispatch = useDispatch();
    console.log(post)
    return (
        <>
            <Card className={"grid  w-[230px] h-auto  border-2 shadow-indigo-300 cursor-pointer "}>
                <CardMedia  component="img" image={post.selectedFile || '/img/person1.jpg'} title={post.title} />
                <div>
                    <Typography variant={"h6"}>{post.creator}</Typography>
                    <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div>
                    <IconButton aria-label="settings" style={{color: "red"}} size={"small"} onClick={() =>setCurrentId(post._id)}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div>
                    <Typography variant="body2" color="textSecondary"
                                component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography  gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>{}} >
                        <ThumbUpAltIcon
                            fontSize="small"/> Like {post.likeCount} </Button>
                    <Button size="small" color="primary" ><DeleteIcon
                        fontSize="small"/> Delete</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Post;