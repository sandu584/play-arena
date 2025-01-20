import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const NavElement = ({ value, dropdownElements, firstElement }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 200);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative z-50"
        >
            <Link
                to="/"
                className="hidden relative hover:text-blue-500 px-2 py-1 hover:bg-[#f4f1bb] rounded lg:flex justify-center items-center gap-2 font-semibold group"
            >
                <p className="group-hover:text-blue-500">{value}</p>
                <IoIosArrowDown className="text-white group-hover:text-gray-600 transition-all duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Dropdown Animation on Hover */}
            <div
                ref={dropdownRef}
                className={`absolute -left-36 top-7 z-50 mt-2 bg-white bg-cover shadow-lg text-black rounded-lg flex min-w-max transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 transform translate-y-0 pointer-events-auto' : 'opacity-0 transform translate-y-2 pointer-events-none'} rounded-md p-1 border ${firstElement ? "flex-row" : "flex-col"}`}

            >
                {isHovered && firstElement && dropdownElements.map((elem, index) => (
                    <ul key={index} className='m-1 border border-black rounded bg-[#fff] bg-opacity-80 shadow-xl'>
                        <li className="flex justify-around items-center gap-4 mb-2 p-6 " style={{ backgroundColor: elem.bgColor }}>
                            <h3 className="font-semibold text-lg">{elem.heading}</h3>
                            {elem.svg && <img src={elem.svg} className='w-6 h-6' alt={elem.heading} />}
                        </li>
                        {elem.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="px-4 py-2 hover:text-sky-500">
                                <Link to="/" className="block text-sm">{link}</Link>
                            </li>
                        ))}
                    </ul>
                ))}

                {isHovered && !firstElement && dropdownElements.map((elem, index) => (
                    <ul key={index} className='m-1 p-3 bg-[#fff] border border-black rounded hover:text-blue-400 bg-opacity-80 shadow-xl flex flex-col'>
                        {
                            <li>
                                <Link to="/" className='w-64 flex flex-col gap-2'>
                                    <div className='flex justify-between'>
                                        <h3>{elem.heading}</h3>
                                        <img src={elem.svg} alt="" />
                                    </div>
                                    <p>{elem.description}</p>
                                </Link>
                            </li>
                        }
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default NavElement;
