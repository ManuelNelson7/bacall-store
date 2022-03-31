import React, { useState } from 'react'
import ItemCount from './ItemCount'


const useCounter = (stock, initial = 0) => {
    const [counter, setCounter] = useState(initial);

    const increase = () => counter < stock && setCounter(counter + 1);
    const decrease = () => counter > 0 && setCounter(counter - 1);


    return {
        counter,
        increase,
        decrease
    }

}

const ItemListContainer = () => {

    const pago = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('50')
        }, 3000)
    })

    pago.then((res) => {
        console.log('gracias por pagar ' + res);
    })

    return (
        <div className='pt-24 flex justify-center min-h-screen bg-primary'>
            <div className="w-container max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2">

                <p className='mb-4'>Generé un custom hook para poder reutilizar el componente. <br />
                    Al ItemCount se le pasarían 2 propiedades: <br />
                    - El stock (obligatoria) <br />
                    - El valor inicial (default en 0)

                </p>

                <div className="flex gap-2 bg-white p-2 rounded-lg">
                    <ItemCount useCounter={useCounter(5, 1)} />

                    <ItemCount useCounter={useCounter(3)} />
                </div>

            </div>
        </div>
    )
}

export default ItemListContainer