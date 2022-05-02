import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../components/cart/ItemCart";
import { AppContext } from "../components/AppContext";

const FullCart = () => {
    let { cart, subTotal, shipping, taxes, total } = useContext(AppContext)

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-lora font-semibold text-gold pt-10">Shopping Cart</h1>
                <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        {cart.length === 0 && <p to="/categories" className="text-md font-lora font-medium text-dark pt-6">No items in the cart yet, <Link to='/categories' className="underline text-brown">keep shopping</Link></p>}

                        <ul>
                            {cart.map((item) => (
                                <ItemCart key={item.id} item={item} />
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}

                    {cart.length > 0 &&
                        <section
                            aria-labelledby="summary-heading"
                            className="md:mt-16 border-t-gold border-t-2 md:border-t-0 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
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
                                <Link to='/checkout' className="uppercase flex justify-center outline outline-2 w-full py-3outline-gold text-gold font-semibold px-4 py-2.5 rounded-md transition-all duration-150 hover:bg-gold hover:text-white">
                                    Checkout
                                </Link>
                            </div>
                        </section>
                    }
                </form>
            </div>
        </div>
    )
}

export default FullCart;
