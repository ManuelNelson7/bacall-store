import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/solid'
import ItemListContainer from '../components/ItemListContainer'
import { Link } from 'react-router-dom'
import { categories } from '../utils/categories'

const sortOptions = [
    { name: 'Price: Low to High', state: 'low', current: false },
    { name: 'Price: High to Low', state: 'high', current: false },
    { name: 'Default', state: 'default', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Categories = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [priceFilter, setpriceFilter] = useState('default')
    const [saleFilter, setSaleFilter] = useState(false)


    const handleSale = (event) => {
        setSaleFilter(event.target.checked ? true : false)
    }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul className="font-medium text-gray-900 px-2 py-3">
                                        {categories.map((category) => (
                                            <li key={category.name}>
                                                <Link to={`/categories/${category.id}`} onClick={() => setMobileFiltersOpen(false)} className="block px-2 py-3">
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link to='/categories' className='px-2 py-3'>
                                                All products
                                            </Link>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-baseline justify-between pt-24 pb-6 border-b z-10 border-gold">
                        <h1 className="text-3xl font-bold font-lora text-dark text-gray-900">Products</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-gold ring-opacity-50 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <button
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                            onClick={() => setpriceFilter(option.state)}
                                                        >
                                                            {option.name}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FilterIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                    <li>
                                        <Link to='/categories' className='hover:text-gold transition-all duration-100'>
                                            All products
                                        </Link>
                                    </li>
                                    {categories.map((category) => (
                                        <li key={category.name}>
                                            <Link to={`/categories/${category.id}`}
                                                className='hover:text-gold transition-all duration-100'
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5">

                                    <div key='sale' className="flex items-center">
                                        <input
                                            id={`filter-sale`}
                                            name={`sale[]`}
                                            defaultValue={false}
                                            type="checkbox"
                                            defaultChecked={false}
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                            onChange={(e) => handleSale(e)}
                                        />
                                        <label
                                            htmlFor={`filter-sale`}
                                            className="ml-3 text-sm text-gray-600"
                                        >
                                            Sale
                                        </label>
                                    </div>

                                </div>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <ItemListContainer priceFilter={priceFilter} saleFilter={saleFilter} />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Categories
