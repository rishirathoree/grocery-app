import React, { useState } from 'react'
import Select from 'react-select'
const AddBanner = () => {
    const [bannerImage,setBannerImage] = useState(null)
    const [linkToOption,setlinkToOption] = useState(null)
    const [Status,setStatus] = useState(null)
    const bannerType = [    
        { value: 'Fruits', label: 'Fruits' },
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Dairy', label: 'Dairy' }]

        const handleChangeInputImage = (e) => {
            const file = e.target.files[0]
            if(file){
                const reader = new FileReader
                reader.onload = () => {
                    setBannerImage(reader.result)
                }
                reader.readAsDataURL(file)
            }
        }
  return (
    <>
    <div className='p-4 space-y-6'>
    <div>
    <Select className='font-semibold text-xsm lg:w-1/2 md:w-1/2 sm:w-full' options={bannerType} />
    </div>
    
    <div>
    <label htmlFor="imageCaption">
    <p className='font-semibold text-xsm'>Image Caption</p>
    <input type="text" className='lg:w-1/2 md:w-1/2 sm:w-full focus:ring-1 focus:ring-black/5 p-2 bg-gray-100 focus:outline-none outline-none' />
    </label>
    </div>

    {!bannerImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Add Image</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <i className='bx bx-lg bx-image-add'></i>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload Image</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input onChange={handleChangeInputImage} id="dropzone-file" type="file" className="hidden" />
          </label>
          </div> 
          )
          :
          (
          <div className='overflow-hidden relative rounded-lg w-full h-80 shadow-xl'>
            <i onClick={()=>{setBannerImage(null)}} className='absolute top-2 rounded-full right-2 bg-white cursor-pointer bx bx-trash p-2'></i>
            <img src={bannerImage} className='w-full h-full object-cover' alt="" />
          </div> 
          )
          }

          <div>
            <p className='font-semibold text-xsm'>Link to</p>
            <div className='flex gap-2 items-center'>
                <span onClick={()=>{setlinkToOption('None')}} className={`px-6 py-2 bg-[#7bff95] text-xsm font-semibold text-white ${linkToOption === 'None' ? 'bg-green-700/50' : ''}`}>None</span>
                <span onClick={()=>{setlinkToOption('Category')}} className={`px-6 py-2 bg-[#7bff95] text-xsm font-semibold text-white ${linkToOption === 'Category' ? 'bg-green-700/50' : ''}`}>Category</span>
            </div>

            <div className={`lg:w-1/2 md:w-1/2 sm:w-full duration-100 py-4 ${linkToOption === 'Category' ? 'block opacity-100 translate-x-0' : 'translate-y-4 hidden opacity-0'}`}>
    <Select className='font-semibold text-xsm lg:w-1/2 md:w-1/2 sm:w-full' options={bannerType} />
             </div>

          </div>

          <div>
            <p className='font-semibold text-xsm'>Status</p>
            <div className='flex gap-2 items-center'>
                <span onClick={()=>{setStatus('Active')}} className={`px-6 py-2 bg-[#7bff95] cursor-pointer text-xsm font-semibold text-white ${Status === 'Active' ? 'bg-green-700/50' : ''}`}>Active</span>
                <span onClick={()=>{setStatus('Inactive')}} className={`px-6 py-2 bg-[#7bff95] cursor-pointer text-xsm font-semibold text-white ${Status === 'Inactive' ? 'bg-green-700/50' : ''}`}>Inactive</span>
            </div>
            </div>

            <div className='border-t flex gap-2 py-4 justify-end'>
                <button className='font-semibold text-xsm hover:bg-green-600 bg-[#7bff95] cursor-pointer text-white px-6 py-2'>Save</button>
                <button className='font-semibold text-xsm hover:bg-green-600 bg-[#7bff95] cursor-pointer text-white px-6 py-2'>Cancel</button>
            </div>

            
    </div>
    </>
  )
}

export default AddBanner