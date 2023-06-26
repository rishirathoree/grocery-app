import React, { useState } from 'react'
import ReactQuill from "react-quill";
import Select from 'react-select'
const AddPages = () => {
    const [quillValue,setQuillValue] = useState('')
    const [selectValue,setSelectValue] = useState('')

    const selectOption = [
        {value:'Terms & Condition', label:'Terms & Condition'},
        {value:'Shipping Charges Policy', label:'Shipping Charges Policy'},
        {value:'Privacy Policy', label:'Privacy Policy'},
        {value:'Refund Policy', label:'Refund Policy'},
    ]

  return (
    <div className='p-4 space-y-6'>

        <Select className='font-semibold text-xsm' onChange={(e)=>{setSelectValue(e.value)}} options={selectOption} />

       <div className="w-full h-80">
        <p className="font-semibold text-xsm">Terms & Condition</p>
        <div className='mb-4'>
            <ReactQuill onChange={(e)=>{setQuillValue(e.target.value)}} className="" />
        </div>
        
      <button className='px-6 py-2 text-xsm font-semibold text-white bg-[#7bff95] hover:bg-green-600 duration-500'>Save</button>
      </div>

    </div>
  )
}

export default AddPages