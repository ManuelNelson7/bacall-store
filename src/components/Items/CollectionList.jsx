import { Link } from "react-router-dom"
import CollectionItem from "./CollectionItem"

const CollectionList = ({ items }) => {

    return (
        <>
            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-10 sm:gap-x-6 lg:gap-x-8">
                {items?.map((item) => (
                    <CollectionItem
                        item={item}
                    />
                ))}
            </div>

            {
                items.length === 0 && (
                    <div className="text-md font-poppins text-dark flex flex-col items-center">
                        Sorry, no items found according to your search.
                        <Link to="/categories" className="pt-2 text-gold underline">
                            Go back to categories
                        </Link>
                    </div>
                )
            }
        </>


    )
}

export default CollectionList