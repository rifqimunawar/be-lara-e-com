import { useEffect, useState } from 'react'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import { getCart } from '../api'

export default function CartPage() {
  const [dataCart, setDataCart] = useState()

  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    async function fetchDataCart() {
      try {
        const data = await getCart(accessToken)
        setDataCart(data)
        console.log(data)
      } catch (error) {
        console.error('error cuy', error)
      }
    }
    fetchDataCart()
  }, [accessToken])

  return (
    <section>
      <NavbarComponent />
      <div className="bg-white py-10">
        <BreadcrumbsComponent />
        <div className="col-span-9 space-y-4 container mx-auto">
          {dataCart.map((cart) => (
            <div
              className="flex items-center shadow-lg justify-between border gap-6 p-4 border-gray-200 rounded-2xl"
              key={cart}
            >
              <div className="w-28 ">
                <img
                  src={cart.img}
                  alt="product 6"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-1/3">
                <h2 className="text-gray-800 text-xl font-medium uppercase">
                  {cart.name}
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
          ))}
        </div>
      </div>
      <FooterComponent />
    </section>
  )
}
