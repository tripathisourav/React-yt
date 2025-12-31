import React from 'react'

const Card = (props) => {
    return (
        <div className='h-full w-80 bg-amber-200 rounded-4xl relative overflow-hidden shrink-0'>
            <img className='h-full w-full object-cover object-center' src={props.user.img} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
                <h2 className='bg-white rounded-full text-2xl font-semibold h-14 w-14 flex items-center justify-center'>{props.id+1}</h2>
                <div>
                    <p className='text-lg leading-relaxed text-white mb-10 w-[90%]' >{props.user.intro}</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.user.tag}</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
