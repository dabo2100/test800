import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/shop" element={<ShopPage />} />
          {/* Dynamic Route */}
          <Route path="/shop/product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
