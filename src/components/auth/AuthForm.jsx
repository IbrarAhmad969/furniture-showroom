import { useForm } from "react-hook-form";
import Textfield from "../form/Textfield";
import { input } from "framer-motion/client";
import { useState } from "react";

const AuthForm = ({ fields, buttonText, onSubmit, loading }) => {
  const [avatar, setAvatar] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, i) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <Textfield
            register={register}
            error={errors[field.name]}
            placeholder={field.placeholder}
            inpType={field.type}
            textFieldValue={field.name}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-900 w-full text-white rounded-md p-2 mt-2 flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            ></path>
          </svg>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
};

export default AuthForm;
