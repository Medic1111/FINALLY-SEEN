import { useState, useContext } from "react";
import { UiCtx } from "../../features/ui-ctx";
import { AuthCtx } from "../../features/auth-ctx";

const Auth: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  const authMgr = useContext(AuthCtx);

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-white">
      <section className="flex w-[30rem] flex-col space-y-10 px-5 md:px-0">
        <p className="text-center text-4xl font-medium text-teal-500">
          {authMgr.isLoggin ? "Log In" : "Register"}
        </p>
        {authMgr.isLoggin || (
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
          {authMgr.isLoggin ? "LOG IN" : "REGISTER"}
        </button>

        {authMgr.isLoggin && (
          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
        )}

        <p className="text-teal-500 text-center text-lg">
          {authMgr.isLoggin ? "No account? " : "Already registered? "}
          <a
            href="#"
            className="font-medium text-teal-500 underline-offset-4 hover:underline"
            onClick={() => authMgr.setIsLoggin((prev) => !prev)}
          >
            {authMgr.isLoggin ? "Create One" : "Login"}
          </a>
        </p>

        <p
          onClick={() => uiMgr.setShowModal(false)}
          className="cursor-pointer text-center text-2xl font-medium text-teal-600"
        >
          FS
        </p>
      </section>
    </div>
  );
};

export default Auth;
