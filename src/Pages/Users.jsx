import React, { useRef, useState } from 'react'
import fruitImg from '../assets/frt.jpg'

const Users = () => {
    const dummyArray = Array(10).fill(1)

    const [addNewUser,setAddNewUser] = useState(false)

    const popUp = useRef(null)
    
    const removeShowAddImagePopup = (e) => {
      if (e.target === popUp.current) {
        setAddNewUser(false);
      }
    };
     
    const userData = [
      {
        enrollmentDate: '2022-05-15',
        name: 'John Doe',
        email: 'johndoe@example.com',
        mobileNumber: '1234567890',
        totalOrders: 10,
        loyaltyPoints: 500,
        status: 'Active'
      },
      {
        enrollmentDate: '2022-08-22',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        mobileNumber: '9876543210',
        totalOrders: 5,
        loyaltyPoints: 250,
        status: 'Inactive'
      },
      // Add more user data objects as needed
      {
        enrollmentDate: '2021-11-01',
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        mobileNumber: '4567890123',
        totalOrders: 8,
        loyaltyPoints: 350,
        status: 'Active'
      },
      {
        enrollmentDate: '2023-01-10',
        name: 'Bob Williams',
        email: 'bobwilliams@example.com',
        mobileNumber: '7890123456',
        totalOrders: 3,
        loyaltyPoints: 150,
        status: 'Active'
      },
      {
        enrollmentDate: '2022-09-05',
        name: 'Emily Davis',
        email: 'emilydavis@example.com',
        mobileNumber: '0123456789',
        totalOrders: 12,
        loyaltyPoints: 600,
        status: 'Active'
      },
      {
        enrollmentDate: '2022-06-18',
        name: 'Michael Brown',
        email: 'michaelbrown@example.com',
        mobileNumber: '2345678901',
        totalOrders: 7,
        loyaltyPoints: 400,
        status: 'Active'
      },
      {
        enrollmentDate: '2022-03-25',
        name: 'Olivia Taylor',
        email: 'oliviataylor@example.com',
        mobileNumber: '5678901234',
        totalOrders: 2,
        loyaltyPoints: 100,
        status: 'Inactive'
      },
      {
        enrollmentDate: '2022-12-12',
        name: 'William Wilson',
        email: 'williamwilson@example.com',
        mobileNumber: '8901234567',
        totalOrders: 9,
        loyaltyPoints: 450,
        status: 'Active'
      },
      {
        enrollmentDate: '2023-04-30',
        name: 'Sophia Anderson',
        email: 'sophiaanderson@example.com',
        mobileNumber: '3210987654',
        totalOrders: 6,
        loyaltyPoints: 300,
        status: 'Active'
      },
      {
        enrollmentDate: '2022-07-07',
        name: 'James Martinez',
        email: 'jamesmartinez@example.com',
        mobileNumber: '6543210987',
        totalOrders: 4,
        loyaltyPoints: 200,
        status: 'Inactive'
      }
    ];
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='flex gap-2'>
            <button onClick={()=>{setAddNewUser(!addNewUser)}} className='px-6 py-2 bg-[#7bff95] font-semibold text-xsm text-black'>Add New User</button>
            <button className='px-6 py-2 bg-[#7bff95] font-semibold text-xsm text-black'>Import User Data</button>
            <button className='px-6 py-2 bg-[#7bff95] font-semibold text-xsm text-black'>Import file</button>
        </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <label htmlFor="checbox">
                   <input type="checkbox"/>
                  </label>
                </th>
                <th scope="col" className="px-6 py-3">Enrollment Date</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Mobile number</th>
                <th scope="col" className="px-6 py-3">Total orders</th>
                <th scope="col" className="px-6 py-3">Loyalty Point</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td scope="col" className="px-6 py-3">
                  <label htmlFor="checbox">
                   <input type="checkbox"/>
                  </label>
                </td>
                    <td  className="px-6 py-4 cursor-pointer">{item.enrollmentDate}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.name}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.email}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.mobileNumber}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.totalOrders}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.loyaltyPoints}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.status}</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                        <div className={` w-10 h-6 rounded-full ring-1 duration-500 ring-black/5 ${item.status === 'Active' ? 'bg-green-500' : 'bg-red-500/50' }`}>
                          <div className={`w-6 h-6 rounded-full  duration-500 bg-white shadow ${item.status === 'Active' ? 'translate-x-4' : 'translate-x-0' }`}></div>
                        </div>
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

    {/* Popups */}
    <div onClick={removeShowAddImagePopup} ref={popUp} className={`${addNewUser ? 'visible opacity-100' : 'invisible opacity-0'} flex duration-500 lg:p-0 md:p-0 sm:p-4 items-center justify-center w-full h-screen absolute top-0 right-0 bg-black z-50 bg-opacity-10`}>
    <div className='lg:w-2/5 md:w-2/3 sm:w-full bg-white rounded-lg shadow-lg'>
      <p className='font-semibold text-sm p-4 border-b ring-black/5'>Add User</p>

      <form className='flex gap-6 flex-col p-4'>
        <label htmlFor="first-name-user">
          <p className='font-semibold text-xsm'>Name*</p>
          <input type="text" className='w-full focus:outline-none outline-none p-3 bg-gray-200' />
        </label>

        <label htmlFor="first-name-user">
          <p className='font-semibold text-xsm'>Email*</p>
          <input type="text" className='w-full focus:outline-none outline-none p-3 bg-gray-200' />
        </label>

        <label htmlFor="first-name-user">
          <p className='font-semibold text-xsm'>Address*</p>
          <input type="text" className='w-full focus:outline-none outline-none p-3 bg-gray-200' />
        </label>

        <label htmlFor="first-name-user">
          <p className='font-semibold text-xsm'>Name*</p>
          <input type="text" className='w-full focus:outline-none outline-none p-3 bg-gray-200' />
        </label>

        <div className='flex items-end justify-end gap-2'>
          <button className='px-6 py-3 rounded text-white bg-green-500 hover:bg-green-600 font-semibold text-xsm'>Submit</button>
          <button className='px-6 py-3 rounded text-black bg-gray-200 hover:bg-gray-300 font-semibold text-xsm'>Submit</button>
        </div>
      </form>

    </div>
    </div>
    </>
  )
}

export default Users