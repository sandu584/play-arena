import React from 'react'
import { Link } from 'react-router-dom'


const BirthdayCard = ({ svg, title, image, description, }) => {
    return (
        <div className='mt-10 lg:w-80 lg:min-h-[540px] w-full h-full flex flex-col justify-between items-center'>
            <div>
                <div className='w-full flex justify-between items-center gap-4 text-3xl font-sora'>
                    <div className='flex justify-center items-center gap-4 text-3xl font-sor'>
                        <img
                            src={svg}
                            alt="Birthday Girl"
                        />
                        <h1>{title}</h1>
                    </div>
                    <Link
                        to="/"
                        className='block lg:hidden cursor-pointer'
                    >
                        <img src="https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black-line.svg" alt="Arrow" />
                    </Link>
                </div>
                <img
                    className='mt-6 border-t-4 border-black lg:mt-7 lg:w-80 w-full object-cover h-36'
                    src={image}
                    alt=""
                />
                <p
                    className='mt-4 lg:mt-6 font-sora text-base h-auto'
                >{description}
                </p>
            </div>

            <Link
                className='justify-self-end lg:flex justify-between items-center gap-4 bg-white p-4 rounded-xl font-semibold font-sora border border-black hover:bg-transparent transition-all duration-200 hover:bg-green-400 hidden'
            >
                <p>Find Out More</p>
                <img
                    src="https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black-line.svg" alt="Arrow"
                />
            </Link>
        </div>
    )
}

export default BirthdayCard
