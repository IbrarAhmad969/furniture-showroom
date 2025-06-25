
const Products = ({ imageUrl, name, description }) => {
  return (
    <div className="dark:bg-zinc-900 group transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl w-full aspect-[3/4] bg-white flex flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-md">
      <div className="relative w-full h-3/5 overflow-hidden">
        <img
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          alt={name || "Product image"}
        />
      </div>
      <div className="mb-10 flex flex-col justify-between p-4 h-2/5">
        <div>
          <h3 className="dark:text-white text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2 h-10">{description}</p>
        </div>
        <button className="mt-4 cursor-pointer rounded-lg bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;

