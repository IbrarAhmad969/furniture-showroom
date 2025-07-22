import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import AuthForm from "../components/auth/AuthForm";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
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
