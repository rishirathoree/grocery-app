import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProducts = () => {
  const [value, setValue] = useState('');

  const[gstRate,setGstRate] = useState('')
  const[gstRateType,setGstRateType] = useState('')
  const[hsnRateType,setHSNRateType] = useState('')

  return (
    <>
          <div className="p-4 space-y-6">

          <div className='flex w-full gap-2'>
            <div className='w-full'><p className='font-semibold text-xsm'>Title</p>
            <input type="text" className='focus:ring-1 ring-green-500  lg:w-1/2 md:w-1/2 sm:w-full py-4 px-2 focus:outline-none outline-none bg-gray-100' /></div>
          </div>
          
          <div className='h-80 py-8'>
          <ReactQuill theme="snow" className='h-full' value={value} onChange={setValue} />
          </div>

          <div className='flex w-full gap-2'>

            <div className='w-full'><p className='font-semibold text-xsm'>Tags</p><input type="text" className='focus:ring-1 ring-green-500  lg:w-1/2 md:w-1/2 sm:w-full py-4 px-2 focus:outline-none outline-none bg-gray-100' /></div>
          </div>

          <label htmlFor="is-tax-enable-checkbox" className='flex items-center gap-4'>
            <input type="checkbox" className='w-6 h-6' />
            <p className='font-semibold text-xsm'>Is Tax Enable?</p>
          </label>

          <div className='flex items-center lg:flex-row md:flex-col sm:flex-col justify-between gap-4 w-full'>
          <div className='w-full'> 
            <p className='font-semibold text-xsm'>HSN Code</p>
            <input type="text" className='focus:ring-1 ring-green-500 w-full py-4 px-2 focus:outline-none outline-none bg-gray-100' />
          </div>
          <div className='w-full'> 
            <p className='font-semibold text-xsm'>GST Rate</p>
            <select className='bg-green-500 rounded hover:shadow-lg focus:outline-none selected:bg-green-300 focus:bg-slate-500 outline-none w-full font-semibold duration-500 text-xsm text-white px-6 py-4'>
              <option value="">GST Rate Type</option>
              <option value="">Inclusive</option>
              <option value="">Exclusive</option>
            </select>
          </div>
          <div className='w-full'> 
            <p className='font-semibold text-xsm'>HSN Code</p>
            <input type="text" className='focus:ring-1 ring-green-500 w-full py-4 px-2 focus:outline-none outline-none bg-gray-100' />
          </div>
          </div>

          <div>
            <p className='bg-gray-50 p-4'></p>
          </div>

          </div>
    </>
  )
}

export default AddProducts