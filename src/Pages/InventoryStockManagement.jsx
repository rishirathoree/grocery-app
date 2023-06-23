import React, { useState } from 'react'

const InventoryStockManagement = () => {
    const [stockManageMent, setStockManageMent] = useState(false)
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='flex gap-4 flex-col'>
            <p className='font-semibold text-xsm'>Stock Management Setting</p>
            <div onClick={()=>{setStockManageMent(!stockManageMent)}} className={`w-20 h-10 flex items-center justify-center rounded-full duration-1000 shadow ${stockManageMent ? 'bg-green-500' : 'bg-red-500'}`}>
                <div className={`w-8 h-8  bg-white rounded-full flex items-center justify-center duration-1000 shadow-lg ${stockManageMent ? 'translate-x-5' : '-translate-x-5'}`}>
                    {/* <p className={`font-bold duration-700 text-lg ${stockManageMent ? 'text-black' : 'text-slate-100'}`}>{stockManageMent ? 'ON' : 'OFF'}</p> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InventoryStockManagement