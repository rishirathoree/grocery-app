import React, { useState } from 'react'
import ReactQuill from "react-quill";
import Select from 'react-select'
const Editpages = () => {
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

        {selectValue === 'Terms & Condition' && 
        <div className="w-full h-80 rounded-">
        <p className="font-semibold text-xsm">Terms & Condition</p>
        <div className='mb-12'>
            <ReactQuill onChange={(e)=>{setQuillValue(e.target.value)}} className="h-60" />
        </div>
        
      <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500 hover:bg-green-600 duration-500'>Save</button>
      </div>
        }

{selectValue === 'Privacy Policy' && 
        <div className="w-full h-80 rounded-">
        <p className="font-semibold text-xsm">Privacy Policy</p>
        <div className='mb-12'>
            <ReactQuill onChange={(e)=>{setQuillValue(e.target.value)}} className="h-60" />
        </div>
        
      <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500 hover:bg-green-600 duration-500'>Save</button>
      </div>
        }


{selectValue === 'Shipping Charges Policy' && 
        <div className="w-full h-80 rounded-">
        <p className="font-semibold text-xsm">Shipping Charges Policy</p>
        <div className='mb-12'>
            <ReactQuill onChange={(e)=>{setQuillValue(e.target.value)}} className="h-60" />
        </div>
        
      <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500 hover:bg-green-600 duration-500'>Save</button>
      </div>
        }

{selectValue === 'Refund Policy' && 
        <div className="w-full h-80 rounded-">
        <p className="font-semibold text-xsm">Refund Policy</p>
        <div className='mb-12'>
            <ReactQuill onChange={(e)=>{setQuillValue(e.target.value)}} className="h-60" />
        </div>
        
      <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500 hover:bg-green-600 duration-500'>Save</button>
      </div>
        }
        
          

    </div>
  )
}

export default Editpages