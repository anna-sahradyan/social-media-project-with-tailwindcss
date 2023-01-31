import React, {useState} from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import FileBase from "react-file-base64";

const Form = ({currentId, setCurrentId, post}) => {
    const user = false;
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {

        } else {

        }
    }
    const clear = () => {

    }
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

            <Paper elevation={6} className={"w-96 right-2 absolute mt-10"}>
                <form noValidate onSubmit={handleSubmit} className={"flex flex-wrap m-10"}>
                    <Typography variant={"h6"}>{currentId ? ` Editing "${post}"` : `Creating a Memory`}</Typography>
                    <TextField name={"creator"} variant={"outlined"} label={"Creator"} fullWidth value={post}
                               onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
                               onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4}
                               value={postData.message}
                               onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                    <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth
                               value={postData.tags}
                               onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>
                    <div>
                        <FileBase type="file" multiple={false}
                                  onDone={({base64}) => setPostData({...postData, selectedFile: base64})}></FileBase>
                    </div>
                    <Button className={"-bottom-1"} variant="contained" color="primary" size="large" type="submit"
                            fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth className={"-bottom-2"}>Clear</Button>
                </form>

            </Paper>

        </>
    );
};

export default Form;