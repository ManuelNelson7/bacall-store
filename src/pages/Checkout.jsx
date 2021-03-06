import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/AppContext"
import { TrashIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"

const Checkout = () => {
    let {
        cart,
        subTotal,
        shipping,
        taxes,
        total,
        removeFromCart,
        cleanCart,
        user,
        formatPrice
    } = useContext(AppContext)

    const [checkOutId, setCheckOutId] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate()

    const validate = values => {
        const errors = {}

        if (!user) {
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
        }

        if (!user) {
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length < 5) {
                errors.name = 'Must be 5 characters or more'
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less'
            }
        }

        if (!values.address) {
            errors.address = 'Required'
        } else if (values.address.length < 5) {
            errors.address = 'Must be 5 characters or more'
        } else if (values.address.length > 20) {
            errors.address = 'Must be 20 characters or less'
        }

        if (!values.phone) {
            errors.phone = 'Required'
        } else if (values.phone.length < 5) {
            errors.phone = 'Must be 5 characters or more'
        } else if (!/^[0-9]{5,20}$/.test(values.phone)) {
            errors.phone = 'Must be a valid phone number'
        }


        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            address: "",
            phone: "",
            apartment: "",
        },
        validate: validate,
        onSubmit: (dataForm, { resetForm }) => {
            // Setting the buyer object
            let order
            if (user) {
                order = {
                    buyer: {
                        email: user.email,
                        name: user.displayName,
                        address: dataForm.address,
                        apartment: dataForm.apartment,
                        phone: dataForm.phone,
                    },
                    items: cart,
                    date: serverTimestamp(),
                    subtotal: Number(subTotal()),
                    shipping: Number(shipping()),
                    taxes: Number(taxes()),
                    total: Number(total())
                }
            } else {
                order = {
                    buyer: {
                        email: dataForm.email,
                        name: dataForm.name,
                        address: dataForm.address,
                        apartment: dataForm.apartment,
                        phone: dataForm.phone,
                    },
                    items: cart,
                    date: serverTimestamp(),
                    subtotal: Number(subTotal()),
                    shipping: Number(shipping()),
                    taxes: Number(taxes()),
                    total: Number(total())
                }
            }
            // Sendind the data to firebase
            const db = getFirestore();
            const orderRef = collection(db, "orders");

            if (order.buyer.email && order.buyer.name && order.buyer.address && order.buyer.phone) {
                // Addind the order to the orders collection
                addDoc(orderRef, order).then(({ id }) => {
                    setCheckOutId(id);
                    navigate("/order/" + id);
                    cleanCart();
                });
                resetForm();
            } else {
                setError("Please fill all the fields");
            }
        },
    })

    return (
        <>

            <div className="bg-white pt-10">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Checkout</h2>

                    <form onSubmit={formik.handleSubmit} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>


                            {!user && <div>
                                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                                <div className="mt-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-dark">
                                        Email address *
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            {...formik.getFieldProps('email')}
                                            className="block w-full border-2 py-1.5 pl-2 border-primary rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {formik.errors.email && formik.touched.email ? <p className="text-brown text-xs mt-2">{formik.errors.email}</p> : null}
                                    </div>
                                    <div className="mt-2 flex gap-1 text-sm">
                                        <p>Would you like to skip this step?
                                        </p>
                                        <Link to="/login" className="text-gold font-semibold underline">Log in</Link>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-dark">
                                        Name *
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            {...formik.getFieldProps('name')}
                                            className="block w-full border-2 py-1.5 pl-2 border-primary rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {formik.errors.name && formik.touched.name ? <p className="text-brown text-xs mt-2">{formik.errors.name}</p> : null}
                                    </div>
                                </div>
                            </div>}

                            <div className={user ? "mt-10" : "mt-10 border-t border-gray-200 pt-10"}>
                                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address *
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                {...formik.getFieldProps('address')}
                                                className="block w-full border-primary border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {formik.errors.address && formik.touched.address ? <p className="text-brown text-xs mt-2">{formik.errors.address}</p> : null}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                            Apartment, suite, etc.
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                {...formik.getFieldProps('apartment')}
                                                className="block w-full border-primary border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone *
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                {...formik.getFieldProps('phone')}
                                                className="block w-full border-primary rounded-md border-2 py-1.5 pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {formik.errors.phone && formik.touched.phone ? <p className="text-brown text-xs mt-2">{formik.errors.phone}</p> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                            <div className="mt-4 bg-white border border-primary rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul className="divide-y divide-primary">
                                    {cart.map((item) => (
                                        <li key={item.id} className="flex py-6 px-4 sm:px-6">
                                            <div className="flex-shrink-0">
                                                <img src={item.img} alt={item.name} className="w-20 rounded-md" />
                                            </div>

                                            <div className="ml-6 flex-1 flex flex-col">
                                                <div className="flex">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-sm">
                                                            <Link to={`/item/${item.id}`} className="font-semibold font-poppins text-gray-700 hover:text-gray-800">
                                                                {item.name}
                                                            </Link>
                                                        </h4>
                                                        <p className="mt-1 text-sm text-gray-500">{(`Size: ${item.size}`)}</p>
                                                        <p className="mt-1 text-sm text-gray-500">Category: {item.categoryId}</p>
                                                    </div>

                                                    <div className="ml-4 flex-shrink-0 flow-root">
                                                        <button
                                                            type="button"
                                                            onClick={() => removeFromCart(item)}
                                                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                                        >
                                                            <span className="sr-only">Remove</span>
                                                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex-1 pt-2 flex items-end justify-between">
                                                    <p className="mt-1 text-sm font-medium text-gray-900">${item.price}</p>

                                                    <div className="ml-4">
                                                        <label htmlFor="quantity" className="sr-only">
                                                            Quantity
                                                        </label>
                                                        <p className="py-1.5 px-1.5 bg-primary rounded-md focus:outline-none">
                                                            {item.quantity}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <dl className="border-t border-primary py-6 px-4 space-y-6 sm:px-6 font-poppins">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">{formatPrice(subTotal())}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Shipping</dt>
                                        <dd className="text-sm font-medium text-gray-900">{shipping() === 0 ? "Free" : formatPrice(shipping())}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Taxes</dt>
                                        <dd className="text-sm font-medium text-gray-900">{formatPrice(taxes())}</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-primary pt-6">
                                        <dt className="text-base font-medium">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">{formatPrice(total())}</dd>
                                    </div>
                                </dl>

                                <div className="border-t border-primary py-6 px-4 sm:px-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-gold border border-transparent rounded-lg shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-brown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brown-500 transition-all duration-150"
                                    >
                                        Confirm order
                                    </button>

                                    {error && <p className="text-brown text-xs mt-2">{error}</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout