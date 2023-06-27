import React, { useState } from 'react'

const OnlinePaymentStore = () => {
    const [activeOnlinePayment,setActiveOnlinePayment] = useState(false)

  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='flex  items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Active Online Payment</p>
        <div onClick={()=>setActiveOnlinePayment(!activeOnlinePayment)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${activeOnlinePayment ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${activeOnlinePayment ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='rounded'>
            <p className='font-semibold text-xsm p-4 bg-gray-50'>Razorpay Detail</p>
        <div className='form grid grid-cols-2 gap-4 p-4 '>
            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Key Id</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Secret Key</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

        </div>
        </div>

        <div className='shadow rounded'>
            <p className='font-semibold text-xsm p-4 bg-gray-50'>PhonePe Detail</p>
        <div className='form grid grid-cols-3 gap-4 p-4 '>
            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Merchant Id</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Salt Key</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Salt Key Index</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

        </div>
        </div>

        <div className='shadow rounded'>
            <p className='font-semibold text-xsm p-4 bg-gray-50'>Paytm Detail</p>
        <div className='form grid grid-cols-2 gap-4 p-4 '>
            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Merchant Id</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Secret Key</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

        </div>
        </div>

        <button className=' bg-[#7bff95] mr-2 font-semibold text-xsm px-6 py-2'>Save</button>
        <button className=' bg-[#7bff95] font-semibold text-xsm px-6 py-2'>Close</button>

    </div>
    </>
  )
}

export default OnlinePaymentStore