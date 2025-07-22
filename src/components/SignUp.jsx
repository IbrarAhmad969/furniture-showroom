import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import AuthForm from "../components/auth/AuthForm";

const Signup = () => {
  const fields = [
    { label: "Full Name", placeholder: "John Doe", type: "text", name: "fullname" },
    { label: "Email", placeholder: "email@example.com", type: "email", name: "email" },
    { label: "Password", placeholder: "Create a password", type: "password", name: "password" },
    { label: "Confirm Password", placeholder: "Repeat your password", type: "password", name: "confirmPassword" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic
    console.log("Signing up...");
  };

  return (
    <AuthLayout>
      <AuthHeader title="Sign Up" aboutUser={"Already have an account"} linkText="Login here" linkHref="/login" />
      <SocialAuthButton />
      <div className="mt-10 my-[10px] mx-auto w-[400px]">
        <p
          className="text-center text-[20px] bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
            backgroundPosition: "left, right",
            backgroundSize: "40% 1px",
          }}
        >
          or
        </p>
      </div>
      <AuthForm fields={fields} buttonText="Register" onSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Signup;
