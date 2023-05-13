import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='fixed w-full'>
      <div className='flex justify-between items-center max-w-7xl px-14 py-8 '>

        <div className='flex '>
          <Link to='/' className='flex'  onClick={() => {
      window.scrollTo(0,0)
    }}><h1 className='text-black font-bold text-2xl'>Holi</h1><h1 className='text-orange-600 text-2xl font-bold'>Sync</h1></Link>
        </div>
<div className=' hidden md:flex gap-20 items-center'>
          <ul className='list-none flex flex-row  gap-14'>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Mentorship Options</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>How it works</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>About us</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Assessment</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Join as a Mentor</li>
          </ul>
        
        <Button/>
</div>


{/* Mobile navbar ...... */}
<div className='flex md:hidden justify-end items-center'>
<button onClick={() => setToggle(!toggle)}>
  <MenuIcon />
</button>



      {/* mobile menu...... */}
<div className={`${!toggle ? 'hidden' : 'flex'} p-6  bg-zinc-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
<ul className='list-none flex md:hidden flex-col  gap-1 justify-end items-start'>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300  '>Mentorship</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>How it works</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>About us</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>Assessment</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>Join as a Mentor</li>
          </ul>
</div>
</div>
        </div>

    </nav>
  )
}

export default NavBar