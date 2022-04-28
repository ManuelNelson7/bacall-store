import Item from "./Item"

const ItemList = ({ products }) => {

  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {products.map((product) => (
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

  )
}

export default ItemList