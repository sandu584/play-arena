import React from 'react'

const Button = ({svg, value}) => {
    return (
        <button className="bg-[#0371E6] flex justify-between px-3 items-center max-w-3/4 w-full py-3 rounded-lg text-white font-medium">
            <p className='text-base'>{value}</p>
            <img src={svg} alt="Arrow" />
        </button>
    )
}

export default Button
