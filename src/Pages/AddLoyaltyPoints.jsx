import React, { useState } from 'react'
    
const AddLoyaltyPoints = () => {
    const [statusMode,setStatusMode] = useState('')
    return (
      <>
      <div className='p-4 space-y-6'>
      <div className='flex items-center lg:flex-row md:flex-row sm:flex-col sm:items-start justify-between gap-2 rounded-lg ring-1 p-4 ring-black/5'>
          <label htmlFor="order points" className='w-full'>
              <p className='font-semibold text-xsm'>Amount Off *</p>
          <input type="text" className='w-full p-2 bg-gray-100 outline-none focus:outline-none duration-500 hover:ring-green-300 hover:ring-1 hover:ring-black/5 text-xsm font-semibold' />
          </label>
          <label htmlFor="order points" className='w-full'>
              <p className='font-semibold text-xsm'>Loyality Point *</p>
          <input type="text" className='w-full p-2 bg-gray-100 outline-none focus:outline-none duration-500 hover:ring-green-300 hover:ring-1 hover:ring-black/5 text-xsm font-semibold' />
          </label>
  
      </div>
  
      <div>
          <p className='font-semibold text-xsm'>Status</p>
          <div className='checkboxforStatus flex gap-2 items-center'>
                  <span onClick={()=>{setStatusMode('Active')}} className={`font-semibold duration-500 cursor-pointer text-xsm bg-[#7bff95] p-2 px-6 text-white ${statusMode === 'Active' ? 'bg-green-700/50' : ''}`}>Active</span>
                  <span onClick={()=>{setStatusMode('Inactive')}} className={`font-semibold duration-500 cursor-pointer text-xsm bg-[#7bff95] p-2 px-6 text-white ${statusMode === 'Inactive' ? 'bg-green-700/50' : ''}`}>In-active</span>
          </div>
      </div>
  
      <div className='w-full flex items-end justify-end border-t border-black/5 pt-4 gap-2'>
          <button className='font-semibold duration-500 text-xsm bg-[#7bff95] text-white hover:bg-green-600 p-2 px-6'>Save</button>
          <button className='font-semibold duration-500 text-xsm bg-[#7bff95] text-white hover:bg-green-600 p-2 px-6'>Close</button>
      </div>
      </div>
      </>
    )
}

export default AddLoyaltyPoints


