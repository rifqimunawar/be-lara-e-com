import NavbarComponent from '../components/NavbarComponent'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import ListProductsComponent from '../components/ListProductsComponent'
import FooterComponent from '../components/FooterComponent'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory, getShowProduct } from '../api'
import PropTypes from 'prop-types' // Import PropTypes

function ImageGallery({ data }) {
  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    // Set nilai awal mainImage ketika data.img berubah
    setMainImage(data.img)
  }, [data.img]) // Dependensi useEffect

  const changeMainImage = (newImage) => {
    setMainImage(newImage)
  }

  return (
    <div>
      <img
        src={mainImage}
        alt="product"
        className="w-full h-auto object-cover"
      />

      <div className="grid grid-cols-5 gap-4 mt-4">
        {[data.img, data.img1, data.img2, data.img3, data.img4].map(
          (imageName, index) => (
            <img
              key={index}
              src={imageName}
              alt={`product${index + 2}`}
              className="w-full cursor-pointer border h-20 object-cover"
              onClick={() => changeMainImage(imageName)}
            />
          )
        )}
      </div>
    </div>
  )
}

ImageGallery.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    img3: PropTypes.string.isRequired,
    img4: PropTypes.string.isRequired,
  }).isRequired,
}

// Komponen DetailPage
export default function DetailPage() {
  let { id } = useParams()
  const [showProduct, setShowProduct] = useState({})

  useEffect(() => {
    async function fetchShowProduct() {
      try {
        const data = await getShowProduct(id)
        setShowProduct(data)
      } catch (error) {
        console.error('error', error)
      }
    }
    fetchShowProduct()
  }, [id])

  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryData = await getCategory()
        setCategories(categoryData)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])

  const [quantity, setQuantity] = useState(1)
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }
  // // Mendapatkan harga produk dari showProduct
  // const price = showProduct.price
  // console.log(price)

  // // Menggunakan useState untuk menyimpan total produk
  // const [totalProduct, setTotalProduct] = useState(0)

  // // Menghitung total produk berdasarkan harga dan kuantitas
  // useEffect(() => {
  //   setTotalProduct(price * quantity)
  // }, [price, quantity])
  return (
    <div>
      <NavbarComponent />
      <div className="bg-white py-10">
        <BreadcrumbsComponent />
        <div className="container mx-auto grid grid-cols-2 gap-6">
          <ImageGallery data={showProduct} />
          <div>
            <h2 className="text-3xl font-medium mb-2">{showProduct.name}</h2>
            {/* detail */}

            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold space-x-2">
                <span>Availability: </span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand: </span>
                <span className="text-gray-600">Apex</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category: </span>
                {categories.map((category) => {
                  if (category.id === showProduct.category_id) {
                    return (
                      <span className="text-gray-600" key={category.id}>
                        {category.name}
                      </span>
                    )
                  }
                  return null
                })}
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">SKU: </span>
                <span className="text-gray-600">BE45VGRT</span>
              </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
              <p className="text-xl text-primary font-semibold">
                Rp: {showProduct.price}
              </p>
              <p className="text-xl text-primary font-semibold">
                {/* Total Product Rp: {totalProduct} */}
              </p>
              {/* <p className="text-base text-gray-400 line-through">$55.00</p> */}
            </div>

            <div className="pt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="hidden"
                  />
                  <label
                    htmlFor="red"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fc3d57' }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    className="hidden"
                  />
                  <label
                    htmlFor="black"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#000' }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="white"
                    className="hidden"
                  />
                  <label
                    htmlFor="white"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fff' }}
                  ></label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div className="">
                  <button
                    onClick={decrementQuantity}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                  >
                    -
                  </button>
                </div>
                <div className="h-8 w-8 text-base flex items-center justify-center">
                  {quantity}
                </div>
                <div>
                  <button
                    onClick={incrementQuantity}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
              <a
                href="#"
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
              >
                <i className="fa-solid fa-bag-shopping"></i> Add to cart
              </a>
              <a
                href="#"
                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
              >
                <i className="fa-solid fa-heart"></i> Wishlist
              </a>
              {/* <ModalProductComponent
                showProduct={showProduct}
                quantity={quantity}
              /> */}
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            {/* detail */}
          </div>
          <div className="bg-white">
            <p className="mt-4 text-gray-600">{showProduct.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white pb-10">
        <h2 className="container mx-auto text-2xl font-medium text-gray-800 uppercase">
          recommended htmlFor you
        </h2>
      </div>
      <div className="bg-white">
        <ListProductsComponent />
      </div>
      <FooterComponent />
    </div>
  )
}
