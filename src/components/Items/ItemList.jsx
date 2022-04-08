import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-0 sm:py-24 lg:max-w-7xl">
      <h2 className="text-2xl font-lora font-bold text-gold tracking-tight text-gray-900">Trending products</h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemList