import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3DBC9lWTLL5YA_M1AQ_uYGtT7ySloBoI",
  authDomain: "furniture-showroom-ed91e.firebaseapp.com",
  projectId: "furniture-showroom-ed91e",
  storageBucket: "furniture-showroom-ed91e.firebasestorage.app",
  messagingSenderId: "496168942120",
  appId: "1:496168942120:web:19393f05acff6e7ebc931d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
