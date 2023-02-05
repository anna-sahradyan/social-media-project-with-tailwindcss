import {FETCH_ALL, CREATE,LIKE, UPDATE, DELETE} from "../constants/actionTypes.js";

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case LIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
};