import React, {useEffect, useState} from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/posts";


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        }


    }
    const clear = () => {

    };
    useEffect(() => {
        if(post){
            setPostData(post)
        }

    }, [post])
    // if (!user) {
    //     return (
    //         <>
    //             <Paper>
    //                 <Typography variant={"h6"} align={"center"}>
    //                     Please Sign In to create your own memories and like other's memories.
    //                 </Typography>
    //             </Paper>
    //         </>
    //     )
    // }
    return (
        <>
            <div className={"flex"}>
                <Paper elevation={6} className={"w-96  right-2 absolute mt-10  h-[500px] "}>
                    <form noValidate onSubmit={handleSubmit} className={"flex flex-wrap m-10 "}>
                        <Typography className={"top-2 absolute left-1/4"}
                                    variant={"h6"}>{currentId ? ` Editing ${post.title}` : `Creating a Memory`}</Typography>
                        <TextField className={"-bottom-1"} name={"creator"} variant={"outlined"} label={"Creator"}
                                   fullWidth
                                   value={postData.creator}
                                   onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
                        <TextField className={"-bottom-2"} name="title" variant="outlined" label="Title" fullWidth
                                   value={postData.title}
                                   onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                        <TextField className={"-bottom-3"} name="message" variant="outlined" label="Message" fullWidth
                                   multiline minRows={4}
                                   value={postData.message}
                                   onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                        <TextField className={"-bottom-4"} name="tags" variant="outlined" label="Tags (coma separated)"
                                   fullWidth
                                   value={postData.tags}
                                   onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>
                        <div className={"bottom-32 absolute "}>
                            <FileBase type="file" multiple={false}
                                      onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                        </div>
                        <Button className={"-bottom-20"} variant="contained" color="primary" size="large" type="submit"
                                fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth
                                className={"-bottom-24"}>Clear</Button>
                    </form>

                </Paper>
            </div>
        </>
    );
};

export default Form;