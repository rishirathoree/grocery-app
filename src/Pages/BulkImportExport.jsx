import React from 'react'

const BulkImportExport = () => {
  return (
    <>
    <div className='p-4 space-y-6'>
        <div>
            <p className='font-semibold text-red-500 mb-4 text-xsm'>Please download store data first before upload the excel file.</p>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2'>
            <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Upload Product Prices</button>
            <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Download Store Inventory</button>
            <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Delete All Inventory</button>
            <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Sample Inventory Sheet</button>
            <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Upload Product Images</button>
        </div>
        </div>

        <div className='bg-white rounded-lg shadow p-4'>
        <p className='font-semibold mb-4 text-xsm'>Upload Product Excel File.</p>
        
<div className="flex flex-col gap-4 items-start justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
    <button className='px-6 py-2 text-xsm hover:drop-shadow-lg duration-500 font-semibold bg-[#7bff95] text-black'>Submit</button>
</div> 

        </div>
    </div>
    </>
  )
}

export default BulkImportExport