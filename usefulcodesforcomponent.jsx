import React, { useState } from 'react'

const usefulcodesforcomponent = () => {
      // const[dateFrom,setDateFrom] = useState(null)
      // const[dateUpto,setDateUpto] = useState(null)
      // const handleSubmitDateFormat = () => {
      //       const filteredData = youruserdata.filter((item) => {
      //         const orderReceivedDate = new Date(item.orderReceived);
      //         const fromDate = new Date(dateFrom);
      //         const toDate = new Date(dateUpto);
        
      //         return (
      //           (!dateFrom || orderReceivedDate >= fromDate) &&
      //           (!dateUpto || orderReceivedDate <= toDate)
      //         );
      //       });
        
      //       return filteredData;
      //     };
      //     const filteredData = handleSubmitDateFormat();
  return (
      <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <i className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></i>
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Sort
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="w-16 shadow-xl h-16 rounded-lg bg-white overflow-hidden">
                        <img
                          src={fruitImg}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </th>
                    <td className="px-6 py-4 cursor-pointer hover:underline">Amul Butter</td>
                    <td className="px-6 py-4">Frutis And Vegatbales</td>
                    <td className="px-6 py-4">Exotic Vegetables</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                        <i className="bx cursor-pointer bx-sm bx-trash"></i>
                        <i className="bx cursor-pointer bx-sm bx-no-entry"></i>
                        <i className="bx cursor-pointer bx-sm bx-merge"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
  )
}

export default usefulcodesforcomponent