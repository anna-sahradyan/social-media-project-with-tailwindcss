import React from 'react';
import {Link  } from "react-router-dom";
import {toast} from "react-toastify";
import {Avatar, Button, Toolbar, Typography} from "@material-ui/core";

const Nav = () => {

    const logoutHandler = () => {
        // dispatch(logout())
        // window.localStorage.removeItem('token')
        toast(`You have left from  system`);
    }
    const isAuth = true;
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
                    {isAuth ?(<div>
                        <Typography className={"text-xl text-white left-1 absolute top-7"}>
                            name
                        </Typography>
                        <Avatar className={"right-20 top-5"} src={'/img/avatar.png'}>Avatar</Avatar>
                        <Button variant="contained" color={"secondary"} className={"left-60 -top-6"}>Logout</Button>
                    </div>):(<Button variant="contained" component={Link} to={`/auth`} className={"left-60 -top-0.5 text-white"}>Sign In</Button>)}
                </Toolbar>


            </div>
        </>

    )
        ;
};

export default Nav;