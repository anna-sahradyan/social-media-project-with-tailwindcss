import React from 'react';
import Layout from "./components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
          <Layout className={"flex w-full "}>
              <ToastContainer/>


          </Layout>
        </>
    );
};

export default App;