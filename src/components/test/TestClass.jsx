import React from 'react'

const TestClass = ({ fact, askFact }) => {



  return (
    <div className='mt-40 p-12'>
      <h3 className='font-lora font-semibold text-gold text-lg'>Did you know this fact about cats?</h3>

      <div className='border-2 border-gold p-2 mt-2'>
        <span className='font-poppins text-sm'>{fact.fact}</span>
      </div>

      <button className='bg-gold rounded-md text-white py-1.5 px-2 mt-3' onClick={() => askFact()}>Get another fact</button>
    </div>
  )
}

export default TestClass