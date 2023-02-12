import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    START_LOADING,
    END_LOADING,
    FETCH_POST,
    COMMENT,
} from "../constants/actionTypes.js";
import * as api from "../api";

//?getPosts
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data:{data,currentPage,numberOfPages}} = await api.fetchPosts(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: { data, currentPage, numberOfPages }});
        dispatch({type: END_LOADING});
    } catch (err) {
        console.log(err.message)
    }


}
//?getPost
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.fetchPost(id);
        dispatch({type: FETCH_POST, payload: {post: data}});
    } catch (err) {
        console.log(err.message)
    }


};



//?createPost
export const createPost = (post, navigate) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
        navigate(`/posts/${data._id}`)
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
;//?commentPost
export const commentPost = (value, id) => async (dispatch) => {
    try {
        const {data} = await api.comment(value, id);
        dispatch({type: COMMENT, payload: data});
        return data.comments;
    } catch (err) {
        console.log(err)
    }

}
