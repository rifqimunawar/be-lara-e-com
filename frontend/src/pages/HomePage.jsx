import FooterComponent from '../components/FooterComponent'
import ListProductsComponent from '../components/ListProductsComponent'
import NavbarComponent from '../components/NavbarComponent'

export default function HomePage() {
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
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-1.jpg"
                alt="category 1"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Bedroom
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-2.jpg"
                alt="category 2"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Mattress
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-3.jpg"
                alt="category 3"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Outdoor
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-4.jpg"
                alt="category 4"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Sofa
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-5.jpg"
                alt="category 5"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Living Room
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="images/category/category-6.jpg"
                alt="category 6"
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                Kitchen
              </a>
            </div>
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
