import React from 'react';
import {Link, NavLink} from "react-router-dom";

import {toast} from "react-toastify";

const Nav = () => {
    const isAuth = false;
    const activeStyles = {
        color: "white"
    }

    const logoutHandler = () => {
        // dispatch(logout())
        // window.localStorage.removeItem('token')
        // toast(`You have left from  system`);
    }
    return (
        <>
            <div
                className={"flex py-4 justify-between items-center bg-blue-800 static sm-bg-green-500 md:bg-red-500 lg:bg-pink-500 xl:bg-teal-700"}>
                <span
                    className={"flex justify-center items-center w-6 h-6 bg-white text-sx text-black rounded-sm ml-8 font-bold font-sans"}>
E
                </span>
                {isAuth &&
                    <div className={" absolute  left-40"}>
                        <ul className={"flex gap-40 "}>
                            <li><NavLink to={"/"}
                                         className={"text-sx text-black hover:text-white font-bold"}
                                         style={({isActive}) => isActive ? activeStyles : undefined}>Home</NavLink></li>
                            <li><NavLink to={"/post"} className={"text-sx text-black hover:text-white font-bold"}
                                         style={({isActive}) => isActive ? activeStyles : undefined}>My
                                Posts</NavLink></li>
                            <li><NavLink to={"/new"} className={"text-sx text-black hover:text-white font-bold"}
                                         style={({isActive}) => isActive ? activeStyles : undefined}>Add
                                Post</NavLink></li>
                        </ul>
                    </div>
                }

                <div
                    className={"flex justify-center items-center bg-white text-sx text-white rounded-sm px-4 absolute right-5"}>
                    {isAuth ?
                        (
                            <button onClick={logoutHandler} className={"text-black font-bold items-center "}>sign
                                out</button>) : (
                            <Link to={'/login'} className={"text-black font-bold items-center "}>Sign in </Link>
                        )}
                </div>


            </div>
        </>
    );
};

export default Nav;