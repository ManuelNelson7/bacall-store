import React from "react"
import { Link } from "react-router-dom";
import { LogoutIcon } from '@heroicons/react/outline'

const Profile = ({ user, orders, loginOut }) => {

    const formatDate = (date) => {
        const dateObj = new Date(date.toDate());
        return dateObj.toLocaleDateString();
    }

    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`
    }

    return (
        <div className="relative min-h-screen bg-gray-100 mt-10">

            <main className="py-10">
                {/* Page header */}
                <div className="max-w-3xl lg:mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center space-x-5">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    className="h-16 w-16 rounded-full"
                                    src={user.photoURL ? user.photoURL : "https://upload.wikimedia.org/wikipedia/commons/1/19/Humphrey_Bogart_1940_crop.jpg"}
                                    alt=""
                                />
                                <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 font-lora">{user.displayName}</h1>
                            <p className="text-sm font-medium text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                        <button
                            type="button"
                            onClick={() => loginOut()}
                            className="inline-flex items-center gap-1 justify-center px-4 py-2 text-white font-semibold shadow-sm text-sm rounded-md text-gray-700 bg-brown hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                        >
                            <LogoutIcon className="h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:pb-24 lg:px-8">
                        <div className="max-w-xl">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl font-lora text-gold">Order history</h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Check the status of recent orders, manage returns, and download invoices.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="sr-only">Recent orders</h2>

                            <div className="space-y-20">
                                {orders.map((order) => (
                                    <div key={order.id}>


                                        <div className="bg-primary rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                                            <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                                <div className="flex justify-between sm:block">
                                                    <dt className="font-medium text-gray-900">Date placed</dt>
                                                    <dd className="sm:mt-1">
                                                        {formatDate(order.date)}
                                                    </dd>
                                                </div>
                                                <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                                    <dt className="font-medium text-gray-900">Order number</dt>
                                                    <dd className="sm:mt-1">{order.id}</dd>
                                                </div>
                                                <div className="flex justify-between pt-6 ml-2 font-medium text-gray-900 sm:block sm:pt-0">
                                                    <dt>Total amount</dt>
                                                    <dd className="sm:mt-1 font-semibold">{formatPrice(order.total)}</dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <table className="mt-4 w-full text-gray-500 sm:mt-6">
                                            <caption className="sr-only">Products</caption>
                                            <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                                                <tr>
                                                    <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                                                        Product
                                                    </th>
                                                    <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="w-0 py-3 font-normal text-right">
                                                        Info
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                                                {order.items.map((product) => (
                                                    <tr key={product.id} className="font-poppins">
                                                        <td className="py-6 pr-8">
                                                            <div className="flex items-center">
                                                                <img
                                                                    src={product.img}
                                                                    alt={product.name}
                                                                    className="w-16 h-16 object-center object-cover rounded mr-6"
                                                                />
                                                                <div>
                                                                    <div className="font-medium text-gray-900">{product.name}</div>
                                                                    <div className="mt-1 sm:hidden">{formatPrice(product.price)}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="hidden py-6 pr-8 sm:table-cell">{formatPrice(product.price)}</td>
                                                        <td className="hidden py-6 pr-8 sm:table-cell">{product.status}</td>
                                                        <td className="py-6 font-medium text-right whitespace-nowrap">
                                                            <Link to={`/item/${product.id}`} className="text-gold">
                                                                View<span className="hidden lg:inline"> Product</span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile