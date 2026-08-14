"use client"
import { useSession, signOut, signIn } from 'next-auth/react'
import React, { useState } from 'react'
import Link from 'next/link'


const Navbar = () => {
  const { data: session } = useSession()
//   console.log(session?.user);
// console.log(session?.user?.name);
  
  const [showdropdown, setshowdropdown] = useState(false)
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email}<br />
  //     <button onClick={() => { signOut() }}>Sign Out</button>
  //   </>
  // }
// console.log(session);
  return (
    <nav>
      <div className="bg-black text-white flex justify-between px-4 items-center md:h-16 flex-col md:flex-row">

        <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
          <img width={44} src="/tea.gif" alt="" />
          <span className='text-2xl'>MUSE
          </span>
          
        </Link>

        {/* <ul className='flex justify-between gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>SIgn Up</li>
          <li>LOg IN</li>
        </ul> */}
        <div className='relative flex flex-col justify-center items-center gap-2 md:flex-row '>
          {session && <>
            <button onClick={() => setshowdropdown(!showdropdown)}
            //  onBlur={() => {
            //   setTimeout(() => {
            //     setshowdropdown(false)
            //   }, 100);
            // }}
             id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[133px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" onClick={() => setshowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`}   onClick={() => setshowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <button type="button" onMouseDown={() => signOut({ callbackUrl: "/" })} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                </li>
              </ul>
            </div></>
          }
          {/* {session && <Link href={"/dashboard"}>
            <button className="text-white bg-gradient-to-bl from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Dashboard
            </button>
          </Link>} */}
          {session &&
            <button className="text-white bg-gradient-to-bl from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 md:mb-0 mb-2">
              LogOUt
            </button>
          }
          {!session &&
            <Link href={"/login"}>
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5 mx-1 md:mb-0 mb-2">LOgIN</button>
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
