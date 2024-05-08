import { useEffect, useState } from 'react'
import { getProductRecomend } from '../api'
import { Link } from 'react-router-dom'

export default function ListProductsComponent() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductRecomend()
        setProducts(data)
        console.log(data, 'product') // Perbaikan: Pisahkan data dari string pada console.log()
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, []) // Perbaikan: Tambahkan dependensi kosong untuk mencegah pemanggilan berulang

  return (
    <div className="bg-white">
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item */}
          {products.map((product) => (
            <div
              className="bg-white  shadow-2xl rounded-2xl overflow-hidden group"
              key={product.id}
            >
              <div className="relative">
                <img src={product.img} alt={product.name} className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <Link
                    // to={`${product.id}/detail`}
                    to={`/detail`}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="bi bi-search"></i>
                  </Link>
                  <Link
                    to={`${product.id}/detail`}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="bi bi-heart"></i>
                  </Link>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    {product.name}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">
                    Rp {product.price}
                  </p>

                  {/* <p className="text-sm text-gray-400 line-through">$55.90</p> */}
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
                className="block w-full py-1 text-center text-white bg-primary border border-primary hover:bg-transparent hover:text-primary transition"
                style={{ borderRadius: '0 0 20px 20px' }}
              >
                Add to cart
              </a>
            </div>
          ))}

          {/* Item */}
        </div>
      </div>
    </div>
  )
}
