import React from 'react'
// import { Outlet } from 'react-router-dom'
import Header from '@components/utils/Header'
import MainTabs from '@components/tabs/MainTabs'

const MainLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <MainTabs />
      <div className='w-full h-full p-3'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout