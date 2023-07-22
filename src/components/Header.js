import React from 'react'
import GitHub from '../assets/Vector.png'
import Docs from '../assets/Vector (1).png'
import SignIn from '../assets/Vector (2).png'

function Header() {
  return (
    <div className='w-full bg-[#171A21] text-[white] p-4 '>
        <div className='  flex gap-5 justify-end'>
            <div className='flex gap-2 mr-[80px]'>
                <img src={GitHub}/>
                GitHub
            </div>
            <div className='flex gap-2 mr-[80px] '>
                <img src={Docs}/>
                Docs
            </div>
            <div className=' border-l  flex gap-[8px] pr-[25px]  mr-[14px] '>
                <img src={SignIn}/>
                Sign In
            </div>
        </div>
    </div>
  






  
  )
}

export default Header