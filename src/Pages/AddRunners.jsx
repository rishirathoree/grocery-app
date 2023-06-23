import React, { useState } from 'react'
import Select from 'react-select'

const AddRunners = () => {
    const [runnerImage,setRunnerImage] = useState()

    const selectAreaRunner = [
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
  ]

  const handleChangeInputImage = (e) => {
    const file = e.target.files[0]
    if(file){
        const reader  = new FileReader()
        reader.onload = () => {
            setRunnerImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
  }
  console.log(runnerImage)
  return (
    <div className='p-4 space-y-6'>
        <div className='flex items-center gap-4 w-full'>
            <label htmlFor="runner-name" className='w-full'>
                <p className='font-semibold text-xsm'>Name</p>
                <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-black/5 ' />
            </label>

            <label htmlFor="runner-email" className='w-full'>
                <p className='font-semibold text-xsm'>Email</p>
                <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-black/5 ' />
            </label>

            <label htmlFor="runner-number" className='w-full'>
                <p className='font-semibold text-xsm'>Mobile Number</p>
                <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-black/5 ' />
            </label>

        </div>

        {!runnerImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Add Image</p>
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
            <i onClick={()=>{setRunnerImage(null)}} className='absolute top-2 rounded-full right-2 bg-white cursor-pointer bx bx-trash p-2'></i>
            <img src={runnerImage} className='w-full h-full object-cover' alt="" />
          </div> 
          )
          }

          <div className='flex items-center gap-2 w-full'>
          <Select placeholder='Select Area' className='w-full text-xsm font-semibold' options={selectAreaRunner} />
          <Select placeholder='Select Status' className='w-full text-xsm font-semibold' options={selectAreaRunner} />
          </div>

          <button className='px-6 py-2 bg-green-500 text-xsm hover:bg-green-600 font-semibold mr-2 text-white'>Save</button>
          <button className='px-6 py-2 bg-green-500 text-xsm hover:bg-green-600 font-semibold text-white'>Cancel</button>
          

    </div>
  )
}

export default AddRunners