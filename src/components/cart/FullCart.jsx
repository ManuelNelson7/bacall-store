import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { CartContext } from "../CartContext";

const FullCart = () => {
    const [show, setShow] = useState(false);

    let { cart } = useContext(CartContext)

    return (
        <div className="bg-white max-w-2xl mx-auto mt-16 px-2 md:px-0 lg:max-w-7xl">

            <div className="w-full h-full overflow-x-hidden flex justify-center" id="chec-div">
                <div className="w-full overflow-x-hidden transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-center" id="cart">
                        <div className="lg:justify-start w-full pl-4 pr-10 md:pr-11 md:pl-11 md:py-12 py-8 bg-white overflow-x-hidden h-screen" id="scroll">
                            <Link to='/categories' className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <p className="text-sm pl-2 leading-none">Keep shopping</p>
                            </Link>
                            <p className="text-3xl font-lora font-semibold text-gold pt-6">Shopping bag</p>


                            {cart.map((item) => {
                                return (
                                    <ItemCart key={item.id} item={item} />
                                )
                            })}

                        </div>
                        <div className=" md:w-1/2 w-full bg-primary h-full">
                            <div className="flex flex-col items-center md:h-screen py-20 justify-between">
                                <div className="w-full px-20 flex flex-col items-center">
                                    <p className="text-3xl font-lora text-gold font-semibold">Summary</p>

                                    <div className="w-full font-poppins text-sm">
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="leading-none font-poppins font-medium text-dark">Subtotal</p>
                                            <p className="leading-none text-dark">$9,000</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="leading-none font-poppins font-medium text-dark">Shipping</p>
                                            <p className="leading-none text-dark">$30</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="leading-none font-medium text-dark">Tax</p>
                                            <p className="leading-none  text-dark">$35</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-20 font-poppins text-sm">
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-lg leading-normal text-dark">Total</p>
                                        <p className="text-lg font-semibold leading-normal text-right text-dark">$10,240</p>
                                    </div>
                                    <Link to='checkout' className="uppercase flex justify-center outline outline-2 w-full py-3outline-gold text-gold font-semibold px-4 py-2.5 rounded-md transition-all duration-150 hover:bg-brown hover:text-white hover:outline-brown">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FullCart;
