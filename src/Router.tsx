import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'
import { MainLayout } from './layouts/MainLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}
