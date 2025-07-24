import { FaGoogle } from "react-icons/fa";

const SocialAuthButton = () => (
  <div className="min-w-full bg-gray-300 mt-10 border rounded-sm p-3 dark:bg-blue-400">
    <div className="flex justify-center">
      <button className="flex items-center gap-3 hover:cursor-pointer">
        <FaGoogle />
        <p>Continue with Google</p>
      </button>
    </div>
  </div>
);

export default SocialAuthButton;