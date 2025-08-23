import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
