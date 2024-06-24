import React from 'react'
import { useNavigate } from 'react-router-dom'

import useSession from '../hooks/useSession'
import ROUTES from '../constants/routes'

const PatientsPayments = () => {

  const user = localStorage.getItem("user")
  const { logout } = useSession()

  const navigate = useNavigate()

  const headers = ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
    'Estado', 'Link de pago']

  const patients = [['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
    'Estado', 'Link de pago'], ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
      'Estado', 'Link de pago'], ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
        'Estado', 'Link de pago'], ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
          'Estado', 'Link de pago']
          , ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
            'Estado', 'Link de pago']
            , ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
              'Estado', 'Link de pago']
              , ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
                'Estado', 'Link de pago']
                , ['Nombre', 'Correo', 'Fecha agendada', 'Servicio', 'Valor', 
                  'Estado', 'Link de pagoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']]

  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <div className="h-screen w-screen flex flex-row">

      <div className='w-64 min-w-64 flex flex-col relative'>
        <div className='flex justify-center items-center mt-[50px]'>
          <img 
            src="https://images.pexels.com/photos/5915239/pexels-photo-5915239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
            className="w-[7rem] h-[7rem] rounded-full object-cover"
          />
        </div>

        <div className='flex justify-center items-center mt-[5px]'> 
          <span className='text-lg font-bold text-zinc-800'>
            {user}
          </span>
        </div>

        <button type="button" onClick={() => {navigate(ROUTES.PAYMENT)}}>
          Pago
        </button>

        <div className='absolute bottom-5 w-full flex justify-center items-center'>
          <button
            type="submit"
            className="w-[8rem] bg-[#4D4EB0] rounded-lg text-white py-1"
            onClick={handleClick}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className='h-full w-full bg-[#ECECF3]'>
        <div className='py-10 pl-10'>
          <span className='text-2xl font-bold text-zinc-800'>Pacientes</span>
        </div>
        <div className='mx-10 overflow-x-auto border rounded-b mt-4'>
          <div className='bg-white p-[15px]'>
            <table className="text-s text-medium-dark-grey w-full">
              <thead className="w-full bg-[#ECECF3]">
                <tr>
                  <th className="w-8" />
                  {headers.map((header, index) => (
                    <th key={index} className="text-left font-normal px-2 py-3 whitespace-nowrap">
                      <div className="relative flex gap-1">
                        {header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
                {patients.map((patientInfo) => (
                  <tr className='w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className="w-8" onClick={''} />
                    {patientInfo.map((item, index) => (
                      <td onClick={''} key={index} className="text-left p-2 whitespace-nowrap max-w-80 overflow-hidden">
                        {item || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PatientsPayments
