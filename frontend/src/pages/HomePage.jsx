import { useEffect, useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import ListProductsComponent from '../components/ListProductsComponent'
import NavbarComponent from '../components/NavbarComponent'
import { getCategory } from '../api'

export default function HomePage() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategory()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <div>
      <NavbarComponent />
      {/* ====== Banner */}
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: "url('images/banner-bg.jpg')" }}
      >
        <div className="container mx-auto">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{' '}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* ====== Shop By Categoriues */}
      <div className="bg-white">
        <div className="container mx-auto py-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            shop by category
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {/* category */}
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-60 object-cover"
                />
                <a
                  href="#"
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                >
                  {category.name}
                </a>
              </div>
            ))}
            {/* category */}
          </div>
        </div>
      </div>
      {/* ====== Iklan */}

      <div className="bg-white pt-4">
        <div className="container mx-auto pb-16">
          <a href="#">
            <img src="images/offer.jpg" alt="ads" className="w-full" />
          </a>
        </div>
      </div>

      {/* ====== List Product */}
      <div className="bg-white pb-10">
        <h2 className="container mx-auto text-2xl font-medium text-gray-800 uppercase">
          recommended for you
        </h2>
      </div>
      <ListProductsComponent />

      <FooterComponent />
    </div>
  )
}
