import React, { useState } from 'react'
import Select from 'react-select'
const ReferEarn = () => {
  const [mesagge,setMessage] = useState('Signup with <%store_name%> using Referral Code <%user_refer_code%> and get <%discount%> discount on your first order. Code is valid for <%days%> days only. Shop Now <%store_url%>')
  const [notification,setNotification] = useState('Refer your Friend and Grab discount <%discount%> on your next order. Applicable only if referral code submitted after successful download.')
  return (
    <>
    <div className='p-4 space-y-6'>

        <div className='ring-1 rounded-lg ring-black/5'>
        <p className='font-semibold text-xsm p-2 bg-gray-100'>Refer & Earn Info</p>
        <div className='flex items-center'>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Discount (%) *</p>
        <input type="number" className='w-full p-2 bg-gray-50 focus:outline-none outline-none' />
        </div>
        </label>

        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Days Validity *</p>
        <input type="number" className='w-full p-2 bg-gray-50 focus:outline-none outline-none' />
        </div>
        </label>
        </div>
      </div>

      

      <div className='ring-1 ring-black/5  space-y-2 p-4 rounded-lg'>
        <p className='font-semibold text-xsm text-black'>{`Users' refer code = <%user_refer_code%>`}</p>
        <p className='font-semibold text-xsm text-black'>{`Discount (%) = <%discount%>`}</p>
        <p className='font-semibold text-xsm text-black'>{`Days Validity=<%days%>`}</p>
        <p className='font-semibold text-xsm text-black'>{`Store Name=<%store_name%>`}</p>
        <p className='font-semibold text-xsm text-black'>{`Store Url=<%store_url%>`}</p>
        <p className='font-semibold text-xsm text-black'>{`Example`}</p>
        <p className='font-semibold text-xsm text-black'>{`Signup with <%store_name%> using Referral Code <%user_refer_code%> and get <%discount%> discount on your first order. Code is valid for <%days%> days only. Shop Now <%store_url%>`}</p>
      </div>

      <div className='ring-1 ring-black/5 overflow-hidden rounded-lg'>
        <p className='font-semibold text-xsm p-2 bg-gray-200'>Shared Message</p>
        <div className='p-4'>
        <p className='font-semibold text-xsm p-2 bg-gray-200'>Message</p>
        <textarea value={mesagge} onChange={(e)=>{setMessage(e.target.value)}} className='w-full font-semibold text-xsm outline-none focus:outline-none ring-1 ring-black/5 h-40'></textarea>
        </div>
      </div>

      <div className='ring-1 ring-black/5 overflow-hidden rounded-lg'>
        <p className='font-semibold text-xsm p-2 bg-gray-200'>App Notification</p>
        <div className='p-4'>
        <p className='font-semibold text-xsm p-2 bg-gray-200'>Notification</p>
        <textarea value={mesagge} onChange={(e)=>{setNotification(e.target.value)}} className='w-full font-semibold text-xsm outline-none focus:outline-none ring-1 ring-black/5 h-40'></textarea>
        <button className='px-6 py-2 bg-green-500 text-white font-semibold text-xsm hover:bg-green-400 duration-500'>Save Notification</button>
        </div>
      </div>

      <div className='ring-1 ring-black/5 overflow-hidden rounded-lg'>
        <p className='font-semibold text-xsm p-2 bg-gray-200'>App Notification</p>
        <div className='p-4'>
        <div className='w-12 h-6 rounded-full group bg-green-500'>
        <div className='w-6 h-6 duration-300 group-hover:translate-x-7 bg-white rounded-full'></div>
        </div>
      </div>
      </div>

      <div className='flex items-end justify-end gap-2'>
        <button className='px-6 py-3 rounded hover:bg-green-600/80 duration-200 hover:scale-105 bg-green-500 text-xsm font-semibold text-white'>Save</button>
        <button className='px-6 py-3 rounded bg-slate-500 text-xsm font-semibold text-white'>Cancel</button>
      </div>

      

    </div>
    </>
  )
}

export default ReferEarn