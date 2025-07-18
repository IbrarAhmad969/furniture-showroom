import React from "react";
import { useForm } from "react-hook-form";

const Textfield = ({placeholder, inpType, textFieldValue}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <input
        className="w-full mt-5 border rounded p-2.5 bg-white mb-6"
        type="text"
        placeholder={placeholder}
        {...register(`${textFieldValue}`, {
          required: `${inpType} is required`,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `Invalid ${inpType}`,
          },
        })}
      />
    </div>
  );
};

export default Textfield;
