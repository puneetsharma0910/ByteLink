import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center p-5 bg-purple-700 text-white h-16'> 
    <div className="logo font-bold text-2xl">
        ByteLinks
    </div>
    <ul className='flex justify-between items-center gap-4 '>
    <Link href="/"><li>Home</li></Link>
    <Link href = "/about"><li>About</li></Link>
    <Link href="/generate"><li>Shorten</li></Link>
    <Link href="/contact"><li>Contact</li></Link>
    <Link  href="/generate"><button className='bg-purple-500 rounded font-bold p-1 shadow-lg'>Try Now</button></Link>
    <Link href = "/github"><button className='bg-purple-500 rounded font-bold p-1 shadow-lg'>GitHub</button></Link> 
    </ul>

   </nav>
  )
}

export default Navbar
