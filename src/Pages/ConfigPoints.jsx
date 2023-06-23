import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const ConfigPoints = () => {
    const dummyArray = Array(10).fill(1)
  return (
    <>
    <div className='p-4 space-y-6'>
            <Link to="/config-points/add-new-config-points"><button className='px-6 py-2 w-max font-semibold text-xsm text-white bg-green-500'>Add New Config Points</button></Link>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Points</th>
                <th scope="col" className="px-6 py-3">Order Amount</th>
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
                    <td className="px-6 py-4">How about an Ice Candy to beat the heat ..!</td>
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
    </div>
    </>
  )
}

export default ConfigPoints