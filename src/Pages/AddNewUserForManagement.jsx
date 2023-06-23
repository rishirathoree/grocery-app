import React, { useState } from 'react'
import Select from 'react-select'
    
const AddNewUserForManagement = () => {
    const [roleSelectedForUser,setRoleSelectedForUser] = useState([])
    const [SelectedAppPermissionForUser,setSelectedAppPermissionForUser] = useState([])
    const [roleValue,setRoleValue] = useState('')
    const [fullName,setfullName] = useState('')
    const [phoneNumber,setfullPhoneNumber] = useState('')
    const [email,setEmail] = useState('')

    const roleAvailable = [
        'Orders',
        'Dashboard',
        'Customers',
        'Manage Grocery',
        'Reports',
        'Marketing & Promotion',
        'User Management',
        'Runner Management',
        'Enquiry Form',
        'Content Management',
        'Settings',
        'Loyalty Program ',
    ]

    const adminAppPermissions = [
        'Orders',
        'Create Orders',
    ]

    const role = [
        { value: 'Store Admin', label: 'Store    Admin' },
        { value: 'Staff', label: 'Staff' },
      ]

      const assignRole = (role) => {
        if (roleSelectedForUser.includes(role)) {
          setRoleSelectedForUser(prevSelectedRoleForUser =>
            prevSelectedRoleForUser.filter(item => item !== role)
          );
        } else {
          setRoleSelectedForUser(prevSelectedRoleForUser => [
            ...prevSelectedRoleForUser,
            role
          ]);
        }
      };
      
      console.log(roleSelectedForUser);
    // const assignRole = (selectedRole) => {setRoleSelectedForUser([...roleSelectedForUser,selectedRole])}
    const assignAdminRolePermission = (selectedRole) => {setSelectedAppPermissionForUser([...SelectedAppPermissionForUser,selectedRole])}
  return (
    <>
    <div className='p-4 space-y-6'>
        <div className='lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid gap-2'>
            <label htmlFor="NameOfAssignedUser" className='w-full'>
                <p className='font-semibold text-xsm'>Full Name</p>
            <input type="text" onChange={(e)=>{setfullName(e.target.value)}} className='p-3 focus:outline-none outline-none duration-200 bg-gray-100 w-full text-xsm font-semibold focus:ring-1 ring-black/5' />
            </label>

            <label htmlFor="NameOfAssignedUser" className='w-full'>
                <p className='font-semibold text-xsm'>Phone Number</p>
            <input type="text" onChange={(e)=>{setfullPhoneNumber(e.target.value)}} className='p-3 focus:outline-none outline-none duration-200 bg-gray-100 w-full text-xsm font-semibold focus:ring-1 ring-black/5' />
            </label>

            <label htmlFor="NameOfAssignedUser" className='w-full'>
                <p className='font-semibold text-xsm'>Email</p>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className='p-3 focus:outline-none outline-none duration-200 bg-gray-100 w-full text-xsm font-semibold focus:ring-1 ring-black/5' />
            </label>

            <label htmlFor="NameOfAssignedUser" className='w-full'>
                <p className='font-semibold text-xsm'>Role</p>
            <Select options={role} onChange={(e)=>{setRoleValue(e.value)}} type="text" className='w-full' />
            </label>
        </div>

        <div className='space-y-4'>
            <p className='Roles-Available font-semibold text-xsm text-slate-700'>Select Roles</p>
        <div className='roles-available grid lg:grid-cols-4 md:grid-cols-2 gap-2 sm:grid-cols-2'>
            {roleAvailable.map((item,index)=>{
                return(
                    <div onClick={()=>{assignRole(item)}} className={`p-8 ring-black/5 rounded-lg shadow-lg ring-1 ${roleSelectedForUser && roleSelectedForUser.includes(item) ? 'text-white bg-green-500' : ''}`} key={index}>
                        <p className='font-semibold text-xsm'>{item}</p>
                    </div>
                )
            })}
        </div>
        </div>

        <div className='space-y-4'>
            <p className='Roles-Available font-semibold text-xsm text-slate-700'>Admin App Permissions</p>
        <div className='roles-available grid lg:grid-cols-4 md:grid-cols-2 gap-2 sm:grid-cols-2'>
            {adminAppPermissions.map((item,index)=>{
                return(
                    <div onClick={()=>{assignAdminRolePermission(item)}} className={`p-8 ring-black/5 rounded-lg shadow-lg ring-1 ${SelectedAppPermissionForUser && SelectedAppPermissionForUser.includes(item) ? 'text-white bg-green-500' : ''}`} key={index}>
                        <p className='font-semibold text-xsm'>{item}</p>
                    </div>
                )
            })}
        </div>
        </div>
        
        <div className='pt-4 border-t flex items-end justify-end gap-2'>
            <button className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-xsm'>Save</button>
            <button className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-xsm'>Cancel</button>
        </div>

    </div>
    </>
  )
}

export default AddNewUserForManagement