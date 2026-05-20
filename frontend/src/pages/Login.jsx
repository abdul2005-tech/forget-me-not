import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.error ||
                "Login failed"
            );
        }
    };

    return (

        <div className="min-h-screen flex bg-slate-950 text-white">

            {/* LEFT SECTION */}

            <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950">

                <div className="absolute inset-0 opacity-20">

                    <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl top-10 left-10"></div>

                    <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl bottom-10 right-10"></div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="z-10 text-center px-10"
                >

                    <h1 className="text-6xl font-bold mb-6">

                        Forget Me Not

                    </h1>

                    <p className="text-xl text-slate-300 leading-relaxed">

                        Never leave your essentials behind.

                        Smart IoT + AI powered tracking
                        for your everyday items.

                    </p>

                </motion.div>

            </div>

            {/* RIGHT SECTION */}

            <div className="flex flex-1 items-center justify-center px-6">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
                >

                    <h2 className="text-4xl font-bold mb-2">

                        Welcome Back

                    </h2>

                    <p className="text-slate-400 mb-8">

                        Login to continue your smart tracking experience.

                    </p>

                    {/* FORM */}

                    <form onSubmit={handleLogin}>

                        {/* EMAIL */}

                        <div className="mb-5">

                            <label className="block mb-2 text-sm text-slate-300">

                                Email

                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        {/* PASSWORD */}

                        <div className="mb-6">

                            <label className="block mb-2 text-sm text-slate-300">

                                Password

                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold text-lg"
                        >

                            Login

                        </button>

                    </form>

                    {/* SIGNUP */}

                    <p className="text-center text-slate-400 mt-6">

                        Don’t have an account?

                        <span className="text-blue-400 cursor-pointer ml-2 hover:text-blue-300">

                            Sign Up

                        </span>

                    </p>

                </motion.div>

            </div>

        </div>
    );
}

export default Login;