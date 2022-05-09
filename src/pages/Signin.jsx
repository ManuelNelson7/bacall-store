import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom";


const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: ""
    });
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    let { signup } = useContext(AppContext)


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email) && setError("Invalid email");
        user.password.length < 6 && setError("Password must be at least 6 characters");
        user.name.length < 3 && setError("Name must be at least 3 characters");
        user.password !== passwordConfirm && setError("Passwords do not match");
        if (user) {

            if (user.password === passwordConfirm && user.password.length > 5 && user.name.length > 2) {
                try {
                    await signup(user.email, user.password, user.name);
                    navigate('/')
                } catch (e) {
                    error.code === "auth/email-already-in-use" && setError("Email already in use")
                    error.code === "auth/invalid-email" && setError("Invalid email")
                    error.code === "auth/weak-password" && setError("Password is too weak")
                }
            } else {
                setError("Please review your inputs");
            }
        } else {
            setError("Please fill in all fields")
        }
    }


    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-lora">Sign up at bacall store</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="underline text-gold font-semibold hover:text-brown duration-150 transition-all">
                                Log in
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Sign in with</p>

                                <button className="mt-1 w-full">
                                    <div className="w-full inline-flex justify-center py-1.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Sign in with Facebook</span>
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

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Choose a Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="passwordConfirm"
                                            name="passwordConfirm"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            onChange={(e) => { setPasswordConfirm(e.target.value) }}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {error && <div className="text-brown text-sm">{error}</div>}

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gold hover:bg-brown transition-all duration-150"
                                    >
                                        Sign in
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
                    src="https://www.doctormacro.com/Images/Bogart,%20Humphrey/Annex/Annex%20-%20Bogart,%20Humphrey%20(Big%20Sleep,%20The)_14C.jpg"
                />
            </div>
        </div>
    )
}

export default Signin