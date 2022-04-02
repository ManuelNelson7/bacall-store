import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {

    return (
        <div className='pt-24 flex justify-center min-h-screen bg-primary'>
            <div className="w-container max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2">

                <p className='mb-4'>
                    Al ItemCount se le pasarían 1 o 2 propiedades: <br />
                    - El stock (obligatoria) <br />
                    - El valor inicial (default en 0)
                </p>

                <div className="flex gap-2 bg-white p-2 rounded-lg">
                    <ItemCount stock={3} initial={1} />
                    <ItemCount stock={5} />
                </div>

            </div>
        </div>
    )
}

export default ItemListContainer