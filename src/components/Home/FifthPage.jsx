import React from 'react'

const FifthPage = () => {
    return (
        <section className='min-h-[420px] h-auto w-full bg-fifth-page-bg-img bg-cover bg-center object-cover font-sora bg-[#E8E8E8] flex justify-center items-center'>

            <div className='min-h-[300px] w-full flex lg:flex-nowrap flex-wrap justify-center items-center'>


                <div className='max-w-[1160px] w-full h-full px-10 flex lg:flex-nowrap flex-wrap justify-between items-center gap-6'>
                    
                    <div className='lg:h-full h-auto lg:w-[290px] w-full flex flex-col lg:justify-around justify-start gap-2 items-around'>
                        <h1 className='lg:text-6xl text-4xl font-black'>Play like a Pro</h1>
                        <p className='w-full text-base' >We call this our Royalty Programme.</p>
                        <button className='lg:flex justify-around w-full items-center bg-[#0371E6] py-4 rounded-lg font-medium  text-white hidden'>
                            <p>Become a Member</p>
                            <img src="https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-white.svg" className='w-3' alt="" />
                        </button>
                    </div>


                    <div className='h-full min-h-[300px] flex gap-6 text-center lg:flex-nowrap flex-wrap'>
                        <div className='h-full lg:w-48 w-full flex lg:flex-col justify-start items-center gap-4'>
                            <img className='mb-3' src="https://playarena.in/wp-content/uploads/2024/05/Skip-the-Queue.svg" alt="" />
                            <div className='flex flex-col justify-center items-start'>
                                <h1 className='mb-3 text-xl font-black'>SKIP THE QUEUE</h1>
                                <p>No ticketing. Just load your card and go play.</p>
                            </div>
                        </div>

                        <div className='h-full lg:w-48 w-full flex lg:flex-col justify-start lg:justify-end items-center gap-4'>
                            <img className='mb-3' src="https://playarena.in/wp-content/uploads/2024/05/Treats-on-us.svg" alt="" />
                            <div className='flex flex-col justify-center items-start'>
                                <h1 className='mb-3 text-xl font-black'>TREATS ON US</h1>
                                <p>Get exclusive offers across our F&B outlets</p>
                            </div>
                        </div>

                        <div className='h-full lg:w-48 w-full flex lg:flex-col justify-start items-center gap-4'>
                            <img className='mb-3' src="https://playarena.in/wp-content/uploads/2024/05/Big-Discounts.svg" alt="" />
                            <div className='flex flex-col justify-center items-start'>
                                <h1 className='mb-3 text-xl font-black'>BIG DISCOUNTS</h1>
                                <p>The more you load the bigger your discounts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FifthPage
