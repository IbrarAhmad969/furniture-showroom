const Button = ({ text,  width = "w-auto" }) => {
  return (
    <div>
      <button className={`transition-colors duration-300  hover:bg-blue-600 hover:shadow-gray-950 hover:shadow px-4 py-2 text-blue-500 border-2 hover:cursor-pointer hover:text-white ${width}`}>
      {text}
    </button>
    </div>
  );
};

export default Button;
