import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import AuthForm from "../components/auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../state/features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);
  const fields = [
    {
      label: "Full Name",
      placeholder: "John Doe",
      type: "text",
      name: "fullname",
    },
    {
      label: "Email",
      placeholder: "email@example.com",
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "Create a password",
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Repeat your password",
      type: "password",
      name: "confirmPassword",
    },
  ];

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = ({ email, password }) => {
    dispatch(signupUser({ email, password }));
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Sign Up"
        aboutUser={"Already have an account"}
        linkText="Login here"
        linkHref="/login"
      />
      <SocialAuthButton />
      <div className="my-10 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto px-4">
        <p className="text-center text-lg text-black dark:text-white relative before:absolute after:absolute before:inset-y-1/2 before:left-0 before:w-1/3 before:h-px before:bg-black dark:before:bg-white after:inset-y-1/2 after:right-0 after:w-1/3 after:h-px after:bg-black dark:after:bg-white">
          <span className="px-2 bg-zinc-200 dark:bg-zinc-800 relative z-10">
            or
          </span>
        </p>
      </div>
      <AuthForm
        fields={fields}
        buttonText={"Sign Up"}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </AuthLayout>
  );
};

export default Signup;
