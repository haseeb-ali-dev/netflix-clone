import Link from "next/link"
import { useState, useEffect } from "react"
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

import useAuth from "hooks/useAuth"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { loading, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) return null

  return (
    <header className={`${isScrolled ? "bg-[#141414]" : null}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="http://rb.gy/ulxxee"
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden w-6 h-6 sm sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" onClick={logout} />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="Acct"
            className="rounded cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
