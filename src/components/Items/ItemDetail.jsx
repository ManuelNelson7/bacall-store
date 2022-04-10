import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import ItemCount from './ItemCount'
import Spinner from '../Spinner'
import productList from '../../utils/productList'
import Item from './Item'
import Related from './Related'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ItemDetail({ id, name, category, price, img, stock, description, sizes, related }) {

  const [selectedSize, setSelectedSize] = useState()

  return (
    <div className="bg-white max-w-2xl mx-auto py-16 px-0 sm:py-24 lg:max-w-7xl">
      <div className="pt-6 grid md:grid-cols-2 grid-cols-1">

        {/* Image gallery */}
        <div className="p-5">
          <div className="rounded-lg overflow-hidden lg:block">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto pt-10 pb-16 px-4 lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-1 lg:gap-x-8">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold font-lora tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-dark mt-4 font-poppins">${price}</p>

            <div className="mt-8">

              {/* Sizes */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-md text-gray-900 opacity-90 font-medium font-poppins">Size</h3>
                </div>

                <RadioGroup value={selectedSize} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-8 lg:grid-cols-3">
                    {sizes?.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        onClick={() => setSelectedSize(size)}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-primary text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-gold' : '',
                            'group relative border rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <ItemCount stock={stock} />
            </div>
          </div>

          <div className="py-2 lg:pt-0 lg:col-start-1 lg:col-span-2 lg:pr-8">
            {/* Description and details */}
            <div className='mt-4'>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
              </div>

              {related.length > 1 &&

                <div className="mt-8">
                  <h3 className='text-lg font-lora text-gold font-semibold'>Related items</h3>
                  <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                    {related.filter(item => item.id !== id).map((product) => (
                      <Related
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
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}