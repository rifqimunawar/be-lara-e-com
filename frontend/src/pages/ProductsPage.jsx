import { Link } from 'react-router-dom'
import DrawerComponent from '../components/DrawerComponent'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import SidebarProductComponent from '../components/SidebarProductComponent'

export default function ProductsPage() {
  return (
    <div>
      <NavbarComponent />
      <div className="bg-white py-10">
        <h2 className="container mx-auto text-2xl font-medium text-gray-800 uppercase">
          New Products
        </h2>
      </div>

      {/* <!-- shop wrapper --> */}

      <div className="bg-white">
        <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
          {/* <!-- sidebar --> */}
          {/* <!-- drawer init and toggle --> */}
          <div className="text-center md:hidden">
            <button
              className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
              type="button"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
            >
              <ion-icon name="grid-outline"></ion-icon>
            </button>
          </div>

          {/* <!-- drawer component --> */}
          <DrawerComponent />
          {/* <!-- ./sidebar --> */}
          <SidebarProductComponent />
          {/* products */}
          <div className="col-span-3">
            <div className="flex items-center mb-4">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 ml-auto">
                <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>

            {/* products */}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
              <div className="bg-white shadow-xl rounded-xl overflow-hidden group">
                <div className="relative">
                  <img
                    src="images/products/product1.jpg"
                    alt="product 1"
                    className="w-full"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                  >
                    <Link
                      to="/detail"
                      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="view product"
                    >
                      <i className="bi bi-search"></i>
                    </Link>
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="add to wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                  <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                      Guyer Chair
                    </h4>
                  </a>
                  <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">$45.00</p>
                    <p className="text-sm text-gray-400 line-through">$55.90</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                  style={{ borderRadius: '0 0 20px 20px' }}
                >
                  Add to cart
                </a>
              </div>
            </div>
            {/* products */}
          </div>
        </div>
      </div>
      {/* shop wrapper */}

      {/* <ListProductsComponent /> */}
      <FooterComponent />
    </div>
  )
}
