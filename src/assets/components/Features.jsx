import React from 'react'
import data from '../data/homedata'

const Features = () => {
    return (
        <div>
            <hr className='border-[1px] border-gray-400 my-5' />
            {data.map((info) => {
                return (
                    <div className='w-3/4 h-auto flex justify-center p-5'>
                        <div className='w-1/2 mx-auto'>
                            <h1 className='font-acme text-[2.4rem] leading-10 pb-5'>{info.heading}</h1>
                            <p className='font-libre text-[1rem]'>{info.text}</p>
                        </div>
                        {/* <div className="images w-1/2">
                            images
                        </div> */}
                    </div>
                )
            })}

        </div>
    )
}

export default Features