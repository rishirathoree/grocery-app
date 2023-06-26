import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Faq = () => {
  const dummyArray = Array(10).fill(1)
    const pagination = [
        {label:20,value:20},
        {label:50,value:50},
        {label:100,value:100},
    ]
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='flex items-center gap-4'>
            <Select className='w-max' options={pagination} />
            <Link to="/Faq/addFaq"><button className='px-6 py-2 font-semibold text-xsm bg-[#7bff95] text-white'>Add New Faq</button></Link>
        </div>
        
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"><p className=''>DATE TIME (LAST MODIFIED)</p> </th>
                <th scope="col" className="px-6 py-3">CATEGORY</th>
                <th scope="col" className="px-6 py-3">QUESTION</th>
                <th scope="col" className="px-6 py-3">ANSWER</th>
                <th scope="col" className="px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer hover:underline">24 May 2023 11:26 AM</td>
                    <td className="px-6 py-4">Complaints & Feedback</td>
                    <td className="px-6 py-4">What if I have a complaint regarding my order?</td>
                    <td className="px-6 py-4">We are open to your complaints. Hence, you can reg ....</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                        <i className="bx cursor-pointer bx-sm bxs-navigation"></i>
                        <i className="bx cursor-pointer bx-sm bx-trash"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


        <div>1</div>
    </div>
    </>
  )
}

export default Faq