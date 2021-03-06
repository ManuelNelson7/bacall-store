import React from "react"
import { Link } from "react-router-dom";

const PreviewCategories = ({ categories }) => {


    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
                <div className="px-4 sm:px-6 sm:flex sm:items-center -mt-2 sm:justify-between lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-extrabold font-lora text-gray-900">Shop by Category</h2>
                    <Link to="/categories" className="hidden text-sm font-semibold text-gold font-poppins hover:text-brown transition-all duration-150 sm:block">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                            <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/categories/${category.categoryName}`}
                                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                    >
                                        <span aria-hidden="true" className="absolute inset-0">
                                            <img src={category.img} alt="" className="w-full h-full object-center object-cover" />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-dark opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-md font-bold font-poppins text-white">{category.categoryName}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <Link to="/categories" className="block text-sm font-bold text-gold font-poppins ">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PreviewCategories