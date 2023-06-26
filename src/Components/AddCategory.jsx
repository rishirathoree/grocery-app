import React, { useEffect, useRef, useState } from 'react'

const AddCategory = () => {
    const [addNewUser, setAddNewUser] = useState(false);
    const overlayModal = useRef(null);
    const removeModal = (e) => {
        if (e.target === overlayModal.current) {
          setAddNewUser(false);
        }
      };
  return (
    <>
    <button
              onClick={() => {
                setAddNewUser(!addNewUser);
              }}
              className="bg-[#7bff95] p-2 rounded hover:shadow-lg font-semibold duration-500 text-xsm text-black px-6 py-2"
            >
              Add New Category
            </button>
            <div
              onClick={removeModal}
              ref={overlayModal}
              className={`absolute overlay w-full z-50 h-screen top-0 right-0 bg-black bg-opacity-10 flex duration-500 items-center justify-center ${
                addNewUser ? " visible opacity-100" : " invisible opacity-0"
              }`}
            >

              {/* modal add catgegory */}
              <div
                className={` ${
                  addNewUser ? "translate-y-0" : " translate-y-10"
                } flex w-[500px] items-start justify-center flex-col bg-white p-8 duration-500 gap-8`}
              >
                <p className="font-semibold text-xsm ">Create New Category</p>
                <input type="text" placeholder="Enter Product Name" className="p-2 bg-gray-50 w-full ring-1 outline-none focus:outline-none ring-black/50 rounded-sm focus:ring-green-500 duration-500 focus:ring-2"/>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <button className="font-semibold text-xsm">Submit</button>
              </div>
            </div>
    </>
  )
}

export default AddCategory