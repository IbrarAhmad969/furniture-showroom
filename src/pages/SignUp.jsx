import AuthLayout from "../components/auth/AuthLayout";
import AuthHeader from "../components/auth/AuthHeader";
import AuthForm from "../components/auth/AuthForm";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, resetAuth } from "../state/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openSnakeBar, setOpenSnakeBar] = useState(false);

  const { loading, error, user } = useSelector((state) => state.auth);
  const fields = [
    {
      label: "Full Name",
      placeholder: "John Doe",
      type: "text",
      name: "name",
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
    {
      label: "Role",
      placeholder: "Wholesaler, Shopkeeper, Retailer ... ",
      type: "text",
      name: "role",
    },
    {
      label: "Avatar",
      type: "file",
      name: "avatar",
      accept: "image/png,image/jpeg,image/webp",
    },
  ];

  useEffect(() => {
    if (user) {
      setOpenSnakeBar(true);
      setTimeout(() => {
        dispatch(resetAuth());
        navigate("/login", { replace: true });
      }, 2000);
    }
  }, [user, navigate, dispatch]);

  const handleSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not Match");
      return;
    }

    const file = data.avatar?.[0] || null;

    dispatch(
      signupUser({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        avatar: file,
      })
    );
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Sign Up"
        aboutUser={"Already have an account"}
        linkText="Login here"
        linkHref="/login"
      />
      <GoogleLogin />
      {/* ✅ Success Alert */}
      <Snackbar
        open={openSnakeBar}
        autoHideDuration={2000}
        onClose={() => setOpenSnakeBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          User registered successfully! Redirecting you to login...
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(error)}
        autoHideDuration={3000}
        onClose={() => dispatch(resetAuth())}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

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
