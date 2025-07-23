
const Textfield = ({error, register, placeholder, inpType, textFieldValue}) => {
  return (
    <div>
      <input
        className="w-full mt-5 border rounded p-2.5 bg-white dark:bg-zinc-500 mb-6 dark:text-white text-zinc-900"
        type={inpType}
        placeholder={placeholder}
        {...register(`${textFieldValue}`, {
          required: `${inpType} is required`,
        })}
      />
    </div>
  );
};

export default Textfield;
