import React from 'react'

const SocialMediaManagement = () => {
  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='shadow rounded'>
            <p className='font-bold text-slate-500 text-lg p-4 bg-gray-50'>Store Social Links</p>
        <div className='form grid grid-cols-3 gap-4 p-4 '>
            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Store's Facebook Link</p>
                <input type="text" value={`https://www.facebook.com/QuickBasket.Store`} className='p-2 bg-gray-50 font-medium text-xsm w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Store's Twitter Link</p>
                <input type="text" className='p-2 bg-gray-50 font-medium text-xsm w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Store's Instagram Link</p>
                <input type="text" value={`https://www.instagram.com/quickbasket.store/`} className='p-2 bg-gray-50 font-medium text-xsm w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Store's Linkedin Link</p>
                <input type="text" className='p-2 bg-gray-50 font-medium text-xsm w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Youtube Link</p>
                <input type="text" className='p-2 bg-gray-50 font-medium text-xsm w-full outline-none focus:outline-none'/>
            </label>

        </div>
        </div>

        <button className=' bg-[#7bff95] mr-2 font-semibold text-xsm px-6 py-2'>Save</button>


    </div>
    </>
  )
}

export default SocialMediaManagement