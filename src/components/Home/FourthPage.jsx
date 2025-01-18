import React from 'react'
import SlotInfoCard from './SlotInfoCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FourthPage = () => {

    return (
        <section className='h-auto w-full bg-teal-800'>
            <div className='w-full px-5 font-sora bg-black h-[450px] text-white flex justify-center items-center'>


                <div className='max-w-[1080px] w-full lg:h-[290px] h-auto flex flex-col justify-between items-start'>
                    <h1 className='md:text-6xl text-5xl font-black mb-4'>Book your slots</h1>
                    <p className='font-semibold mb-6'>To find special offers, occupancy rates and free time</p>
                    <div className='flex lg:flex-nowrap flex-wrap justify-start gap-6 items-center w-full'>
                        <input
                            type="date"
                            name=""
                            id=""
                            className='md:w-1/2 w-full max-w-1/2 text-black text-xl p-3 outline-none rounded mb-2 bg-[#EDFFB3]'
                        />
                        <p className='text-gray-400 lg:text-white'>Average wait time 5-10mins, <br /> pre booking activities is recommended</p>
                    </div>

                    {/* plan you day at */}
                    <div className='w-full mt-6 flex gap-3 flex-col lg:flex-row lg:flex-nowrap flex-wrap lg:justify-around justify-start'>
                        <h2 className='font-bold text-lg'>PLAN YOUR DAY AT PLAY</h2>
                        <div className='m-2 lg:border-r-2 lg:block hidden'></div>

                        <div className='w-full h-auto flex lg:flex-nowrap flex-wrap justify-between gap-8'>
                            {/* 4 div's has to inserted here */}
                            <SlotInfoCard
                                svgImage="https://playarena.in/wp-content/uploads/2024/05/Activites-Icon.svg"
                                title="Activities"
                                info="6:00 AM – 11:00 PM"
                            />

                            <SlotInfoCard
                                svgImage="https://playarena.in/wp-content/uploads/2024/05/FB-Icon.svg"
                                title="F&B Timings"
                                info="10:00 AM – 11:00 PM"
                            />

                            <SlotInfoCard
                                svgImage="https://playarena.in/wp-content/uploads/2024/05/Vehicles-Icon.svg"
                                title="Personal Vehicles"
                                info="Parking Available"
                            />

                            <SlotInfoCard
                                svgImage="https://playarena.in/wp-content/uploads/2024/05/Nearest-Metro-Icon.svg"
                                title="Nearest metro"
                                info="Silk Board (Yellow Line)"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FourthPage
