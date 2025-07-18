import React from "react";
import { FaGoogle } from "react-icons/fa";
import Textfield from "./buttons/Textfield";
const Login = () => {
  return (
    <div className="flex justify-center items-center m-3">
      <div className="bg-zinc-200 w-[700px] min-h-screen rounded-md ">
        <div className="m-15 ">
          <h1 className="text-3xl uppercase font-bold">Login</h1>
          <div className="mt-2 flex gap-5">
            <p className="text-gray-600">New User ? </p>
            <p className="text-blue-900">
              <span>
                <a href="">Register here</a>
              </span>
            </p>
          </div>

          <div className="min-w-full bg-gray-300 mt-10 border rounded-sm p-3">
            <div className="flex justify-center ">
              <button className="flex items-center gap-3 hover:cursor-pointer">
                <FaGoogle />
                <p>Continue with google</p>
              </button>
            </div>
          </div>

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

          <div>
            <form className="mt-10">
              <label className="">Enter your email</label>
              <Textfield placeholder={"Email"} inpType={"text"} textFieldValue={"email"}></Textfield>
              <label className="">Enter your Password</label>
              <Textfield placeholder={"Password"} inpType={"password"} textFieldValue={"password"}></Textfield>
              <button
                type="button"
                className="bg-blue-900 w-full text-white rounded-md"
              
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
