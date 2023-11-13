import React from "react";
import { VIDEO } from "../../shared/constants";

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [, setError] = React.useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  function sendRequest() {
    const url = "http://localhost:7249/api/user/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <section className="bg-black-50 dark:bg-gray-900">
      <video
        className="w-full h-full object-cover transition ease-linear duration-700"
        src={VIDEO[0]}
        autoPlay
        loop
        muted
        style={{
          opacity: "0.5",
        }}
      />
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png"
            alt=""
            className="header-logo__img"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-black-800 light:border-black-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-black-900 md:text-2xl light:text-black">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black-900 light:text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-black-700 light:border-black-600 light:placeholder-black-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black-900 light:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-black-700 light:border-black-600 light:placeholder-black-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                  required={true}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-black-900 light:text-black"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-black-700 light:border-black-600 light:placeholder-black-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                  required={true}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-black-300 rounded bg-black-50 focus:ring-3 focus:ring-primary-300 light:bg-black-700 light:border-black-600 light:focus:ring-primary-600 light:ring-offset-black-800"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-black-500 light:text-black-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline light:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800"
                style={{
                  background: "black",
                }}
                onClick={() => {
                  if (handleSignUp()) {
                    sendRequest();
                  }
                }}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-black-500 light:text-black-400">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-medium text-primary-600 hover:underline light:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
