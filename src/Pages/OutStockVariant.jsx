import React from 'react'
import Select from 'react-select'
import fruitImg from '../assets/frt.jpg'

const OutStockVariant = () => {
    const dummyArray = Array(10).fill(1)
    const PaginationOptions = [
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 100 }
      ]
      
  return (
    <>
    <div className='space-y-6 p-4'>
        <div className='grid grid-cols-1'>
            <div className='flex gap-2 justify-between items-center'>
                <div className='flex items-center gap-2'>
                <button className='px-6 py-2 bg-green-500 font-semibold text-xsm text-white'>Export Variants</button>
                <Select className='duration-500' options={PaginationOptions} />
                </div>
                <div className='flex items-center gap-2'>
                <input type="text" className='focus:outline-none outline-none p-3 bg-gray-100 text-xsm font-semibold'/>
                <button className='px-6 py-2 bg-green-500 font-semibold text-xsm text-white'>Search</button>
                </div>
            </div>
        </div>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Product Name</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Variant</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Min Stock Alert</th>
                <th scope="col" className="px-6 py-3">Edit</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="w-16 shadow-xl h-16 rounded-lg bg-white overflow-hidden">
                        <img src={fruitImg} className='w-full h-full object-cover' alt="" />
                      </div>
                    </th>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4">Frutis And Vegatbales</td>
                    <td className="px-6 py-4">0</td>
                    <td className="px-6 py-4">50</td>
                    <td className="px-6 py-4">0</td>
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
    </div>
    </>
  )
}

export default OutStockVariant