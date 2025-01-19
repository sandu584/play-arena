import React from 'react'

const InfiniteSlider = () => {

    const slidingSvgs = [
        "https://playarena.in/wp-content/uploads/2024/05/Pixel-Symbol.svg",
        "https://playarena.in/wp-content/uploads/2024/05/Studio-Symbol.svg",
        "https://playarena.in/wp-content/uploads/2024/05/Prime-Symbol.svg",
        "https://playarena.in/wp-content/uploads/2024/05/Union-Symbol.svg",
        "https://playarena.in/wp-content/uploads/2024/05/Junior-Symbol.svg",
    ]

    return (
        < div className='h-12 w-full bg-[#EDFFB3] m-auto text-xl font-normal flex justify-between items-center space-x-16 overflow-hidden' >
            <div className='flex min-w-72 justify-around animate-loop-scroll'>
                <img src="https://playarena.in/wp-content/uploads/2024/05/Pixel-Symbol.svg" className='w-4' alt="" />
                <p>For the love of play</p>
            </div>

            <div className='flex min-w-72 justify-around animate-loop-scroll'>
                <img src="https://playarena.in/wp-content/uploads/2024/05/Studio-Symbol.svg" className='w-4' alt="" />
                <p>For the love of play</p>
            </div>

            <div className='flex min-w-72 justify-around animate-loop-scroll'>
                <img src="https://playarena.in/wp-content/uploads/2024/05/Prime-Symbol.svg" className='w-4' alt="" />
                <p>For the love of play</p>
            </div>

            <div className='flex min-w-72 justify-around animate-loop-scroll'>
                <img src="https://playarena.in/wp-content/uploads/2024/05/Union-Symbol.svg" className='w-4' alt="" />
                <p>For the love of play</p>
            </div>

            {/* {
            slidingSvgs.map((svg, index) => (
                <div key={index} className='w-full flex justify-around items-center animate-loop-scroll'>
                    <img src={svg} alt="" className='w-3' />
                    <p className='font-sora'>For the love of play</p>
                </div>
            ))
        } */}
        </div >
    )
}

export default InfiniteSlider