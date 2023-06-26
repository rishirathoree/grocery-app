import React from 'react'
import { Link } from 'react-router-dom'

const LoyaltyPoints = () => {
    const dummyArray = Array(1).fill(1)
  return (
    <>
    <div className='p-4 space-y-6'>
            <Link to="/config-points/add-loyalty-points"><button className='px-6 py-2 w-max font-semibold text-xsm bg-[#7bff95] text-black'>Add New Loyalty Points</button></Link>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Amount OFF</th>
                <th scope="col" className="px-6 py-3">Loyalty Points</th>
                <th scope="col" className="px-6 py-3">Coupon Code</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">20</td>
                    <td className="px-6 py-4">lp_9b9969</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-edit"></i>
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

export default LoyaltyPoints