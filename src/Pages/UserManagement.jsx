import React from 'react'
import { Link } from 'react-router-dom'
const UserManagement = () => {
    const dummyArray = Array(1).fill(1)
  return (
    <>
    <div className='p-4 space-y-6'>
        <Link to="/User-Management/Add-New-Role"><button className='bg-green-500 text-xsm font-semibold py-2 px-6 text-white'>Add New User Role</button></Link>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Full Name</th>
                <th scope="col" className="px-6 py-3">Phone Number</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Role</th>
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
                    <td className="px-6 py-4 cursor-pointer hover:underline">Sanjeev</td>
                    <td className="px-6 py-4">77551635</td>
                    <td className="px-6 py-4">rishi@gmail.com</td>
                    <td className="px-6 py-4">Store Admin</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
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

export default UserManagement