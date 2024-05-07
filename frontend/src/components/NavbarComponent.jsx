import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NavbarComponent() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/')
    // Tambahkan logika pencarian di sini
  }

  return (
    <div>
      <div className="py-4 shadow-sm bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" onClick={() => navigate('/')}>
            <img src="images/logo.svg" alt="Logo" className="w-32" />
          </Link>

          <div className="w-ful max-w-2xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-white border border-primary pl-12 py-3 pr-3 rounded-lg focus:outline-none hidden md:flex "
              placeholder="search...."
            />
            <button
              className="rounded-lg btn btn-primary px-6 ml-3"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl">
                <i className="bi bi-bag-heart"></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </a>
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="bi bi-cart3"></i>
              </div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                2
              </div>
              <div className="text-xs leading-3">Chart</div>
            </a>
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-base-800">
        <div className="container mx-auto flex">
          <div className="px-8 py-4 bg-primary  md:flex items-center cursor-pointer relative group hidden">
            <span className="text-white">
              <i className="bi bi-list mr-4"></i>
              All Categories
            </span>

            <div className="absolute rounded-xl w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-10">
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/sofa.svg"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/terrace.svg"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/bed.svg"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/office.svg"
                  alt="office"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">office</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/outdoor-cafe.svg"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/bed-2.svg"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <a href="#" className="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </div>
            <a
              href="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
