import React, { useState } from 'react'
import timcook from '../assets/timcook.jpg'
import { Link } from 'react-router-dom'


const RunnerManagement = () => {
    const [seeImage,setSeeImage] = useState(null)
    const [selectedRunners,setSelectedRunners] = useState([])

    const selectRunner = (index) => {
        if (selectedRunners.includes(index)) {
          setSelectedRunners((prevSelectedRunners) =>
            prevSelectedRunners.filter((item) => item !== index)
          );
        } else {
          setSelectedRunners((prevSelectedRunners) => [...prevSelectedRunners, index]);
        }
      };

    const dummyArray = Array(2).fill(1)
    console.log(selectedRunners)
  return (
    <>
    <div className='p-4 space-y-6'>

    <Link to="/RunnerManagement/AddNewRunner"><button className='px-6 py-3 uppercase bg-green-500 text-xsm font-semibold text-white'>Add New Runner</button></Link>

    <div className='p-4 ring-1 ring-black/5 gap-2 flex items-center rounded-lg'>
        <input type="text" className='w-full bg-gray-50 p-3 outline-none focus:outline-none' />
        <button className='px-6 py-3 uppercase bg-green-500 text-xsm font-semibold text-white'>Go</button>
        <button className='px-6 py-3 uppercase bg-green-500 text-xsm font-semibold text-white'>Reset</button>
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input type="checkbox" />
                    </td>
                <th scope="col" className="px-6 py-3">Profile Image</th>
                <th scope="col" className="px-6 py-3">Full Name</th>
                <th scope="col" className="px-6 py-3">Mobile</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <input onChange={()=>{selectRunner(index)}} type="checkbox" />
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div /* make a onclick function here to show the image */ className='w-20 shadow-lg h-20 overflow-hidden rounded-lg'>
                            <img src={timcook} className='object-cover' alt="" />
                        </div>
                    </td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4">6443163155</td>
                    <td className="px-6 py-4">Exoti@gmail.com</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="px-6 py-4">
                        <i className='bx bx-pencil bx-sm'></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    <button className={`deleted-runner-btn text-white font-semibold text-xsm bg-green-500 px-6 duratin-1000 py-2 ${selectedRunners.length > 0 ?   'opacity-100' : 'opacity-0'}`}>Delete</button>    

    </div>
    {/* <div className={`absolute w-full h-screen  invisible top-0 right-0 bg-black/5 ${seeImage !== '' ? 'visible opacity-100' : 'opacity-0 visible'}`}>
        <img src={seeImage !== '' && seeImage} alt="" />
    </div> */}
    </>
  )
}

export default RunnerManagement