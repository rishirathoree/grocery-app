import React, { useState } from 'react'

const usefulcodesforcomponent = () => {
      // const[dateFrom,setDateFrom] = useState(null)
      // const[dateUpto,setDateUpto] = useState(null)
      // const handleSubmitDateFormat = () => {
      //       const filteredData = youruserdata.filter((item) => {
      //         const orderReceivedDate = new Date(item.orderReceived);
      //         const fromDate = new Date(dateFrom);
      //         const toDate = new Date(dateUpto);
        
      //         return (
      //           (!dateFrom || orderReceivedDate >= fromDate) &&
      //           (!dateUpto || orderReceivedDate <= toDate)
      //         );
      //       });
        
      //       return filteredData;
      //     };
      //     const filteredData = handleSubmitDateFormat();
  return (
      <>

      {/* Files Input */}
    <div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Product Name</th>
                <th scope="col" className="px-6 py-3">Variant</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Min Stock Alert</th>
                <th scope="col" className="px-6 py-3">Variant</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4">Frutis And Vegatbales</td>
                    <td className="px-6 py-4">Exotic Vegetables</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

    import Select from 'react-select'
    const categoriesOptions = [
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Vegetables', label: 'Vegetables' },
    { value: 'Dairy', label: 'Dairy' }
  ]
  
        <div className='ring-1 rounded-lg ring-black/5'>
            <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Taxes Option</p>
            <div className="flex items-center justify-between w-full">
              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>GST Rate Type</p>
                <Select className='w-full' onChange={(e) => { setSelectedSubCtg(e.value) }} options={subcategoriesOptions} />
              </label>

              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>GST Rate</p>
                <input type="number" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>HSN Code</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

            </div>
          </div>


          const [bannerImage,setBannerImage] = useState(null)
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
        (bannerImage)
          {!bannerImage
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
            <i onClick={()=>{setBannerImage(null)}} className='absolute top-2 rounded-full right-2 bg-white cursor-pointer bx bx-trash p-2'></i>
            <img src={bannerImage} className='w-full h-full object-cover' alt="" />
          </div> 
          )
          }
      </>
  )
}

export default usefulcodesforcomponent