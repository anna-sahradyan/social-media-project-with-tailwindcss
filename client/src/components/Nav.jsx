import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import {LOGOUT} from '../constants/actionTypes.js';
import decode from "jwt-decode";
const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    //?logout
    const logoutHandler = () => {
        dispatch({type:LOGOUT});
        navigate(`/`);
        setUser(null);

    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler ();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return (
        <>
            <div className={"flex  flex-row justify-between  items-center bg-blue-800 static"}>
                <Link to={`/`}>
                   <span
                       className={"flex justify-center items-center w-40 h-8 bg-white text-sx text-black rounded-sm ml-8 font-bold font-sans"}>
                Memories
                                </span>

                </Link>
                <Toolbar className={"flex w-96 justify-between items-center flex gap-50 relative -left-30"}>
                    {user?.result ? (<div>
                        <Typography className={"text-xl text-white left-1 absolute top-7"}>
                            {user?.result.name}
                        </Typography>
                        <Avatar className={"right-20 top-5"}
                                src={user?.result.imgUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Button  component={Link} to={`/auth`} variant="contained" color={"secondary"} className={"left-60 -top-6"}
                                onClick={logoutHandler}>Logout</Button>
                    </div>) : (<Button variant="contained" component={Link} to={`/auth`}
                                       className={"left-60 -top-0.5 text-white"}>Sign In</Button>)}
                </Toolbar>


            </div>
        </>

    )
        ;
};

export default Nav;