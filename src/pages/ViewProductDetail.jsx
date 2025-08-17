import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";

const ViewProductDetail = () => {
  const location = useLocation();
  const receivedData = location.state;

  return (
    <div className="mt-16 p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center">
            <img
              className="h-full object-contain rounded-2xl"
              src={receivedData.product.imageUrl}
              alt={receivedData.product.name}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={receivedData.product.imageUrl}
                  alt="thumb"
                  className="h-full object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {receivedData.product.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-semibold">
            Rs. {receivedData.product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            {receivedData.product.description}
          </p>

          {/* Color Options */}
          <div className="mt-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Colors</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-green-800 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 cursor-pointer"></div>
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Size</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Small</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Medium</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">Large</button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-6">
            <button className="w-full py-3 text-lg rounded-2xl bg-blue-900 text-white hover:cursor-pointer hover:bg-blue-800">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetail;
