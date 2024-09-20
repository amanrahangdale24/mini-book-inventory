import React from 'react'
import {ReactTyped} from 'react-typed'
import BannerCard from '../home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40 '>
{/* left side  */}

        <div className='md:w-1/2 space-y-8 h-full' >
        <h1 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <ReactTyped className='text-5xl font-bold leading-snug text-blue-700' strings={["For the Best Prices"] } typeSpeed={40} backSpeed={50} /> </h1>
        
        <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae animi temporibus culpa vero, veritatis, accusamus in reiciendis laudantium maiores provident voluptate officiis quo neque.</p>
        <div>
            <input className='py-2 px-2 rounded-sm outline-none ' type="search" placeholder='Search a Book' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition ease-in duration-300'>Search</button>
        </div>
        </div>

    {/* rightside */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
