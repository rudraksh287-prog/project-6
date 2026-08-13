
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="bg-black text-white flex justify-center px-4 items-center h-16">
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer