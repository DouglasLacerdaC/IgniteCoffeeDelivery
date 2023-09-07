import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
