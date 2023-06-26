import React from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
const AddFaq = () => {
    const categories = [
        {label:'Ordering',value:'Ordering'},
        {label:'Payments',value:'Payments'},
    ]
  return (
    <>
    <div className='p-4 space-y-6'>
    <Select className='lg:w-1/2 md:w-1/2 sm:w-full focus:outline-none outline-none' options={categories} />

    <div>
    <textarea className='w-full h-60 resize-none appearance-none bg-gray-100 outline-none focus:outline-none ring-1 ring-black/20' placeholder='Questions'/>
    </div>
    
    <div className='w-full'>
    <ReactQuill className='w-full h-full' />
    </div>
    
    <button className='bg-[#7bff95] text-white font-semibold text-xsm px-6 mr-2 hover:bg-green-600 py-2'>Save</button>
    <button className='bg-[#7bff95] text-white font-semibold text-xsm px-6 hover:bg-green-600 py-2'>Cancel</button>
   

    </div>
    </>
  )
}

export default AddFaq