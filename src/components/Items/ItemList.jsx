import { Link } from "react-router-dom"
import Item from "./Item"

const ItemList = ({ items }) => {

  return (
    <>
      <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {items?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            stock={product.stock}
            collection={product.collection}
            sale={product.sale}
            oldPrice={product.oldPrice}
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

export default ItemList