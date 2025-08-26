import { GoogleOAuthProvider } from "@react-oauth/google";
import SocialAuthButton from "../components/auth/SocialAuthButton";

const GoogleLogin = () => {
  return (
       <GoogleOAuthProvider clientId="608349029873-eoid3huc3qjkm1sdh7141t9ska487q82.apps.googleusercontent.com">
        <SocialAuthButton />
      </GoogleOAuthProvider>
  )
}

export default GoogleLogin
