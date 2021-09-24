import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">MyBlog</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" to='/'>All</Link>
                <Link className="mr-5 hover:text-gray-900"to='/news'>News</Link>
                <Link className="mr-5 hover:text-gray-900" to='/tech'>Tech</Link>
                <Link className="mr-5 hover:text-gray-900" to='/nature'>Nature</Link>
                <Link className="mr-5 hover:text-gray-900" to='/story'>Story</Link>
            </nav>
            <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-base mt-4 md:mt-0" href="https://myblog-backendcms.herokuapp.com/admin/auth/login">Login
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
        </header>
    )
}
