import React from 'react';
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={"flex w-full justify-between  items-stretch"}>
            {children}
            </div>
        </>
    );
};

export default Layout;