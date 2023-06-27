import React, { useState } from 'react'
const DeliverySlotSetting = () => {
    const [storeInstatntDeliveryAvailableForOrder,setStoreInstatntDeliveryAvailableForOrder] = useState(false)
    const [bufferTimeStart,setbufferTimeStart] = useState(false)

  return (
    <div className='p-4'>
        <div className='p-4 rounded-lg shadowCustom space-y-6'>

        <div className='flex items-center justify-between gap-8'>
        <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Store provides instant delivery of the orders.?</p>
        <div onClick={()=>setStoreInstatntDeliveryAvailableForOrder(!storeInstatntDeliveryAvailableForOrder)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeInstatntDeliveryAvailableForOrder ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
        <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeInstatntDeliveryAvailableForOrder ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div>
        <p className='font-semibold text-slate-400 text-xsm'>Set Order Buffer time</p>
        <div className='grid lg:grid-cols-2 py-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            
        <label htmlFor="Open Hours from" className='w-full'>
                <p className='font-semibold text-xsm'>Open Hours from</p>
                <input type="time" placeholder='select' className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Open Hours to" className='w-full'>
                <p className='font-semibold text-xsm'>Open Hours to</p>
                <input type="time" placeholder='select' className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        </div>

        {/* Buffer time start on off */}
        <div className='flex my-4 items-center justify-between gap-8'>
        <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Store provides instant delivery of the orders.?</p>
        <div onClick={()=>setbufferTimeStart(!bufferTimeStart)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${bufferTimeStart ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
        <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${bufferTimeStart ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>
        </div>

        <div className='space-y-4'>
        <label htmlFor="Max Orders in a slot" className='w-full'>
                <p className='font-semibold text-xsm'>Max Orders in a slot</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <button className='bg-[#7bff95] p-2 rounded text-xsm font-semibold'>Add Slot</button>

        </div>



        <button className='bg-[#7bff95] p-2 rounded text-xsm font-semibold'>Save</button>

        </div>
    </div>
  )
}

export default DeliverySlotSetting