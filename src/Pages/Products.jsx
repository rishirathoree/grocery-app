import React, { useRef, useState } from "react";
import fruitImg from "../assets/frt.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchCategoryValue, setSearchCategoryValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const data = [
    {
      status: 'Active',
      category: 'Fruits',
      subcategory: 'Citrus',
      variant: '001',
      productName: 'Orange'
    },
    {
      status: 'Delete',
      category: 'Vegetables',
      subcategory: 'Leafy Greens',
      variant: '002',
      productName: 'Spinach'
    },
    {
      status: 'Enable',
      category: 'Dairy',
      subcategory: 'Milk',
      variant: '003',
      productName: 'Whole Milk'
    },
    {
      status: 'Disable',
      category: 'Snacks',
      subcategory: 'Chips',
      variant: '004',
      productName: 'Potato Chips'
    },
    {
      status: 'Active',
      category: 'Bakery',
      subcategory: 'Bread',
      variant: '005',
      productName: 'Whole Wheat Bread'
    },
    {
      status: 'Enable',
      category: 'Meat',
      subcategory: 'Poultry',
      variant: '006',
      productName: 'Chicken Breast'
    },
    {
      status: 'Active',
      category: 'Beverages',
      subcategory: 'Soft Drinks',
      variant: '007',
      productName: 'Coca-Cola'
    },
    {
      status: 'Disable',
      category: 'Frozen Foods',
      subcategory: 'Ice Cream',
      variant: '008',
      productName: 'Vanilla Ice Cream'
    },
    {
      status: 'Active',
      category: 'Personal Care',
      subcategory: 'Shampoo',
      variant: '009',
      productName: 'Pantene Shampoo'
    },
    {
      status: 'Enable',
      category: 'Canned Goods',
      subcategory: 'Soup',
      variant: '010',
      productName: 'Tomato Soup'
    },
    {
      status: 'Active',
      category: 'Household',
      subcategory: 'Cleaning Supplies',
      variant: '011',
      productName: 'Bleach'
    },
    {
      status: 'Delete',
      category: 'Fruits',
      subcategory: 'Berries',
      variant: '012',
      productName: 'Strawberries'
    },
    {
      status: 'Disable',
      category: 'Dairy',
      subcategory: 'Cheese',
      variant: '013',
      productName: 'Cheddar Cheese'
    },
    {
      status: 'Active',
      category: 'Snacks',
      subcategory: 'Nuts',
      variant: '014',
      productName: 'Almonds'
    },
    {
      status: 'Enable',
      category: 'Bakery',
      subcategory: 'Pastries',
      variant: '015',
      productName: 'Croissant'
    },
    {
      status: 'Active',
      category: 'Meat',
      subcategory: 'Beef',
      variant: '016',
      productName: 'Ground Beef'
    },
    {
      status: 'Disable',
      category: 'Beverages',
      subcategory: 'Tea',
      variant: '017',
      productName: 'Green Tea'
    },
    {
      status: 'Active',
      category: 'Frozen Foods',
      subcategory: 'Pizza',
      variant: '018',
      productName: 'Pepperoni Pizza'
    },
    {
      status: 'Enable',
      category: 'Personal Care',
      subcategory: 'Toothpaste',
      variant: '019',
      productName: 'Colgate Toothpaste'
    },
    {
      status: 'Active',
      category: 'Canned Goods',
      subcategory: 'Vegetables',
      variant: '020',
      productName: 'Corn'
    }
  ];
  

  const handleFilter = () => {
    const filtersData = data.filter((item) => {
      return (
        (item.productName.toLowerCase().includes(searchCategoryValue.toLowerCase())  || searchCategoryValue === '') &&
        (item.category === selectedCategory || selectedCategory === '') &&
        (item.subcategory === selectedSubCategory || selectedSubCategory === '') &&
        (item.status === selectedStatus || selectedStatus === '')
      );
    });
    return filtersData;
  };
  const filtersData = handleFilter();
  const renderProperData = filtersData.length > 0 ? filtersData : data;

  return (
    <>
      <div className="p-4 space-y-6">
        {/* category sorting option containing search/select dropdown category and subcategory */}
        <Link to="/Products/addproducts"><button className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-black"> <i className="bx bx-cart-alt"></i> Add Product</button></Link>
        <div className="space-y-4">
          <input onChange={(e)=>{setSearchCategoryValue(e.target.value)}} type="text" className="w-full text-lg p-2 bg-gray-100 focus:outline-none outline-none" />
          <div className="flex items-center flex-wrap gap-2">
          <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 text-xsm py-2 ring-1 ring-black/50 focus:outline-none outline-none"
            >
              <option value="">Select Status</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Dairy">Dairy</option>
              {/* Add more options for variant */}
            </select>
            <select
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="px-6 text-xsm py-2 ring-1 ring-black/50 focus:outline-none outline-none"
            >
              <option value="">Select Subcategory</option>
              <option value="Milk">Milk</option>
              <option value="Citrus">Citrus</option>
              {/* Add more options for subcategory */}
            </select>
            <select
              value={setSelectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-6 text-xsm py-2 ring-1 ring-black/50 focus:outline-none outline-none"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
              {/* Add more options for variant */}
            </select>
          </div>
          <div className="space-x-2">
            <button onClick={handleFilter} className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-black px-6 py-2">Go</button>
            <button className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-black px-6 py-2">Reset</button>
          </div>
        </div>
        {/* category sorting option containing search/select dropdown category and subcategory end here */}
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {renderProperData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${index}`}
                          type="checkbox"
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`checkbox-table-search-${index}`}
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
                    <td className="px-6 py-4 cursor-pointer hover:underline">
                      {item.productName}
                    </td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.subcategory}</td>
                    <td className="flex items-center justify-center">
                      <span className="rounded-full w-8 h-8 flex items-center justify-center text-center bg-gray-100">
                        {item.variant}
                      </span>
                    </td>
                    <td className="px-6 py-4">{item.status}</td>
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
