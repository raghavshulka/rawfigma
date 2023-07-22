import React from 'react'
import logo from '../assets/Layer 2.png'
import email from '../assets/Email campaign-pana (1) 1.png'


function Heromain() {
  return (
    <>
    <div className=' flex bg-[#0B0E15;]'>

 <div  className='  p-4 w-[135px]'>
  <img src={logo} alt=''/>
 </div>

 <div className=' pl-[1200px] pt-5'>
 <button class= "  bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md ">
  Talk to us
</button>
 </div>

 </div>

<div className='bg-[#0B0E15;] flex justify-center  '>
<img   src={email} alt='' />
 </div>

  </>
  )
}

export default Heromain