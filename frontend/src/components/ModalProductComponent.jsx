import React, { useState } from 'react'

export default function ModalProductComponent({ showProduct, quantity }) {

  const [dataProduct, setDataProduct] = useState({
    product_id: showProduct.id,
    user_id
    sizeProduct
    colorProduct
  })

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_4').showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{showProduct.name}</h3>
          <div className="grid grid-cols-2">
            <div>
              <img
                src={showProduct.img}
                className="w-40 h-40 object-cover rounded-xl"
              />
              <p className="py-4">{showProduct.name}</p>
              <p className="py-4">{quantity}</p>
            </div>
            <div>
              <form handleSubmit>
                <button type="submit" className="btn">
                  Simpan di Keranjang
                </button>
              </form>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
