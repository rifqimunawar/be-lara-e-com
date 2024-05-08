import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'

export default function WishlistPage() {
  return (
    <section>
      <NavbarComponent />
      <div className="bg-white py-10">
        <BreadcrumbsComponent />
        <div className="col-span-9 space-y-4 container mx-auto">
          <div className="flex items-center shadow-lg justify-between border gap-6 p-4 border-gray-200 rounded-2xl">
            <div className="w-28 ">
              <img
                src="images/products/product6.jpg"
                alt="product 6"
                className="w-full rounded-xl"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Italian L shape
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img
                src="images/products/product5.jpg"
                alt="product 6"
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Dining Table
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img
                src="images/products/product10.jpg"
                alt="product 6"
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Sofa
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </section>
  )
}
