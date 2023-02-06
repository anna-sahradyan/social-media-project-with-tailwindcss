import React, {useEffect, useState} from 'react';
import Form from "./form/Form";
import Posts from "./posts/Posts";
import {AppBar, Container, Grid, Grow, TextField, Paper, Button} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import {useDispatch} from "react-redux";
import {getPosts, getPostsBySearch,} from "../actions/posts";
import {useLocation, useNavigate} from "react-router";
import Pagination from "./Pagination";


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
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");





    const handleAddChip = (tag) => setTags([...tags, tag]);


    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({search, tags: tags.join(",")}));
            navigate(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`)
        } else {
            navigate(`/`)
        }
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchPost()
        }

    };

    return (<>
        <div className={"flex w-full "}>
            <Posts setCurrentId={setCurrentId}/>
            <div className={"w-96 absolute right-2 top-20"}>
                <AppBar className={""} position={"static"} color={"inherit"}>
                    <TextField onKeyDown={handleKeyDown} name="search" variant="outlined" label="Search Memories"
                               fullWidth value={search}
                               onChange={(e) => setSearch(e.target.value)}/>
                    <ChipInput
                        style={{margin: '10px 0'}}
                        value={tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDelete(chip)}
                        label="Search Tags"
                        variant="outlined"
                    />
                    <Button onClick={searchPost} variant="contained"
                            color="secondary">Search</Button>
                </AppBar>
            </div>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Paper elevation={6} className={"absolute w-96 h-10 bottom-80 right-2"}>
                <Pagination page={page}/>
            </Paper>


        </div>
    </>);
};

export default Home;