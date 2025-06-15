
const Products = ({ imageUrl }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl w-full aspect-[3/4] bg-gray-200 flex items-center justify-center overflow-hidden universal-shadow rounded-md relative">
      <img
        className="object-cover w-full h-full rounded-md"
        src={imageUrl}
        alt="No Image Found"
      />
      <button className="cursor-pointer absolute rounded-lg bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 shadow-md hover:bg-blue-700 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Products
