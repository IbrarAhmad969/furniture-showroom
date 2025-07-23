import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import AuthForm from "../components/auth/AuthForm";

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase"

const Login = () => {
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

  const handleSubmit = async(data) => {
   try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    
    );
    alert(`Welcome, ${userCredential.user.email}`);

   } catch (error) {
    console.log("Login Error: ", error.message)
    alert("Invalid Credential");
   }
  };

  return (
    <AuthLayout>
      <AuthHeader title="Login" aboutUser={"New User"} linkText="Register here" linkHref="/signup" />
      <SocialAuthButton />
      <div className="mt-10 my-[10px] mx-auto w-[400px]">
        <p
          className="text-center text-[20px] bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
            backgroundPosition: "left, right",
            backgroundSize: "40% 1px",
          }}
        >
          or
        </p>
      </div>
      <AuthForm fields={fields} buttonText="Login" onSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default Login;
