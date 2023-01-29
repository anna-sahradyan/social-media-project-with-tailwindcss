import React, {useEffect, useState} from "react";
import {Agreement, Button, Container, Form, Input, Link, Title, Wrapper} from "../styledcomponents/registerStyled";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {createUsers} from "../actions/userAction";

export const RegisterPage = () => {
    const [userData, setUserData] = useState({username: "", password: ""});

    const dispatch = useDispatch();
    // const {status} = useSelector(state => state.auth);
    // useEffect(() => {
    //     if(status)
    //     {
    //         toast(status);
    //     }
    // }, [status]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUsers(userData))
        console.log(userData)
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>REGISTER HERE</Title>
                    <Form onSubmit={handleSubmit}>
                        <Input placeholder={'username'} type={"text"} value={userData.username}
                               onChange={(e) => setUserData({...userData, username: e.target.value})}/>
                        <Input placeholder={'password'} type={"password"} value={userData.password}
                               onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button type={"submit"}>Confirm</Button>
                        <Link href={"/login"}>Have you already registered?
                        </Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}