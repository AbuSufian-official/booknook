"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { DropdownMenuAvatar } from "./navprofiledropmanu"
import { CiHome } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineBookmarks } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";


function Navber() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/", icon: <HiOutlineHome /> },
        { name: "All Books", href: "/all-book", icon: <IoLibraryOutline /> },
        { name: "Add Book", href: "/add-book", icon: <IoMdAddCircleOutline /> },
        { name: "My Books", href: "/my-books", icon: <LuBookOpen /> },
        { name: "My Borrows", href: "/my-borrows", icon: <MdOutlineBookmarks /> },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo & Brand Name */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="BookNook Logo"
                            width={36}
                            height={36}
                            className="h-9 w-auto"
                            priority
                        />
                        <span className="text-xl font-bold text-gray-900">
                            Book<span className="text-[#027cd4]">Nook</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-gray-600 hover:text-[#027cd4] font-medium transition-colors"
                                >
                                    {link.icon}

                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side: Profile & Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        <DropdownMenuAvatar />

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-[#027cd4]/10 hover:text-[#027cd4] rounded-lg font-medium transition"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navber
