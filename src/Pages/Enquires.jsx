import React from 'react'

const Enquires = () => {
    const dummyArray = Array(1).fill(1)
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2'>
            
            <div className='p-4 ring-1 ring-black/5 rounded-lg flex items-center gap-4'>
            <i class='bx bxs-message-alt bx-lg text-[#7bff95]'></i>
            <div>
            <p className='Total Enquries font-bold text-lg'>8</p>
            <p className='Total Enquries font-light text-sm'>Enquiries</p>
            </div>
            </div>
            
            <div className='p-4 ring-1 ring-black/5 rounded-lg flex items-center gap-4'>
            <i class='bx bxl-android bx-lg text-[#7bff95]'></i>
            <div>
            <p className='Total Enquries font-bold text-lg'>8</p>
            <p className='Total Enquries font-light text-sm'>Android</p>
            </div>
            </div>

            <div className='p-4 ring-1 ring-black/5 rounded-lg flex items-center gap-4'>
            <i class='bx bxl-apple bx-lg text-[#7bff95]'></i>
            <div>
            <p className='Total Enquries font-bold text-lg'>8</p>
            <p className='Total Enquries font-light text-sm'>IOS</p>
            </div>
            </div>

            <div className='p-4 ring-1 ring-black/5 rounded-lg flex items-center gap-4'>
            <i class='bx bx-world bx-lg text-[#7bff95]'></i>
            <div>
            <p className='Total Enquries font-bold text-lg'>8</p>
            <p className='Total Enquries font-light text-sm'>Web</p>
            </div>
            </div>

        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Platform</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Phone</th>
                <th scope="col" className="px-6 py-3">Received Date</th>
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
                    <td className="px-6 py-4 cursor-pointer hover:underline">Web</td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Rishi</td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Email@gmail.com</td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">53165315634</td>
                    <td className="px-6 py-4 cursor-pointer hover:underline">2022-15-08</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
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

export default Enquires