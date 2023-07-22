import React from 'react'
import robot from '../assets/Asset 5 1.png'

function Footer() {
  return (
    <>
<div className=' bg-[#1C232B] flex float-right h-[382px]  ml-[7px] w-[725px] '>
  <img src={robot} alt=''/>
</div>

    <div className='   bg-[#1C232B] text-white  float '>

   <div className=' text-4xl  pt-3 pl-[84px]'>
  <h2> AI <span  className=' text-[#0070E7]'>framework</span> </h2>
   </div>

   <div className=' border-l ml-[61px] mt-[46px]'>
   Personalisation <br/>
   The advanced intelligent system assists in reaching out to customers 
   and increasing conversion funnel.
   </div>


<div className=' border-l ml-[61px] mt-[46px]' >
Efficiency <br/>
Our data models help improve the content. Real-time delivery insights are
 monitored using AI and provide meaningful actions.
</div>

<div className=' border-l ml-[61px] mt-[46px]'>
Automation <br/>
Send email at scale using code written in your preferred
 programming language, such as Python, Java, or Curl.
</div>

</div>



</>
  )
}

export default Footer