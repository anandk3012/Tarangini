import React from 'react'

const About = () => {
  return (
    <div className='px-4 my-5'>
        <hr className='border-[1px] border-gray-400 my-5' />
        <h1 className='w-full font-acme font-bold text-center text-[3rem]'>About Tarangini</h1>
        <p className='w-full font-libre text-[1.1rem] p-5'>Born out of a vision to transform the energy scenario in our communities, Tarangini is your one-stop solution for affordable, and sustainable solar power. Our goal: democratising clean energy for all.</p>
        <p className='w-full font-libre text-[1.1rem] p-5'>Our journey may have started with an idea, but the road ahead promises to be illuminated by the countless homes and businesses that join us in our mission.</p>

        <div className="w-full h-auto flex flex-wrap py-4">
            <div className='w-1/2 font-libre font-bold text-gray-700 text-[1.1rem] text-center p-2'>Zero Upfront Costs</div>
            <div className='w-1/2 font-libre font-bold text-gray-700 text-[1.1rem] text-center p-2'>Discounted Electricity Rates</div>
            <div className='w-1/2 font-libre font-bold text-gray-700 text-[1.1rem] text-center p-2'>Maintenance and Operation Free of Cost</div>
            <div className='w-1/2 font-libre font-bold text-gray-700 text-[1.1rem] text-center p-2'>Grid Connectivity Through Net Metering</div>
        </div>
        <hr className='border-[1px] border-gray-400 my-5' />
        <div className='w-full h-auto flex flex-col py-4'>
            <h1 className='w-full font-acme font-bold text-[3rem] text-center'>Join Today</h1>
            <p className='w-1/2 font-libre text-[1.1rem] text-center p-5 mx-auto' >Are you ready to be a part of the Solar Revolution? Earn your energy independence and step into the light with Tarangini.</p>
            <a href="/" className='w-[10rem] bg-green-700 rounded-sm font-libre text-white text-sm text-center p-2 mx-auto'>Start Your Journey</a>
        </div>
    </div>
  )
}

export default About