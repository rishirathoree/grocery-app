import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'


const Coupons = () => {
    const dummyArray = Array(10).fill(1)
    const paginationItemPerPage = [
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 100 },
      ]
  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='flex lg:flex-row md:flex-row sm:flex-col lg:items-center md:items-center sm:items-start gap-2 justify-between'>
        <div className='flex items-center gap-2'>
        <Link to="/discounts/addEdit"><button className='px-6 py-2 bg-green-500 text-white font-semibold text-xsm'>Add New Coupon</button></Link>
        <Select className='w-max duration-500' options={paginationItemPerPage} />
        </div>
        <div className='flex items-center gap-2'>
        <input type="text" className='p-2 bg-gray-50 focus:outline-none text-xsm font-semibold outline-none focus:shadow-sm duration-500' />
        <button className='px-6 py-2 bg-green-500 text-white font-semibold text-xsm'>GO</button>
        <button className='px-6 py-2 bg-green-500 text-white font-semibold text-xsm'>Reset</button>
        </div>
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Offer Name</th>
                <th scope="col" className="px-6 py-3">Coupon Code</th>
                <th scope="col" className="px-6 py-3">Discount Upto</th>
                <th scope="col" className="px-6 py-3">Date Valid</th>
                <th scope="col" className="px-6 py-3">Total Sales</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 cursor-pointer hover:underline">Diwali Offer</td>
                    <td className="px-6 py-4">5%</td>
                    <td className="px-6 py-4">100</td>
                    <td className="px-6 py-4">07-04-2024</td>
                    <td className="px-6 py-4">1</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                        <i class='bx bx-lg bxs-toggle-left'></i>
                        <i className="bx cursor-pointer bx-sm bx-trash"></i>
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

export default Coupons