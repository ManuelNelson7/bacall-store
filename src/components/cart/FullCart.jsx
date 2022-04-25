import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { CartContext } from "../CartContext";
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'

const FullCart = () => {


    let { cart } = useContext(CartContext)

    let subTotal = () => {
        return cart.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }

    let shipping = () => {
        return subTotal() > 150 ? 0 : 30
    }

    const taxes = () => {
        return (subTotal() * 0.01)
    }

    let total = () => {
        return subTotal() > 0 ?
            subTotal() + shipping() + parseFloat(taxes()) :
            0
    }


    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-lora font-semibold text-gold pt-10">Shopping Cart</h1>
                <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul>
                            {cart.map((item) => (
                                <ItemCart key={item.id} item={item} />
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900 font-lora ">
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4 font-poppins">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal</dt>
                                <dd className="text-sm font-medium text-gray-900">${subTotal().toFixed(2)}</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900d"> {shipping() === 0 ? "Free" : `$${shipping().toFixed(2)}`}</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="flex text-sm text-gray-600">
                                    <span>Tax estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">${taxes().toFixed(2)}</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="text-base font-medium text-gray-900 text-gold">Order total</dt>
                                <dd className="text-base font-medium text-gray-900">${total().toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default FullCart;
