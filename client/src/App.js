import React from 'react';
import Layout from "./components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Navigate, Route, Routes} from "react-router";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/PostDetails";
import CreatorOrTag from "./components/CreatorOrTag";
import Auth from "./components/Auth";
import Home from "./components/Home";


const App = () => {
    const user = false;
    return (<>
        <Layout className={"flex w-full "}>
            <ToastContainer/>
            <Routes>
                <Route path={"/posts"} element={<Home/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={`/posts/search`} element={<Posts/>}/>
                <Route path={`/posts/:id`} element={<PostDetails/>}/>
                <Route path={'/creators/:name'} element={<CreatorOrTag/>}/>
                <Route path={`/tags/:name`} element={<CreatorOrTag/>}/>
                <Route
                    path="/auth"
                    element={!user ? <Auth/> : <Navigate replace to="/posts"/>}
                />


            </Routes>
            {/*<Posts/>*/}
        </Layout>
    </>);
};

export default App;