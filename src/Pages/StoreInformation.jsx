import React, { useState } from 'react'
import Select from 'react-select'
const StoreInformation = () => {
    const [logoImage,setLogoImage] = useState(null)
    const currencyOption = [
        {value:'INR',label:'INR'}
    ]
    const timezoneOption = [
        {value:'Asia/Kolkata',label:'Asia/Kolkata'}
    ]
     const handleChangeInputImage = (e) => {}
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 '>
            <label htmlFor="storeName" className='w-full'>
                <p className='font-semibold text-xsm'>Store Name</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Store-Contact-Person" className='w-full'>
                <p className='font-semibold text-xsm'>Store Contact Person</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="storeContactNumber " className='w-full'>
                <p className='font-semibold text-xsm'>Store Contact Number</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="storeEmail" className='w-full'>
                <p className='font-semibold text-xsm'>Store Email</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Location" className='w-full'>
                <p className='font-semibold text-xsm'>Location</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="City" className='w-full'>
                <p className='font-semibold text-xsm'>City</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="State" className='w-full'>
                <p className='font-semibold text-xsm'>State</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Country" className='w-full'>
                <p className='font-semibold text-xsm'>Country</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            

            <label htmlFor="Zipcode" className='w-full'>
                <p className='font-semibold text-xsm'>Zipcode</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="AppShareLink" className='w-full'>
                <p className='font-semibold text-xsm'>App Share Link</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>
            
            <label htmlFor="AndroidShareLink" className='w-full'>
                <p className='font-semibold text-xsm'>Android Share Link</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="IphoneShareLink" className='w-full'>
                <p className='font-semibold text-xsm'>Iphone Share Link</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Latitude" className='w-full'>
                <p className='font-semibold text-xsm'>Latitude</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Longitude</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="SEOMetaTitle" className='w-full'>
                <p className='font-semibold text-xsm'>SEO Meta Title</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="SEOMetaKeyword" className='w-full'>
                <p className='font-semibold text-xsm'>SEO Meta Keyword</p>
                <input type="text" className='p-2 bg-gray-50 w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Currency" className='w-full'>
                <p className='font-semibold text-xsm'>Currency</p>
                <Select options={currencyOption} value={currencyOption[0]} type="text" className='w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="Timezone" className='w-full'>
                <p className='font-semibold text-xsm'>Timezone</p>
                <Select options={timezoneOption} value={timezoneOption[0]} type="text" className='w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="showCurrency" className='w-full'>
                <p className='font-semibold text-xsm'>Show Currency</p>
                <Select options={timezoneOption} value={timezoneOption[0]} type="text" className='w-full outline-none focus:outline-none'/>
            </label>
            
            <label htmlFor="showCurrency" className='w-full'>
                <p className='font-semibold text-xsm'>Store Associates</p>
                <Select options={timezoneOption} value={timezoneOption[0]} type="text" className='w-full outline-none focus:outline-none'/>
            </label>

            <label htmlFor="SeoMetaDescription" className='w-full lg:col-span-3 md:col-span-3 sm:col-span-1'>
                <p className='font-semibold text-xsm'>Seo Meta Description</p>
                <textarea type="text" className='w-full resize-none apperance-none h-80 ring-1 ring-black/5 outline-none focus:outline-none'/>
            </label>
        </div>
          {/* grid div end here */}

          {!logoImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Upload Store Logo( recommended size 200*50)</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
          <div className='overflow-hidden relative rounded-lg w-80 h-80 shadow-xl'>
            <i onClick={()=>{setLogoImage(null)}} className='absolute top-2 rounded-full right-2 bg-white cursor-pointer bx bx-trash p-2'></i>
            <img src={logoImage} className='w-full h-full object-cover' alt="" />
          </div> 
          )
          }

{!logoImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Upload App Icon(size 512*512)</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
          <div className='overflow-hidden relative rounded-lg w-80 h-80 shadow-xl'>
            <i onClick={()=>{setLogoImage(null)}} className='absolute top-2 rounded-full right-2 bg-white cursor-pointer bx bx-trash p-2'></i>
            <img src={logoImage} className='w-full h-full object-cover' alt="" />
          </div> 
          )
          }

          <button className='px-6 py-2 text-xsm font-semibold text-white bg-[#7bff95]'>Save</button>
    </div>
    </>
  )
}

export default StoreInformation