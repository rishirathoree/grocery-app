import React, { useState } from 'react'

const StoreTimeManagement = () => {
    const [storeTimingTwentyFourSeven,setStoreTimingTwentyFourSeven] = useState(false)
  return (
    <div className='p-4'>
        <div className='p-4 rounded-lg shadowCustom space-y-6'>

        <div className='flex items-center justify-between gap-8'>
        <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Is your store 24 X 7 open to take orders ?</p>
        <div onClick={()=>setStoreTimingTwentyFourSeven(!storeTimingTwentyFourSeven)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeTimingTwentyFourSeven ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
        <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeTimingTwentyFourSeven ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div>
        <p className='font-semibold text-slate-400 text-xsm'>Open Hours from and to field (time duration)</p>
        <div className='grid lg:grid-cols-2 py-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            
        <label htmlFor="Open Hours from" className='w-full'>
                <p className='font-semibold text-xsm'>Open Hours from</p>
                <input type="time" placeholder='select' className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Open Hours to" className='w-full'>
                <p className='font-semibold text-xsm'>Open Hours to</p>
                <input type="time" placeholder='select' className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        </div>
        </div>

        <button className='bg-[#7bff95] p-2 rounded text-xsm font-semibold'>Save</button>

        </div>
    </div>
  )
}

export default StoreTimeManagement