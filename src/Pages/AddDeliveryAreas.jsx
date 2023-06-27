import React from 'react'

const AddDeliveryAreas = () => {
  return (
    <div className='p-4'>
        <div className='shadowCustom p-4 rounded-lg'>
        <div className='space-y-4'>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <label htmlFor="Zone" className='w-full'>
                <p className='font-semibold text-xsm'>Zone</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>
        
        <label htmlFor="Delivery Area Name" className='w-full'>
                <p className='font-semibold text-xsm'>Delivery Area Name</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Minimum Order Amount" className='w-full'>
                <p className='font-semibold text-xsm'>Minimum Order Amount</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="shipping fee" className='w-full'>
                <p className='font-semibold text-xsm'>Shipping fee</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        </div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <label htmlFor="Do not allow customers to place order below min order amount " className='w-full flex items-center gap-2'>
                <p className='font-semibold text-xsm'>Do not allow customers to place order below min order amount </p>
                <input type="radio" className=''/>
        </label>
        
        <label htmlFor="Charge Shipping Fee above min order amount too" className='w-full flex items-center gap-2'>
                <p className='font-semibold text-xsm'>Charge Shipping Fee above min order amount too</p>
                <input type="radio" className=''/>
        </label>

        </div>

        <div>
            <textarea className='h-80 w-full focus:outline-none outline-none ring-1 ring-black/5 rounded bg-gray-50 p-2 font-medium text-xsm'></textarea>
        </div>

        <div className='flex justify-end gap-2'>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Save</button>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Close</button>
        </div>

        

        </div>
        </div>
    </div>
  )
}

export default AddDeliveryAreas