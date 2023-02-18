import React, {useEffect, useState} from 'react';
import {Avatar, Button, Grid, Paper, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {gapi} from "gapi-script"
import Input from "./Input";
import LogOut from "./LogOut";
import Login from "./LogIn"
import {useDispatch} from "react-redux";
import { useNavigate} from "react-router";
import {signin, signup} from "../../actions/auth.js";
const clientId = "677538970506-vbqk3q1u3edstpp27pflahbphohet8qm.apps.googleusercontent.com";
const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const
        [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);
    //?submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }

    }
    //?handleChange
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});


    }
    //?switchMode
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load("client:auth2", start)

    }, []);

    return (
        <>
            <div className={"w-full h-screen bg-gradient-to-tl from-blue-300 to green-500 relative"}>
                <img src={`/img/reg2.jpg`} alt={"bg"}
                     className={" w-full h-full py-0 object-cover absolute mix-blend-overlay -z-50 bg-indigo-500 "}/>

                <Paper elevation={3}
                       className={"w-[450px] h-[auto] mx-auto mt-20 bg-amber-50 rounded-xl shadow-amber-800 border-2"}>
                    <Avatar style={{background: "#F50057", margin: " 5px auto"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant={"h5"}
                                className={" text-center "}>{isSignup ? "Sign In" : "Sign In"}</Typography>
                    <form onSubmit={handleSubmit} className={"m-auto w-4/5"}>
                        <Grid container spacing={3}>
                            {isSignup && (
                                <>
                                    <Input name={"firstName"} label={"First Name"} handleChange={handleChange}
                                           autoFocus half classname={""}/>


                                    <Input name={"lastName"} label={"Last Name"}
                                           handleChange={handleChange}
                                           half/>
                                </>
                            )}
                            <Input name={"email"} label={"Email "} handleChange={handleChange} type={"email"}/>
                            <Input name={"password"} label={"Password"} handleChange={handleChange}
                                   type={showPassword ? "text" : "password"}
                                   handleShowPassword={handleShowPassword}/>
                            {isSignup &&
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}
                                       type="password"/>}
                        </Grid>
                        {/*/googleAccount*/}
                        <Grid className={"flex justify-between"}>
                            <Login/>
                            <LogOut/>
                        </Grid>

                        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"} className={"top-1"}>
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Button onClick={switchMode} className={" -top-0 left-[20%] "}>
                                    {isSignup ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </div>
        </>
    );
};

export default Auth;
