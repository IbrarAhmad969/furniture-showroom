import { useForm } from "react-hook-form";
import Textfield from "../form/Textfield";



const AuthForm = ({ fields, buttonText, onSubmit }) => {

  const {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm();
  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, i) => (
        <div key={i} className="mb-4">
          <label>{field.label}</label>
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
        className="bg-blue-900 w-full text-white rounded-md p-2 mt-2 hover:cursor-pointer hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
