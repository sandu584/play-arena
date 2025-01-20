import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCall } from "react-icons/md";
import NavElement from './NavElement';

const Header = () => {

    const playElement = [
        {
            heading: "Pixel",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/pixel.svg",
            bgColor: "#D1EBD8",
            links: [
                "Car Simulator",
                "Cricket Simulator",
                "Lazermaze",
                "7D Theatre",
                "VR Escape",
                "VR Coaster"
            ]
        },
        {
            heading: "Studio",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/studio.svg",
            bgColor: "#E8E8E8",
            links: [
                "Archery",
                "Rope Course",
                "Rocket Ejector",
                "Climbing",
                "Trampoline",
                "Shooting",
                "Carnival Games"
            ]
        },
        {
            heading: "Union",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/union.svg",
            bgColor: "#B3F0FF",
            links: [
                "The Field",
                "Badminton",
                "Basketball",
                "Cricket Nets",
                "Swimming Pool",
                "Skate Park",
                "Gym"
            ]
        },
        {
            heading: "Prime",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/prime.svg",
            bgColor: "#EDFFB3",
            links: [
                "Gokarting",
                "Bowling",
                "Lasertag",
                "Paintball",
                "Off Road ATV",
                "Bumper Cars",
                "Virtual Verve"
            ]
        },
        {
            heading: "Junior",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/junior.svg",
            bgColor: "#CBDED4",
            links: [
                "Little Gym",
                "Soft Play",
            ]
        },
    ];

    const participateElements = [
        {
            heading: "Learn & Master",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Join one of our academics to learn And master a sport."
        },
        {
            heading: "Events at PLaY",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Join the community to celebrate special moments Screenings..."
        },
    ];

    const hostElements = [
        {
            heading: "Birthdays at PLaY",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Celebrate Memorable Birthdays Here!"
        },
        {
            heading: "Corporate events",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Dynamic events and experiences"
        },
        {
            heading: "Perfect Dates at PLaY",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Connecting with or without a reason to celebrate"
        },
        {
            heading: "Play your Event",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "Fill out a form to make an enquiry"
        },
    ];

    const fabElements = [
        {
            heading: "Food Court",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "From tasty continental bites to refreshing sips, dive into a fun- filled flavor fest"
        },
        {
            heading: "Restaurant",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black.svg",
            description: "From tasty continental bites to refreshing sips, dive into a fun- filled flavor fest that's sure to satisfy your cravings"
        },
    ];

    return (
        <header className='h-14 lg:h-20 w-full bg-black fixed z-[100] flex justify-center items-center p-4'>
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
                    <NavElement
                        value="Play"
                        dropdownElements={playElement}
                        firstElement={true}
                        />
                    <NavElement
                        value="Participate"
                        dropdownElements={participateElements}
                        firstElement={false}
                        />
                    <NavElement
                        value="Host"
                        dropdownElements={hostElements}
                        firstElement={false}
                        />
                    <NavElement
                        value="F&B"
                        dropdownElements={fabElements}
                        firstElement={false}
                    />

                    <MdOutlineCall className='text-2xl lg:hidden' />
                    <Link to="/" className='text-2xl'><FaWhatsapp /></Link>
                    <Link to="/" className='text-2xl'><MdOutlineLocationOn /> </Link>
                </div>
            </nav>
        </header>

    )
}

export default Header