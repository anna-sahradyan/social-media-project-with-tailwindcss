import React, {useEffect, useRef, useState} from "react";
import {Container, Wrapper, Title, Form, Input, Agreement, Button, Link} from "../styledcomponents/loginStyle";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";


export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const userRef = useRef();
    // const content = isLoading ? <h1>Lading...</h1>:()
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {

        } catch (err) {
          console.log(err)
        }
    }

    //!
    useEffect(() => {

    }, [username, password])
    return (<>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handelSubmit}>
                    <Input placeholder={'username'} type={"text"} value={username}
                           ref={userRef}
                           autoComplete={"off"}

                           onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder={'password'} type={"password"} value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <Agreement>
                        By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                        POLICY</b>
                    </Agreement>
                    <Button type={"submit"}>LOG IN</Button>
                    <Link href={"/register"}>Dont have an account?
                    </Link>

                </Form>

            </Wrapper>
        </Container>
    </>)
}