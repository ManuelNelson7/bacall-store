import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

const BreadCrumb = ({ category, name }) => {
    return (


        <nav className="flex ml-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                    <div>
                        <Link to="/" className="text-dark hover:text-gold transition-all duration-120">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-dark" aria-hidden="true" />
                        <Link
                            to={`/categories`}
                            className="ml-4 text-sm font-medium text-dark hover:text-gold transition-all duration-120"
                           
                        >
                            Categories
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-dark" aria-hidden="true" />
                        <Link
                            to={`/categories/${category}`}
                            className="ml-4 text-sm font-medium text-dark hover:text-gold transition-all duration-120"
                        >
                            {name}
                        </Link>
                    </div>
                </li>


            </ol>
        </nav>
    )
}

export default BreadCrumb