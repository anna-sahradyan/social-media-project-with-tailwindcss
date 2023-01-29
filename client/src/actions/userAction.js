import * as api from "../api/index";


export const createUsers = (user) => async (dispatch) => {
    try {
        const {data} = await api.createUsers(user);
        dispatch({type: "CREATE", payload: data})
    } catch (err) {
        console.log(err)
    }
}