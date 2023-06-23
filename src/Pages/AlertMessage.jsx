import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const AlertMessage = () => {
    const dummyArray = Array(10).fill(1)
    const paginationPerPageSelectOption = [
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 }
  ]
  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='flex items-center lg:flex-row md:flex-row sm:flex-col sm:items-start justify-between gap-2 rounded-lg ring-1 p-4 ring-black/5'>
        <div className='flex gap-2 items-center '>
            <Link to="/alert_messages/push-notification"><button className='px-6 py-2 w-max font-semibold text-xsm text-white bg-green-500'>Push Notification</button></Link>
            <div><Select className='w-full' options={paginationPerPageSelectOption} /></div>
        </div>
        <div className='flex gap-2'>
            <input type="text" className='focus:outline-none outline-none ring-1 font-semibold text-xsm ring-black/5 p-2' />
            <button className='px-6 py-2 w-max font-semibold text-xsm text-white bg-green-500'>Go</button>
            <button className='px-6 py-2 w-max font-semibold text-xsm text-white bg-green-500'>Reset</button>
        </div>
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Date Time</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Alert Text</th>
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
                    <td className="px-6 py-4">2020-23-05</td>
                    <td className="px-6 py-4">How about an Ice Candy to beat the heat ..!</td>
                    <td className="px-6 py-4">You loved it, so we have it. You have to taste to believe freshness of Magnum ice creams and kwality ice cream bars. Order now!</td>
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

export default AlertMessage