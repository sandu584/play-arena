
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCall } from "react-icons/md";



const Header = () => {
    return (
        <header className='h-16 lg:h-20 w-full z-[100] bg-black fixed flex justify-center items-center p-3'>
            <nav className='h-full lg:w-3/4 w-full text-white px-6 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <GiHamburgerMenu className=' text-3xl hover:cursor-pointer lg:hidden' />
                    <Link to="/">
                        <img
                            src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg"
                            alt="Logo"
                            className='w-16 lg:w-auto'
                        />
                    </Link>
                </div>
                <div className='w-full md:w-3/6 flex justify-end gap-3 lg:justify-around items-center font-bold font-sora'>
                    <Link to="/" className="hidden lg:flex relative hover:text-blue-500 rounded px-2 py-1 hover:bg-gray-300 justify-center items-center gap-2 font-semibold group">
                        <p className="group-hover:text-blue-500">Play</p>
                        <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>


                    <Link to="/" className="hidden relative hover:text-blue-500 px-2 py-1 hover:bg-gray-300 rounded lg:flex justify-center items-center gap-2 font-semibold group">
                        <p className="group-hover:text-blue-500">Participate</p>
                        <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/" className="hidden relative hover:text-blue-500 px-2 py-1 hover:bg-gray-300 rounded lg:flex justify-center items-center gap-2 font-semibold group">
                        <p className="group-hover:text-blue-500">Host</p>
                        <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/" className="hidden relative hover:text-blue-500 px-2 py-1 hover:bg-gray-300 rounded lg:flex justify-center items-center gap-2 font-semibold group">
                        <p className="group-hover:text-blue-500">F&B</p>
                        <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <MdOutlineCall className='text-2xl lg:hidden' />
                    <Link to="/" className='text-2xl'><FaWhatsapp /></Link>
                    <Link to="/" className='text-2xl'><MdOutlineLocationOn />   </Link>
                </div>

            </nav>
        </header>
    )
}

export default Header

