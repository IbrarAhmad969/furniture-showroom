import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import AuthForm from "../components/auth/AuthForm";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fields = [
    {
      label: "Enter your email",
      placeholder: "Email",
      type: "text",
      name: "email",
    },
    {
      label: "Enter your Password",
      placeholder: "Password",
      type: "password",
      name: "password",
    },
  ];

  const handleSubmit = async (data) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigate("/");
    } catch (error) {
      console.log("Login Error: ", error.message);
      alert("Invalid Credential");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Login"
        aboutUser={"New User"}
        linkText="Register here"
        linkHref="/signup"
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
        buttonText="Login"
        onSubmit={handleSubmit}
        loading={loading}
      />
    </AuthLayout>
  );
};

export default Login;
