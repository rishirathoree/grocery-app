import React from 'react'
import Select from 'react-select'
const AddCities = () => {
    const dummyArray = Array(10).fill(1)
    const cities = [
        {label:'Indore',value:'Indore'}
    ]
  return (
    <>
    <div className='p-4'>
        <div className='p-4 shadowCustom space-y-6'>
            <Select options={cities} className='lg:w-1/2 md:w-1/2 sm:w-full' />

        <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search by cities' className=' text-xsm font-semibold p-2 ring-1 ring-black/5 rounded bg-gray-50 outline-none focus:outline-none'/>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Search</button>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Clear</button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">City</th>
                <th scope="col" className="px-6 py-3">Zone</th>
                <th scope="col" className="px-6 py-3">Min Amount</th>
                <th scope="col" className="px-6 py-3"> Shipping fee</th>
                <th scope="col" className="px-6 py-3">Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4">Frutis And Vegatbales</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                    <i className='bx bx-edit bx-sm cursor-pointer'></i>
                    <i className='bx bx-trash bx-sm cursor-pointer'></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default AddCities