import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Cart({ cart, updateCart }) {
  const handleRemove = (id) => {
    updateCart({ id, remove: true });
  };

  const handleIncrement = (id) => {
    updateCart({ id, increment: true });
  };

  const handleDecrement = (id) => {
    updateCart({ id, decrement: true });
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="grid grid-cols-5 bg-[rgb(173,139,49)] py-4 w-full mt-2 rounded-md  items-center text-center">
        <h1 className="text-white font-bold">Product</h1>
        <h1 className="text-white font-bold">Price</h1>
        <h1 className="text-white font-bold">Quantity</h1>
        <h1 className="text-white font-bold">Total</h1>
        <h1 className="text-white font-bold">Remove</h1>
      </div>

      {/* Cart Items */}
      <div className="overflow-x-auto">
        {cart.map((item, index) => (
          <div
            key={item.id || index}
            className="grid grid-cols-5 items-center gap-4 py-4 mx-4 bg-gray-100 rounded-md mt-4 shadow-md"
          >
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.name || "Product"}
                className="rounded-xl w-20 h-20 object-cover"
              />
            </div>

            {/* Price */}
            <div className="text-center text-gray-900 font-medium">
              {item.price ? item.price.toLocaleString() + ' naira' : '0.00'}
            </div>

            {/* Quantity */}
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => handleDecrement(item.id)} className="text-gray-900">
                <FaAngleLeft />
              </button>
              <div className="text-center text-gray-900 font-medium">
 {item.quantity || 0}
              </div>
              <button onClick={() => handleIncrement(item.id)} className="text-gray-900">
                <FaAngleRight />
              </button>
            </div>

            {/* Total */}
            <div className="text-center text-gray-900 font-medium">
              {(item.price && item.quantity) ? (item.price * item.quantity).toLocaleString() + ' naira' : '0.00'}
            </div>

            {/* Remove Button */}
            <button
              className="bg-[rgb(173,139,49)] text-center text-white w-16 md:mx-10 md:mx-15 lg:mx-20 py-1 rounded-md hover:bg-[rgb(160,173,49)] transition-all"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;