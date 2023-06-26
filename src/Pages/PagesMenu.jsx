import React from 'react'
import { Link } from 'react-router-dom'
const PagesMenu = () => {
    const dummyArray = Array(4).fill(1)
  return (
    <div className='p-4 space-y-6'>

        <div>
            <Link to="/pages/addpages"><button className='px-6 py-2 text-xsm font-semibold bg-[#7bff95] text-white'>Add Pages</button></Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Pages</th>
                <th scope="col" className="px-6 py-3">Image</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer hover:underline">Shipping</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <Link to={`/pages/editpages/${index}`}><i className="bx cursor-pointer bx-sm bx-pencil"></i></Link>
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
  )
}

export default PagesMenu