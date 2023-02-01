import React, {useEffect, useState} from 'react';
import Form from "./form/Form";
import Posts from "./posts/Posts";
import {AppBar, Container, Grid, Grow, TextField, Paper} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import {useDispatch} from "react-redux";
import {getPosts} from "../actions/posts";
import {useLocation,useNavigate} from "react-router";
//!useQuery
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    const handleAddChip = () => {

    };
    const handleKeyDown = () => {

    };
    const handleDelete = () => {

    }
    return (
        <>
          <div className={"flex w-full"}>
                            <Posts setCurrentId={setCurrentId}/>
                            {/*<AppBar className={""} position={"static"} color={"inherit"}>*/}
                            {/*    <TextField onKeyDown={handleKeyDown} name="search" variant="outlined"*/}
                            {/*               label="Search Memories" fullWidth value={search}*/}
                            {/*               onChange={(e) => setSearch(e.target.value)}/>*/}
                            {/*    <ChipInput*/}
                            {/*        style={{margin: '10px 0'}}*/}
                            {/*        value={tags}*/}
                            {/*        onAdd={(chip) => handleAddChip(chip)}*/}
                            {/*        onDelete={(chip) => handleDelete(chip)}*/}
                            {/*        label="Search Tags"*/}
                            {/*        variant="outlined"*/}
                            {/*    />*/}
                            {/*    <Button onClick={searchPost} className={classes.appBarSearch} variant="contained"*/}
                            {/*            color="secondary">Search</Button>*/}
                            {/*</AppBar>*/}
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>



          </div>
        </>
    );
};

export default Home;