import React, { useRef, useState } from 'react'
import fruitImg from '../assets/frt.jpg'
import Select from 'react-select' 

const UploadInventoryImages = () => {
    const dummyArray = Array(152).fill(1)
    const [showAddImagePopup,setShowAddImagePopup] = useState(false)
    const popUp = useRef(null)
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }
    const removeShowAddImagePopup = (e) => {
        if (e.target === popUp.current) {
          setShowAddImagePopup(false);
        }
      };
      const [pageValuePerPage,setPageValuePerPage] = useState(20)
      const [pageIndex,setPageIndex] = useState(1)
      const options = [
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 100 },
      ]
      const [searchValue,setSearchValue] = useState(null)
  return (
    <>

    


    {/* table */}
    <div className='p-4 space-y-6'>
        <div className='flex items-center gap-4'>
            <button onClick={()=>{setShowAddImagePopup(!showAddImagePopup)}} className='px-6 py-2 bg-[#7bff95] font-semibold text-xsm text-black'>Add Images</button>
            <Select onChange={(e)=>{setPageValuePerPage(e.value)}} options={options} />
            <input onChange={(e)=>{setIN}} type="text" className='p-2 bg-gray-100/50 ring-1 ring-black/10 focus:outline-none outline-none' />
            <button onChange={()=>{setSearchValue(e.target.value)}} className="px-6 py-2 bg-[#7bff95] text-black font-semibold">GO</button>
        </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Image Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Copy URL
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.slice(pageIndex * pageValuePerPage - pageValuePerPage,pageIndex * pageValuePerPage).map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="w-16 shadow-xl h-16 rounded-lg bg-white overflow-hidden">
                        <img
                          src={fruitImg}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </th>
                    <td  className="px-6 py-4 cursor-pointer hover:underline">1664191003-2325.jpg</td>
                    <td className="px-6 py-4 cursor-pointer">
                    <div onClick={()=>{copyToClipboard('1664191003-2325.jpg')}} className='flex items-center gap-2'>
                    <i className="bx cursor-pointer bx-sm bx-clipboard"></i>
                    <p className='font-semibold text-xsm'>Copy URL</p>
                    </div>
                    </td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-trash"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='btn-next-prev flex gap-2'>
        <button disabled={pageIndex === 0} onClick={()=>{setPageIndex(prev => prev - 1)}} className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-white"> <i className="bx bx-chevron-left"></i>Prev</button>
        <button onClick={()=>{setPageIndex(prev => prev + 1)}} className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-white"> <i className="bx bx-chevron-right"></i>Next</button>
        </div>
    </div>
    <div onClick={removeShowAddImagePopup} ref={popUp} className={`${showAddImagePopup ? 'visible opacity-100' : 'invisible opacity-0'} flex duration-500 items-center justify-center w-full h-screen absolute top-0 right-0 bg-black z-50 bg-opacity-10`}>
        

    <label className="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file"  type="file" className="hidden" />
    </label>
    </div>


    
    </>
  )
}

export default UploadInventoryImages