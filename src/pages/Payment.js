import React, { useState, useEffect, useContext } from 'react'

import OptionCard from '../components/shared/OptionCard'

import { GeneralContext } from '../context/GeneralContextWrapper'

const Payment = () => {
  console.log('Pago')
  
  const { successfulPayment, setSuccessfulPayment, isPaymentMethod, setIsPaymentMethod } = useContext(GeneralContext)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Mercado Pago')
  /* const [successfulPayment, setSuccessfulPayment] = useState(null)
  const [isPaymentMethod, setIsPaymentMethod] = useState(true) */

  const price = '12313343255'

  const handleClick = (value) => {
    setSelectedPaymentMethod(value)
  }

  const handlePayment = () => {
    setIsPaymentMethod(false)
    if (selectedPaymentMethod === 'Transferencia Bancaria') {
      setSuccessfulPayment(true)
    } else {
      const lastChar = price[price.length - 1]
      if (lastChar < 8) {
        setSuccessfulPayment(true)
      } else {
        setSuccessfulPayment(false)
      }
    }
  }


  return (
    <div className="h-screen w-screen flex flex-row">
      <div className='h-full w-full bg-[#ECECF3] flex flex-col justify-center items-center'>

        <div className='w-[600px] h-[600px] bg-white rounded-md'>

          {isPaymentMethod ? 
          (
            <div className='flex flex-col relative h-full'> 
              <span className='text-lg font-bold text-zinc-800 mt-5 ml-5'>
                Resumen
              </span>

              <div className='flex flex-col justify-around m-4 p-4 bg-[#ECECF3] rounded-md'>

                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between text-zinc-600'>
                    <span>Profesional:</span>
                    <span>Encuadrado</span>
                  </div>

                  <div className='flex flex-row justify-between text-zinc-600'>
                    <span>Servicio:</span>
                    <span>Encuadrado</span>
                  </div>

                  <div className='flex flex-row justify-between text-zinc-600'>
                    <span>Fecha:</span>
                    <span>Encuadrado</span>
                  </div>

                  <div className='flex flex-row justify-between text-zinc-600'>
                    <span>Valor Total:</span>
                    <span>Encuadrado</span>
                  </div>
                </div>

              </div>

              <span className='text-lg font-bold text-zinc-800 mt-5 ml-5'>
                Método de Pago
              </span>

              <div className='flex flex-col gap-2 items-center mt-8'>
                <OptionCard
                  handleClick={handleClick}
                  selectedPaymentMethod={selectedPaymentMethod}
                  methodText={'Mercado Pago'}
                  methodValue={'Mercado Pago'}
                />

                <OptionCard
                  handleClick={handleClick}
                  selectedPaymentMethod={selectedPaymentMethod}
                  methodText={'Transferencia Bancaria'}
                  methodValue={'Transferencia Bancaria'}
                />
              </div>

              <div className='flex flex-row justify-around w-full absolute bottom-8'>
                <button
                  type="submit"
                  className="w-[24rem] bg-[#4D4EB0] rounded-lg text-white py-1"
                  onClick={handlePayment}
                >
                  Pagar
                </button>
              </div>
        
            </div>
          ) : successfulPayment ? (
              <div className='flex flex-col relative h-full justify-center items-center'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'100px'}>
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>

                <span className='text-lg font-bold text-zinc-800 mt-5 ml-5'>
                  Pago exitoso
                </span>
                <span className='text-md font-regular text-zinc-800 ml-5'>
                  Muchas gracias por su compra
                </span>
              </div>
            ) : (
              <div className='flex flex-col relative h-full justify-center items-center'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'100px'}>
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </svg>

                <span className='text-lg font-bold text-zinc-800 mt-5 ml-5'>
                  Pago rechazado
                </span>
                <span className='text-md font-regular text-zinc-800 ml-5'>
                  Intentelo nuevamente en unos minutos
                </span>
              </div>
            )}

        </div>
    
      </div>
    </div>
  )
}

export default Payment
