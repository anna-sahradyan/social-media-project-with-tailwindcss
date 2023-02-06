import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH} from "../constants/actionTypes.js";
import * as api from "../api";

//?getPosts
export const getPosts = (page) => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data});
    } catch (err) {
        console.log(err.message)
    }


}
//?postSearch
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data});

    } catch (err) {
        console.log(err)
    }

}
//?createPost
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (err) {
        console.log(err)
    }
}
//?updatePost
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch (err) {
        console.log(err.message)
    }
}
//?deletePost
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } catch (err) {
        console.log(err)
    }
}
//?likePost
export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const {data} = await api.likePost(id, user?.token);
        dispatch({type: LIKE, payload: data})
    } catch (err) {
        console.log(err)
    }
}
