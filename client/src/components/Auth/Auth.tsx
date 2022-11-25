import { useState } from "react";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggin: boolean;
}

const Auth: React.FC<Props> = ({ setShowModal, isLoggin, setIsLoggin }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-white">
      <section className="flex w-[30rem] flex-col space-y-10 px-5 md:px-0">
        <p className="text-center text-4xl font-medium text-teal-500">
          {isLoggin ? "Log In" : "Register"}
        </p>
        {isLoggin || (
          <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-500">
            <input
              type="text"
              placeholder="Email"
              className="text-teal-900 w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </label>
        )}

        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-500">
          <input
            type="text"
            placeholder="Username"
            className="text-teal-900 w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </label>

        <label className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-teal-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-teal-900"
          />
        </label>

        <button className="transform rounded-sm bg-teal-600 py-2 font-bold duration-300 hover:bg-teal-400">
          {isLoggin ? "LOG IN" : "REGISTER"}
        </button>

        {isLoggin && (
          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
        )}

        <p className="text-teal-500 text-center text-lg">
          {isLoggin ? "No account? " : "Already registered? "}
          <a
            href="#"
            className="font-medium text-teal-500 underline-offset-4 hover:underline"
            onClick={() => setIsLoggin((prev) => !prev)}
          >
            {isLoggin ? "Create One" : "Login"}
          </a>
        </p>

        <p
          onClick={() => setShowModal(false)}
          className="cursor-pointer text-center text-2xl font-medium text-teal-600"
        >
          FS
        </p>
      </section>
    </div>
  );
};

export default Auth;
