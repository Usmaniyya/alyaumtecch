import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center text-light p-8 px-12 border-b border-solid border-light">
      <div className="text-light">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-full"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="flex items-center font-semibold text-lg">
        <Link href="/" className="mr-3 hover:text-primary">
          About Us
        </Link>

        <Link href="/" className="hover:text-primary mx-3">
          Our Products
        </Link>
        <Link href="/" className="hover:text-primary">
          Our Services
        </Link>
      </div>
    </div>
  )
}

export default Navbar
