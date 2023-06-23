import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const SoldItemReport = () => {
    const dummyArray = Array(10).fill(1)
    const paginationPerPageSelectOption = [
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 }
  ]
  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='flex items-center lg:flex-row md:flex-row sm:flex-col sm:items-start justify-between gap-2 rounded-lg'>
        <div className='flex gap-2 items-center w-full'>
        <Link className='w-full' to="/alert_messages/push-notification"><button className='px-6 w-full py-3 font-semibold text-xsm text-white bg-green-500'>Export Data</button></Link>
        <Link className='w-full' to="/alert_messages/push-notification"><button className='px-6 w-full py-3 font-semibold text-xsm text-white bg-green-500'>Top Products</button></Link>
        </div>
    </div>
    
    <div className='flex items-center  sm:items-start justify-between gap-2 rounded-lg ring-1 p-4 ring-black/5'>
        <div className='flex gap-2 items-center lg:flex-row md:flex-row sm:flex-col w-full'>
          <input type="text" className='w-full p-2 bg-gray-100 ring-2 ring-black/5 font-semibold text-sm  focus:outline-none outline-none' />
          <input type="date" className='w-full p-2 bg-gray-100 ring-2 ring-black/5 font-semibold uppercase text-xsm  focus:outline-none outline-none' />
          <input type="date" className='w-full p-2 bg-gray-100 ring-2 ring-black/5 font-semibold uppercase text-xsm  focus:outline-none outline-none' />
          <button className='px-6 w-full py-2 font-semibold text-md hover:bg-green-600 duration-500 text-white bg-green-500'>Go</button>
          <button className='px-6 w-full py-2 font-semibold text-md hover:bg-green-600 duration-500 text-white bg-green-500'>Reset</button>
        </div>
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">HSN/SKU</th>
                <th scope="col" className="px-6 py-3">Product ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Variant ID</th>
                <th scope="col" className="px-6 py-3">Sale Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">2020-23-05</td>
                    <td className="px-6 py-4">2WM19122020</td>
                    <td className="px-6 py-4">2WM19122020</td>
                    <td className="px-6 py-4">2WM19122020</td>
                    <td className="px-6 py-4">2WM19122020</td>
                    <td className="px-6 py-4">1</td>
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

export default SoldItemReport