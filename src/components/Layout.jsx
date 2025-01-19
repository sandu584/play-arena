import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer.jsx'

const Layout = () => {
    return (
        <div className='h-full w-full bg-cyan-300 flex flex-col'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
