import React from "react";
import Header from '../partials/Header'
import Navbar from '../partials/Navbar'

const Template = ({children, pages, activePage, onChangePage}) => {

    const title = pages[activePage].text
    return (
        <>
            <Header title= {title} />
            <Navbar pages={pages} onChangePage={onChangePage} />
            {children}
        
        </>
    )
}

export default Template