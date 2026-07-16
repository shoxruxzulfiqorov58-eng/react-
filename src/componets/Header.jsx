import { Bell, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='border flex items-center justify-between p-2 '>
        <form className='flex items-center gap-2 p-2'>
            <input className="form-controln border text-center justify-between  rounded-xl p-1 w-80" type="text" placeholder="Search..." id="search" />
            <label htmlFor="search">{<Search />}</label>
        </form>
        <div className='flex items-center gap-4'>
           {<Bell />}
           <h1 className="text-[18px] text-[#333] font-semibold">Shoxrux <br /> Zulfiqorov</h1>
           <img src="https://img.magnific.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740&q=80" alt="rasm" className="w-10 h-10 rounded-full" />
        </div>
    </div>
  )
}

export default Header