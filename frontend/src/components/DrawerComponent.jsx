export default function DrawerComponent() {
  return (
    <div
      id="drawer-example"
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transhtmlForm -translate-x-full bg-white w-80 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <i className="bi bi-3-circle"></i>
        Info
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <i className="bi bi-3-circle"></i>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Categories
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-1"
                id="cat-1"
                className="checkbox"
              />
              <label
                htmlFor="cat-1"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Bedroom
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-2"
                id="cat-2"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-2"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Sofa
              </label>
              <div className="ml-auto text-gray-600 text-sm">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-3"
                id="cat-3"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-3"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Office
              </label>
              <div className="ml-auto text-gray-600 text-sm">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Outdoor
              </label>
              <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Brands
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-1"
                id="brand-1"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="brand-1"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Cooking Color
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-2"
                id="brand-2"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="brand-2"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Magniflex
              </label>
              <div className="ml-auto text-gray-600 text-sm">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-3"
                id="brand-3"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="brand-3"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Ashley
              </label>
              <div className="ml-auto text-gray-600 text-sm">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-4"
                id="brand-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="brand-4"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                M&D
              </label>
              <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-5"
                id="brand-5"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="brand-5"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Olympic
              </label>
              <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
            />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
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
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: '#fc3d57' }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: '#000' }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: '#fff' }}
              ></label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <a
          href="#"
          className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Learn more
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get access{' '}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}