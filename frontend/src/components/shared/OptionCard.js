import React from 'react'

const OptionCard = ({
  handleClick,
  selectedPaymentMethod,
  methodText,
  methodValue

}) => {

  return (
    <div className='w-[250px]' onClick={() => {handleClick(methodValue)}}>
      <div className={`inline-flex items-center justify-between w-full p-5
        rounded-lg cursor-pointer border
        ${selectedPaymentMethod === methodValue ? 
          'border-blue-600 text-blue-600'
          : 
          'text-gray-500 bg-white border-gray-200 hover:text-gray-300'}`}
      >                           
          <div className='flex flex-row'>
            <input 
              type='radio'
              value={methodValue}
              className=""
              checked={selectedPaymentMethod === methodValue}
              onClick={(e) => {handleClick(e.target.value)}}
              required
            />
            <div className="w-full ml-2">{methodText}</div>
          </div>
      </div>
    </div>
  )
}

export default OptionCard
