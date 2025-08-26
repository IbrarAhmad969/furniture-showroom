import { FaGoogle } from "react-icons/fa";

import { useGoogleLogin } from "@react-oauth/google";
import api from "../../api/api"; // first get req to get code.
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SocialAuthButton = () => {

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      console.log("inside try block... ")
      if (authResult["code"]) {
        const code = authResult.code;
        console.log(code);

        const result = await api.get(`/google?code=${code}`);

        console.log("now api.get method executed ")

        const { user, accessToken, refreshToken } = result.data.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        loginUser(user);

        console.log(`Google login successful. Welcome ${user.name}`);

        navigate("/");
        
      } else {
        console.log(authResult);
        throw new Error("authResult");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="min-w-full bg-gray-300 mt-10 border rounded-sm p-3 dark:bg-blue-400">
      <div className="flex justify-center">
        <button
          onClick={googleLogin}
          className="flex items-center gap-3 hover:cursor-pointer"
        >
          <FaGoogle />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialAuthButton;
