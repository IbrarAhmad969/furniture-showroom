import { FaGoogle } from "react-icons/fa";

import { useGoogleLogin } from "@react-oauth/google";
import api from "../../api/api"; // first get req to get code.
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SocialAuthButton = () => {
  const [loading, setLoading] = useState(false);

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    setLoading(true);
    // AuthResult gets data when user allow permission from consent page. google
    try {
      if (authResult["code"]) {
        const code = authResult.code;
        const result = await api.get(`/google?code=${code}`, {
          withCredentials: true,
        });

        const { user, accessToken, refreshToken } = result.data.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        loginUser(user);
        navigate("/");
      } else {
        console.log(authResult);
        throw new Error("authResult");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        {loading ? (
          <div className="flex flex-col justify-center items-center">
            <div className="w-10 h-10 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <button
            onClick={googleLogin}
            className="flex items-center gap-3 hover:cursor-pointer"
          >
            <FaGoogle />
            <p>Continue with Google</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialAuthButton;
