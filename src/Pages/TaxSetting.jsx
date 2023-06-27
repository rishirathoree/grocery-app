import React, { useState } from 'react'

const TaxSetting = () => {
    const [taxSetting,setTaxSetting] = useState(false)
  return (
    <div className='p-4 space-y-6'>
        

        {/* tax setting on/off  */}
        <div className='flex items-center justify-between gap-8'>
        <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Tax Setting</p>
        <div onClick={()=>setTaxSetting(!taxSetting)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${taxSetting ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
        <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${taxSetting ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        {taxSetting && 
        <div className='grid grid-cols-3 gap-4'>
        <label htmlFor="GST Number" className='w-full'>
                <p className='font-semibold text-xsm'>GST Number</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="GST State" className='w-full'>
                <p className='font-semibold text-xsm'>GST State</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>
        </div>}

    </div>
  )
}

export default TaxSetting