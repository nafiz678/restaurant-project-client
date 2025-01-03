import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginBg from "@/assets/others/authentication2.png"
import { AuthContext } from "@/provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";





const Login = () => {
    const { signin, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const form2 = location?.state?.from || "/"
    console.log(location.state.from)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value

        if (validateCaptcha(captcha) === true) {

            signin(email, password)
            .then(res=>{
                console.log(res.user)
                setUser(res.user)
                toast.success("Login successful")
                navigate(form2, { replace: true} )
            })
            .catch(err=>{
                console.log(err.message)
                toast.error(err.message)
            })

        } else {
            toast.error("Captcha didn't matched")
        }
        



    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Login || Bistro Boss</title>
            </Helmet>
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left Section: Image/Illustration */}
                <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
                    <img
                        src={loginBg}
                        alt="Illustration"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Section: Form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Type here"
                                className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2.5 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2.5 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Captcha Placeholder */}
                        <div className="mb-4">
                            <div>
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </div>
                            <label htmlFor="captcha" className="block text-sm font-medium text-gray-600">
                                Captcha
                            </label>
                            <div className="flex items-center relative">
                                <input
                                    type="text"
                                    id="captcha"
                                    name="captcha"
                                    placeholder="Type here"
                                    className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2.5 focus:ring-2 focus:ring-blue-500"
                                />
                                {/* <button className="absolute" onClick={}>Validate</button> */}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full hover:scale-[1.02] bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2.5 rounded-md transition duration-300 ease-out active:scale-[0.98]"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-4 text-sm text-gray-600">
                        New here?{" "}
                        <Link to={"/signup"} className="text-yellow-500 font-medium hover:underline">
                            Create a New Account
                        </Link>
                    </p>

                    {/* google or github Sign-in */}
                    {/* <div className="mt-6">
            <p className="text-center text-sm text-gray-600">Or sign in with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-facebook-f"></i> 
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-google"></i> 
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-github"></i> 
              </button>
            </div>
          </div> */}


                </div>
            </div>
        </div>
    );
};

export default Login;
