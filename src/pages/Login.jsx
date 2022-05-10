import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const [message, setMessage] = useState("");

    const navigate = useNavigate()

    let { login, loginWithGoogle, resetPassword } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }

    const handleGoogleLogin = async () => {
        await loginWithGoogle()
        navigate("/")
    }

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        if (user) {
            try {
                await login(user.email, user.password);
                navigate('/')
            } catch (e) {
                e.code === "auth/wrong-password" && setError("Wrong password");
                e.code === "auth/user-not-found" && setError("User not found");
            }
        } else {
            setError("Please fill in all fields");
        }
    }

    const handleResetPassword = () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        !user.email && setError("Please fill an email");
        user.email && !emailRegex.test(user.email) && setError("Please enter a valid email");
        if (user.email && emailRegex.test(user.email)) {
            try {
                resetPassword(user.email);
                setMessage("Password reset email sent");
            } catch (error) {
                setError(error.message)
            }
        }

    }

    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-lora">Login at bacall store</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Don't you have an account?{' '}
                            <Link to="/signup" className="underline text-gold font-semibold hover:text-brown duration-150 transition-all">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Sign in with</p>
                                <button className="mt-1 w-full" onClick={() => handleGoogleLogin()}>
                                    <div className="w-full inline-flex justify-center py-1.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Sign in with Google</span>
                                        <img src="/img/google-icon.svg" className="h-6 w-6" alt="" />
                                    </div>
                                </button>
                            </div>

                            <div className="mt-6 relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <p className="font-medium text-dark hover:text-brown pointer" onClick={() => handleResetPassword()}>
                                            Forgot your password?
                                        </p>
                                    </div>
                                </div>

                                {error && <div className="text-brown text-sm">{error}</div>}
                                {message && <div className="text-gold text-sm">{message}</div>}

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gold hover:bg-brown transition-all duration-150"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    alt="Bacall store"
                    src="http://4.bp.blogspot.com/--8zzrZSTmFQ/Xf0Bx82pwQI/AAAAAAAAjU8/lNGmH95PN-Mekoc_1jTJbCx67lEzm6ZHACK4BGAYYCw/s1600/Hb%2By%2BLB.jpg"
                />
            </div>
        </div>
    )
}

export default Login