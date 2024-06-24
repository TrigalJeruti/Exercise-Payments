import React, { useMemo, useState } from 'react'

export const GeneralContext = React.createContext()

const GeneralContextWrapper  = ({ children }) => {
  const [successfulPayment, setSuccessfulPayment] = useState(null)
  const [isPaymentMethod, setIsPaymentMethod] = useState(true)

  const generalState = useMemo(
    () => ({ successfulPayment, setSuccessfulPayment, isPaymentMethod, setIsPaymentMethod }),
    [successfulPayment, isPaymentMethod]
  )

  return <GeneralContext.Provider value={generalState}>{children}</GeneralContext.Provider>
}

export default GeneralContextWrapper