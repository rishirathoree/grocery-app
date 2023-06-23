import React, { useState } from "react";
import ReactQuill from "react-quill";
import Select from 'react-select'
import "react-quill/dist/quill.snow.css";

const AddProducts = () => {
  const [inputValue, setInputValue] = useState("");
  const [productImage,setproductImage] = useState()
  const [gstRate, setGstRate] = useState("");
  const [gstRateType, setGstRateType] = useState("");
  const [hsnRateType, setHSNRateType] = useState("");
  const [selectedCtg, setSelectedCtg] = useState('');
  const [selectedSubCtg, setSelectedSubCtg] = useState('');
  const [tags, setTags] = useState([]);
  console.log(productImage);
  const handleInputKeydown = (e) => {
    if(tags.length > 2) return;
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const categories = [
    {
      name: 'Fruits',
      subcategories: ['Apples', 'Bananas', 'Oranges']
    },
    {
      name: 'Vegetables',
      subcategories: ['Carrots', 'Tomatoes', 'Broccoli']
    },
    {
      name: 'Dairy',
      subcategories: ['Milk', 'Cheese', 'Yogurt']
    }
  ];

  const categoriesOptions = [
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Vegetables', label: 'Vegetables' },
    { value: 'Dairy', label: 'Dairy' }
  ]
  const filteredCtg = selectedCtg && categories.find(item => item.name === selectedCtg);
  const subcategoriesOptions = filteredCtg ? filteredCtg.subcategories.map(subcategory => ({
    value: subcategory,
    label: subcategory
  })) : [];
  const deleteTag = (tag) => {
    const updatedTags = tags.filter(t => t !== tag);
    setTags(updatedTags);
  }
  return (
    <>
      <div className="space-y-6 p-4">

          <div className='ring-1 rounded-lg ring-black/5'>
            <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Categories & Sub Categories</p>
            <div className="flex items-center justify-between w-full">
              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Category</p>
                <Select className='w-full' onChange={(e) => { setSelectedCtg(e.value) }} options={categoriesOptions} />
              </label>

              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Subcategory</p>
                <Select className='w-full' onChange={(e) => { setSelectedSubCtg(e.value) }} options={subcategoriesOptions} />
              </label>
            </div>
          </div>

          <div className="w-full h-80 rounded-">
            <p className="font-semibold text-xsm">Description</p>
            <ReactQuill className="h-60" />
          </div>

          <div className='ring-1 rounded-lg duration-500 ring-black/5'>
            <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Multiple Tags</p>
            <div className="flex flex-col py-2 duration-500 items-start justify-between w-full">
              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Tags</p>
                <input
                  value={inputValue}
                  onChange={(e) => { setInputValue(e.target.value) }}
                  onKeyDown={handleInputKeydown}
                  type="text"
                  className="w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5"
                />
              </label>
              <div className="flex items-center pl-4 gap-2 justify-between">
              {tags && tags.map((item,index)=>{
                return(
                  <div onClick={()=>{deleteTag(item)}} className="flex rounded-lg items-center gap-2 px-4 py-1 ring-1 ring-black/5" key={index}>
                    <p className="font-semibold text-xsm ">{item}</p>
                    <i className="bx bx-x"></i>
                  </div>
                )
              })}
              </div>
            </div>
          </div>

          <div className='ring-1 rounded-lg ring-black/5'>
            <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Taxes Option</p>
            <div className="flex items-center justify-between w-full">
              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>GST Rate Type</p>
                <Select className='w-full' onChange={(e) => { setSelectedSubCtg(e.value) }} options={subcategoriesOptions} />
              </label>

              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>GST Rate</p>
                <input type="number" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='p-4 space-y-2 w-full'>
                <p className='font-semibold text-xsm'>HSN Code</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>
            </div>
          </div>

          <div className="bg-gray-100/20 ring-1 rounded-lg ring-black/5 p-4">
            <p className="font-semibold text-lg text-slate-400">Variant</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 py-4">

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Sort</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>SKU</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>
              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Weight/No of Units/Quantity</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Unit</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>
              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>MRP</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Discount</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>
              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Price</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Max Quantity Per Order</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>
              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Stock</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className='space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Min Stock Alert</p>
                <input type="text" className='w-full p-2 bg-gray-50 focus:outline-none outline-none duration-500 hover:ring-1 hover:ring-black/5' />
              </label>

              <label className=' space-y-2 w-full'>
                <p className='font-semibold text-xsm'>Variant Out of Stock Status</p>
                <Select className='w-full' onChange={(e) => { setSelectedSubCtg(e.value) }} options={subcategoriesOptions} />
              </label>
          </div>
          </div>

          {/* Image Input */}
          {!productImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Upload Image</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Drag & Drop files here or click to browser</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">deal size for Images is 550*550 pixels</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Note: Max 4 images are allowed.</p>
          </div>
          <input onChange={(e)=>{setproductImage(e.target.files[0])}} id="dropzone-file" type="file" className="hidden" />
          </label>
          </div> 
          )
          :
          (
          <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-64 shadow-lg rounded-lg ">
          <i className="bx bx-lg bx-image"></i>
          {productImage && productImage.name}
          <i onClick={(e)=>setproductImage(null)} className="bx bx-x"></i>
          </label>
          </div> 
          )
          }

          {/* Video Input */}
          {!productImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Upload Video</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input onChange={(e)=>{setproductImage(e.target.files[0])}} id="dropzone-file" type="file" className="hidden" />
          </label>
          </div> 
          )
          :
          (
          <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-64 shadow-lg rounded-lg ">
          <i className="bx bx-lg bx-image"></i>
          {productImage && productImage.name}
          <i onClick={(e)=>setproductImage(null)} className="bx bx-x"></i>
          </label>
          </div> 
          )
          }

          {/* Video Thubnail Input */}
          {!productImage
          ?
          (
          <div className="flex flex-col items-start justify-center w-full">
          <p className="font-semibold text-xsm">Video Thumbnail Image</p>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload Video</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input onChange={(e)=>{setproductImage(e.target.files[0])}} id="dropzone-file" type="file" className="hidden" />
          </label>
          </div> 
          )
          :
          (
          <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-64 shadow-lg rounded-lg ">
          <i className="bx bx-lg bx-image"></i>
          {productImage && productImage.name}
          <i onClick={(e)=>setproductImage(null)} className="bx bx-x"></i>
          </label>
          </div> 
          )
          }

          <div>
            <button className="font-semibold text-xsm px-6 py-3 bg-green-500 text-white rounded ">Add Product</button>
            <button className="font-semibold text-xsm px-6 py-3 bg-slate-500 text-white mx-2 rounded  ">Cancel</button>
          </div>
      </div>
    </>
  );
};

export default AddProducts;
