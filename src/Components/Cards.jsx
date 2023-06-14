

import React, { useEffect, useRef } from 'react'

const Cards = () => {
    return (
    <>
    <div data-aos="fade-up" className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-between'>

        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Total Orders</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Delivered</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Total Earnings</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Total Customers</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>

        <div  className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Today Earning</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Yesterday Earnings</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Last 7 days earnings</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700/80 group-hover:text-white'>Last 30 days earnings</p>
            <p className='font-semibold text-xl group-hover:text-white text-gray-700'>+$44,563,35</p>
        </div>
        
    </div>
    </>
  )
}

export default Cards