import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CollectionsContainer from '../components/CollectionsContainer'

const Collections = () => {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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

export default Collections
