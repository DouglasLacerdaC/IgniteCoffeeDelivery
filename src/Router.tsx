import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
