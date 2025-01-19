import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCall } from "react-icons/md";
import NavElement from './NavElement';

const Header = () => {
    return (
        <header className='h-14 lg:h-20 w-full z-[100] bg-black fixed flex justify-center items-center p-4 overflow-hidden'>
            <nav className='h-full max-w-[1080px] w-full text-white px-6 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <GiHamburgerMenu className='text-xl hover:cursor-pointer lg:hidden' />
                    <Link to="/">
                        <img
                            src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg"
                            alt="Logo"
                            className='w-14 lg:w-auto'
                        />
                    </Link>
                </div>

                <div className='w-full md:w-3/6 flex justify-end gap-3 lg:justify-around items-center font-bold font-sora'>
                    <NavElement value="Play" />
                    <NavElement value="Participate" />
                    <NavElement value="Host" />
                    <NavElement value="F&B" />

                    <MdOutlineCall className='text-2xl lg:hidden' />
                    <Link to="/" className='text-2xl'><FaWhatsapp /></Link>
                    <Link to="/" className='text-2xl'><MdOutlineLocationOn /> </Link>
                </div>
            </nav>
        </header>

    )
}

export default Header