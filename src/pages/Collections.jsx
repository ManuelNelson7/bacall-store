import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { categories } from '../utils/categories'
import CollectionsContainer from '../components/CollectionsContainer'

const filters = [
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'XS', label: 'XS', checked: false },
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
            { value: 'XL', label: 'XL', checked: false },
            { value: 'XXL', label: 'XXL', checked: false },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Collections() {
    const { id } = useParams()

    return (
        <div className="bg-white">
            <div>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-baseline justify-between pt-24 pb-6 border-b border-gold">
                        <h1 className="text-3xl capitalize font-bold font-lora text-dark text-gray-900">{`${id} collection`}</h1>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <CollectionsContainer />
                        </div>

                    </section>
                </main>
            </div>
        </div>
    )
}
