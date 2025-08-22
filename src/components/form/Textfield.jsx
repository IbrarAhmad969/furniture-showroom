const Textfield = ({
  error,
  register,
  placeholder,
  inpType,
  textFieldValue,
}) => {
  return (
    <div>
      {inpType === "file" ? (
        <>
          <input
            id={textFieldValue}
            type={inpType}
            className="hidden"
            {...register(`${textFieldValue}`, {
              required: `${inpType} is Required`,
            })}
          />
          <label
            className="block w-full cursor-pointer rounded-lg border border-dashed border-gray-400 bg-gray-50 p-4 text-center text-gray-700 hover:bg-gray-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
            htmlFor={textFieldValue}
          >
            Click to Upload
            <span className="block text-sm text-gray-500 dark:text-zinc-300">
              {placeholder || " PNG, JPG, JPEG, etc."}
            </span>
          </label>
        </>
      ) : (
        <input
          className="w-full mt-5 border rounded p-2.5 bg-white dark:bg-zinc-500 mb-6 dark:text-white text-zinc-900"
          type={inpType}
          placeholder={placeholder}
          {...register(`${textFieldValue}`, {
            required: `${inpType} is required`,
          })}
        />
      )}
    </div>
  );
};

export default Textfield;
