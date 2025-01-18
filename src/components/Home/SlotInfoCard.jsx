import React from 'react'

const SlotInfoCard = ({svgImage, title, info}) => {
    return (
        <div className='lg:w-full w-5/12 flex flex-col gap-1'>
            <div className='flex gap-2'>
                <img src={svgImage} alt="" />
                <p className='text-[#EDFFB3]'>{title}</p>
            </div>
            <p>{info}</p>
        </div>
    )
}

export default SlotInfoCard
