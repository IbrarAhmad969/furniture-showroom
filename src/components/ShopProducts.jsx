import { useDispatch } from "react-redux";
import { addToCart } from "../state/features/cart/cartSlice";

const ShopProducts = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" mt-10 ml-2 sm:h-[450px] dark:bg-zinc-900 group transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl w-full aspect-[3/4] bg-white flex flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-md">
      {/* Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-50">
        <img
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          src={product.imageUrl}
          alt={product.name || "Product image"}
        />
      </div>

      {/* Info + Button */}
      <div className="flex flex-col flex-1 justify-between p-4">
        <div>
          <div className="sm:flex sm:flex-row justify-between sm:mt-4 sm:mb-4">
            <h3 className="dark:text-white text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h3>
            <h1 className="text-blue-500 font-bold">RS {product.price}</h1>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 cursor-pointer rounded-lg bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopProducts;
