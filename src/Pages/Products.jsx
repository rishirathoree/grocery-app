import React, { useRef, useState } from "react";
import fruitImg from "../assets/frt.jpg";
import { Link } from "react-router-dom";
const Products = () => {
  const [addNewUser, setAddNewUser] = useState(false);
  const [searchCategoryValue, setSearchCategoryValue] = useState(null);
  const dummyArray = Array(10).fill(1);

  const overlayModal = useRef(null);
  

  return (
    <>
      <div className="p-4 space-y-6">
          {/* catgeory sroting option containing search/slect dropdown category and subcategory */}
          <div className="flex lg:items-center md:items-start gap-4 lg:flex-row md:flex-col sm:flex-col">
          <input type="text" className="focus:outline-none outline-none p-2 bg-gray-50 ring-1 ring-black/20 rounded-md" />
          <div className=" flex lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-start sm:items-start gap-4">
          <select className="px-6 py-2 ring-1 ring-black/50 focus:outline-none outline-none">
            <option>Select Customers</option>
          </select>
          <select className="px-6 py-2 ring-1 ring-black/50 focus:outline-none outline-none">
            <option>Select Customers</option>
          </select>
          <select className="px-6 py-2 ring-1 ring-black/50 focus:outline-none outline-none">
            <option>Select Customers</option>
          </select>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-flex-row gap-3">
          <button className="px-6 py-2 bg-green-500 text-white">Go</button>
          <button className="px-6 py-2 bg-green-500 text-white">Reset</button>
          </div>
          </div>
          {/* catgeory sroting option containing search/slect dropdown category and subcategory end here */}







        {/* header search,add user and dropdown end here */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <i className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></i>
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
                  Variant
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
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                    <td className="flex items-center justify-center">
                      <span className="rounded-full w-8 h-8 flex items-center justify-center text-center bg-gray-100">1</span>
                    </td>
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
      </div>
    </>
  );
};

export default Products;
