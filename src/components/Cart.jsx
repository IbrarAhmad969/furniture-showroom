import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
} from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

   const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="p-6 text-lg font-medium">🛒 Your cart is empty!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🛍 Your Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="dark:bg-zinc-900 flex flex-col sm:flex-row items-start sm:items-center border rounded-xl p-4 shadow-lg bg-white"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover rounded mr-4"
            />
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="dark:text-gray-400 text-sm text-gray-600">{item.description}</p>
              <p className="font-bold text-blue-600">${item.price}</p>
              <div className="flex items-center mt-2 gap-2">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="dark:text-black px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-600 hover:text-white hover:cursor-pointer"
                >
                  −
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="dark:text-black px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-600 hover:text-white hover:cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="mt-4 sm:mt-0 sm:ml-4 text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
