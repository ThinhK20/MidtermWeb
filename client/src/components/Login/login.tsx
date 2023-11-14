import React from "react";
import { VIDEO } from "../../shared/constants";
import Footer from "../../shared/Footer/footer";
import Header from "../../shared/Header/header";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setError] = React.useState("");

  const handleSignUp = () => {
    if (!email.toString().includes("@")) {
      setError("Invalid email");
      return false;
    }
    return true;
  };

  const sendRequest = () => {
    const url = "http://localhost:7249/api/user/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <Header />
        <section className="bg-black-900 dark:bg-gray-900">
          <video
            className="w-full h-full object-cover transition ease-linear duration-700"
            src={VIDEO[0]}
            autoPlay
            loop
            muted
            style={{
              // make video dark
              filter: "brightness(0.5)",
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
                style={{
                  width: "250px",
                }}
              />
            </a>
            <div
              className=" bg-white rounded-lg shadow light:border md:mt-0 xl:p-0 light:bg-gray-800 light:border-gray-700 "
              style={{
                width: "400px",
                height: "350px",
              }}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-6xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl light:text-black">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-3 text-3xl font-medium text-gray-900 light:text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
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
                      className="block mb-3 text-3xl font-medium text-gray-900 light:text-black"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-3xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-primary-600 light:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 light:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
                    {/* <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline light:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800"
                    style={{
                      background: "black",
                    }}
                    onClick={() => {
                      if (handleSignUp()) {
                        sendRequest();
                      }
                    }}
                  >
                    Sign in
                  </button>
                </form>
                <p className="text-xl font-light text-gray-500 light:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline light:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
