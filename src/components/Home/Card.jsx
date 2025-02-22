import React from 'react'
import { useCard } from '../../store/CardContextProvider'

const Card = ({ id, svg, title, description, gamesNo, bgColor, activeCardId }) => {

    const { setId } = useCard();
    const isActive = id === activeCardId;

    return (
        <div
            onMouseEnter={(e) => setId(id)}
            key={id}
            id={id}
            className={`relative min-w-[190px] w-full h-64 isolate aspect-video rounded-sm shadow-red-500 ring-1 ring-black/5 p-[1.8rem] border-2 border-[#c3c6ce] overflow-hidden transition-all duration-300 ease-out group ${isActive ? '-translate-y-28' : ''} group-hover:-translate-y-28 justify-between gap-3 items-start flex-col lg:flex hidden`}
            style={{ backgroundColor: bgColor }}
        >
            <div className='flex flex-col justify-start items-center gap-2'>
                <div className='flex justify-start  gap-3 w-full'>
                    <img src={svg} className='w-6' alt="" />
                    <p className="text-3xl font-bold">{title}</p>
                </div>
                <p className="text-gray-500">{description}</p>
            </div>
            <button className='bg-[#0371E6] flex justify-around items-center w-full py-3 rounded-xl text-white font-semibold'>
                <p>View All {gamesNo} Activities</p>
                <img src="https://playarena.in/wp-content/themes/playarena.in/img/button-arrow.svg" alt="" />
            </button>
        </div>

    )
}

export default Card