import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const NavElement = ({value}) => {
    return (
        <Link to="/" className="hidden relative hover:text-blue-500 px-2 py-1 hover:bg-[#f4f1bb] rounded lg:flex justify-center items-center gap-2 font-semibold group">
            <p className="group-hover:text-blue-500">{value}</p>
            <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
    )
}

export default NavElement
