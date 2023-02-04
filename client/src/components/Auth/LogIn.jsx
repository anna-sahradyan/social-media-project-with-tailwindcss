import React from 'react';
import {GoogleLogin} from "react-google-login";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {AUTH} from "../../constants/actionTypes.js";
const clientId = "406499424953-kdubc7qch2v7v1oglk3kkij7vf6l0u8l.apps.googleusercontent.com";
const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type: AUTH, data: {result, token}});

            navigate(`/`);
        } catch (err) {
            console.log(err)
        }
    }
    const onFailure = (error) => {
        console.log(error)
        toast.error("Google Sign In was unsuccessful. Try Again later")
    }
    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}

            />
        </>
    );
};

export default LogIn;