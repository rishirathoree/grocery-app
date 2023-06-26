import React from 'react'
import Select from 'react-select'

const MakeNotification = () => {
    const Users = [
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Vegetables', label: 'Vegetables' },
    { value: 'Dairy', label: 'Dairy' }
  ]
  return (
    <div className='p-4 space-y-6'>
        <div className='flex items-center gap-4 justify-between'>
        <label htmlFor="title" className='w-full'>
            <p className='font-semibold text-xsm'>Title</p>
            <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none hover:ring-1 duration-500 rounded hover:ring-black/20' />
        </label>

        <label htmlFor="title" className='w-full'>
        <p className='font-semibold text-xsm'>Select for customer</p>
        <Select className='w-full' options={Users} />
        </label>
        </div>

        <div>
        <label htmlFor="title" className='w-full'>
        <p className='font-semibold text-xsm'>Notification Text</p>
        <textarea className='w-full h-80 bg-gray-50 outline-none focus:outline-none ring-1 ring-black/5'></textarea>
        </label>
        </div>

        <div>
        <label htmlFor="title" className='w-full flex gap-2'>
        <input type='checkbox' className='outline-none focus:outline-none' />
        <p className='font-semibold text-xsm'>Notification Text</p>
        </label>
        </div>

        <button className='px-6 py-2 bg-[#7bff95] text-black font-semibold text-xsm'>Send</button>
        <button className='px-6 py-2 bg-[#7bff95] text-black font-semibold text-xsm mx-2'>Clear</button>

    </div>
  )
}

export default MakeNotification