import Textfield from "../buttons/Textfield";

const AuthForm = ({ fields, buttonText, onSubmit }) => (
  <form className="mt-10" onSubmit={onSubmit}>
    {fields.map((field, i) => (
      <div key={i} className="mb-4">
        <label>{field.label}</label>
        <Textfield
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

export default AuthForm;
