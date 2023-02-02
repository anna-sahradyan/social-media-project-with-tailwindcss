import * as api from "../api";

//?getPosts
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (err) {
        console.log(err.message)
    }


}
//?createPost
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: "CREATE", payload: data});
    } catch (err) {
        console.log(err.message)
    }
}
//?updatePost
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: "UPDATE", payload: data});
    } catch (err) {
        console.log(err.message)
    }
}
