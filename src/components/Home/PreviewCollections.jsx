
const PreviewCollections = ({ collections }) => {

    const sortedCollections = collections.sort((a, b) => {
        return b.name > a.name
    })

    return (
        <div className="bg-white">
            <div className="max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight font-lora text-gray-900">Shop by Collection</h2>

                <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    {sortedCollections.map((category) => (
                        <a key={category.name} href={category.href} className="group block">
                            <div
                                aria-hidden="true"
                                className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                            >
                                <img
                                    src={category.img}
                                    alt={`${category.name} collection`}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-md font-semibold capitalize font-poppins text-gray-900">{category.name}</h3>
                            <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewCollections