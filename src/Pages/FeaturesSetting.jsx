import React, { useState } from 'react'

const FeaturesSetting = () => {
    const [storeOpen,setStoreOpen] = useState(false)
    const [deliveryArea,setDeliveryArea] = useState('')
  return (
    <>
    <div className='p-6 space-y-6'>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Store Open</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Recommended Products</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Repeat Order</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>


        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Delivery Slot</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>


        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Loyality Program</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Delivery</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Mobile Notification</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Email Notification</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>COD</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Social Login</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Email Mandatory For Place Order</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Display store logo or name</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>


        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Enable Review & Rating</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>


        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Map enable in home page</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>


        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>App Home Page Title</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>App Home Page Sub Title</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Show COD Payment status</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Show Age Restriction In Category</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Round of Amount in Invoice*</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        <div className='flex items-center justify-between gap-8'>
            <p className='store-open-btn text-sm font-semibold text-slate-500 mb-1'>Show PWA app Popup</p>
        <div onClick={()=>setStoreOpen(!storeOpen)} className={`w-12 h-6 rounded-full ring-1 duration-500 flex items-center p-1 ring-black/10 ${storeOpen ? 'bg-[#7bff95]' : 'bg-red-500'}`}>
            <span className={`inline-block w-4 h-4 rounded-full ring-1 ring-black/5 bg-white duration-500 ${storeOpen ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
        </div>

        </div>
        {/* button ended here upperside  */}


        <div>
        <label htmlFor="DispalyNumberOnAppHomePage" className='w-full'>
        <div className='space-y-2'>
        <p className='font-semibold text-xsm'>Dispaly Number On App Home Page</p>
        <p className='font-semibold text-red-500 text-[8px]'>Leave blank if you don't want to display</p>
        <div className='flex rounded-lg overflow-hidden items-center  text-center'>
        <span onClick={()=>{setDeliveryArea('Whatsapp Number')}} className={` duration-500 font-semibold text-xsm  p-2 ${deliveryArea === 'Whatsapp Number' ? 'ring-1 ring-black/5 bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Whatsapp Number</span>
        <span onClick={()=>{setDeliveryArea('Phone Call')}} className={`rounded-r duration-500 font-semibold text-xsm  p-2 ${deliveryArea === 'Phone Call' ? 'ring-1 ring-black/5  bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Phone Call</span>
        </div>
        <input type="number" className='focus:outline-none appearance-none outline-none bg-gray-100 p-2' />
        <p className='font-semibold text-red-500 text-[8px]'>Note : Please add number with country code</p>
        

        </div>
        </label>
        </div>

        <div className='custom-btns-togglers grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

        <label htmlFor="DeliveryAreas" className='w-full'>
        <div className='space-y-2'>
        <p className='font-semibold text-xsm'>Delivery Areas</p>
        <div className='flex rounded-lg overflow-hidden items-center justify-between text-center'>
        <span onClick={()=>{setDeliveryArea('Areas')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'Areas' ? 'ring-1 ring-black/5 bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Areas</span>
        <span onClick={()=>{setDeliveryArea('Radius')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'Radius' ? 'ring-1 ring-black/5  bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Radius</span>
        </div>
        </div>
        </label>

        <label htmlFor="Displaystorelogoorname" className='w-full'>
        <div className='space-y-2'>
        <p className='font-semibold text-xsm'>Display store logo or name</p>
        <div className='flex rounded-lg overflow-hidden items-center justify-between text-center'>
        <span onClick={()=>{setDeliveryArea('Logo')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'Logo' ? 'ring-1 ring-black/5 bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Areas</span>
        <span onClick={()=>{setDeliveryArea('Store Name')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'Store Name' ? 'ring-1 ring-black/5  bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Radius</span>
        </div>
        </div>
        </label>

        <label htmlFor="AppHomePageHeaderRight" className='w-full'>
        <div className='space-y-2'>
        <p className='font-semibold text-xsm'>App Home Page Header Right</p>
        <div className='flex rounded-lg overflow-hidden items-center justify-between text-center'>
        <span onClick={()=>{setDeliveryArea('Contact Number')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'Contact Number' ? 'ring-1 ring-black/5 bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>Contact Number</span>
        <span onClick={()=>{setDeliveryArea('None')}} className={`w-full duration-500 font-semibold text-xsm  p-4 ${deliveryArea === 'None' ? 'ring-1 ring-black/5  bg-[#59be6d] text-white' : 'bg-[#7bff95]'}`}>None</span>
        </div>
        </div>
        </label>

        </div>

        <button className='px-6 py-2 bg-[#6bdd82] font-semibold text-xsm text-white'>Save</button>

    </div>
    </>
  )
}

export default FeaturesSetting