
import { Fragment, useContext, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { navigation } from './navigation'
import ShoppingCart from './ShoppingCart'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    let { user } = useContext(AppContext)
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
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
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-sm text-gold font-medium font-poppins uppercase transition-all duration-100 py-4 px-1 border-b-2'
                                                            : 'text-sm text-dark hover:text-gold font-medium font-poppins uppercase transition-all duration-100 py-4 px-1 border-b-2'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm font-poppins">
                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-top object-cover" />
                                                        </div>
                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-semibold text-dark font-lora">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
                                                    >
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <Link to={`categories/${item.name}`} className="text-dark hover:text-brown font-poppins transition-all duration-100  -m-2 p-2 block text-sm">
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="text-sm text-dark hover:text-gold font-medium font-poppins uppercase transition-all duration-100">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    {!user === null ? (
                                        <Link to="/signin" className="text-sm text-dark hover:text-brown font-poppins transition-all duration-100">
                                            Sign In
                                        </Link>) :
                                        (<Link to="/profile" className="text-sm text-dark hover:text-brown font-poppins transition-all duration-100">
                                            Profile
                                        </Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="fixed top-0 left-0 w-screen bg-primary z-10">

                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gold">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/" className='py-4'>
                                    <img
                                        className="h-6 w-auto"
                                        src="/img/logo.svg"
                                        alt="Logo Bacall"
                                    />
                                </Link>
                            </div>


                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">

                                <div className="h-full flex space-x-8">

                                    <Link
                                        to='/categories'
                                        className='flex items-center px-2.5 text-sm text-dark hover:text-gold font-medium font-poppins uppercase transition-all duration-100'
                                    >
                                        Products
                                    </Link>

                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex ml-2.5">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'px-2.5 text-sm text-gold font-medium font-poppins uppercase'
                                                                    : 'px-2.5 text-sm text-dark hover:text-gold font-medium font-poppins uppercase transition-all duration-100',
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                            <div className="relative bg-white">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div className="flex gap-y-10 gap-x-8 py-16">
                                                                        <div className="flex gap-x-8 order-2">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                    <div className="h-60 w-60 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="w-full h-full object-top object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href} className="mt-6 block font-semibold font-lora text-dark">
                                                                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true" className="mt-1 text-dark">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-12 text-sm order-1">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-lora font-semibold text-dark-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex">
                                                                                                <Link to={`categories/${item.name}`} className="hover:text-brown">
                                                                                                    {item.name}
                                                                                                </Link>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className='flex items-center px-2.5 text-sm text-dark hover:text-gold font-medium font-poppins uppercase transition-all duration-100'
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user === null ? (
                                        <Link to="/sign-in" className="text-sm text-dark hover:text-brown font-poppins transition-all duration-100">
                                            Sign In
                                        </Link>) :
                                        (<Link to="/profile" className="text-sm text-dark hover:text-brown font-poppins transition-all duration-100">
                                            {`${user.displayName.substring(0, 9)}...`}
                                        </Link>)
                                    }
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                </div>

                                {/* Cart */}
                                <ShoppingCart />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar