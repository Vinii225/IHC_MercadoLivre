import { useState } from 'react'
import './App.css'
import logo from './assets/Images/logo.png'
import carrinho from './assets/Images/carrinho.png'
import user from './assets/Images/user.png'
import caixa from './assets/Images/caixa.png'
import notebook from './assets/Images/notebook.png'
import headset from './assets/Images/headset.png'
import celular from './assets/Images/celular.png'
import caixafooter from './assets/Images/caixafooter.svg'
import carteira from './assets/Images/carteira.svg'
import seguranca from './assets/Images/segurança.svg'
import teclado from './assets/Images/teclado.png'
import tablet from './assets/Images/tablet.png'
import search from './assets/Images/search.svg'
import dumbbell from './assets/Images/categorias/dumbbell.png'
import camisa from './assets/Images/categorias/camisa.png'

function App() {
const [searchQuery, setSearchQuery] = useState('')

const products = [
  { name: 'Notebook', price: 'R$ 3.500,00', image: notebook, rating: 5 },
  { name: 'Headset', price: 'R$ 200,00', image: headset, rating: 5 },
  { name: 'Smartphone', price: 'R$ 2.500,00', image: celular, rating: 5 },
  { name: 'Tablet', price: 'R$ 1.700,00', image: tablet, rating: 5 },
  { name: 'Teclado', price: 'R$ 100,00', image: teclado, rating: 5 },
]

return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <header className="bg-[#FFFFFF]">
      <div className="container mx-auto px-6 py-0">
      <div className="flex flex-wrap items-center justify-between mb-0 gap-4">
      <div className="flex-shrink-0">
      <img src={logo} alt="Mercado Livre" className="h-20 w-auto" />
    </div>
    <div className="flex items-center gap-6">
      <img src={carrinho} alt="Cart" className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity" />
      <img src={user} alt="User" className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity" />
      <button className="text-gray-700 hover:opacity-80 transition-opacity">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </button>
    </div>
    </div>
    <div className="mb-4">
    <div className="relative flex flex-col sm:flex-row items-center max-w-4xl mx-auto gap-3">
    <div className="flex items-center w-full gap-3 px-4 py-3 bg-white border border-[#FFE600] rounded-l-[10px] shadow-md">
      <img src={search} alt="Search icon" className="w-5 h-5 opacity-70" />
    <input
      type="text"
      placeholder="Buscar produtos..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full text-base text-gray-800 border-none focus:outline-none"
    />
      </div>
  <button className="bg-[#FFE600] px-10 py-3 text-black font-normal text-base rounded-r-[10px] shadow-md hover:bg-[#e0cd22] transition-colors w-full sm:w-auto">
  Search
  </button>
  </div>
  </div>
  <nav className="flex flex-wrap gap-6 text-base bg-white py-3 -mx-6 pl-10 pr-6 justify-center sm:justify-start">
  <a href="#" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">Ofertas</a>
  <a href="#" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">Cupons</a>
  <a href="#" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">Vender</a>
  <a href="#" className="text-gray-700 hover:text-gray-900 font-normal transition-colors">Compras</a>
  </nav>
  </div>
  </header>
  <section className="bg-[#EDEDED]">
    <div className="container mx-auto px-16 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 bg-[#F9F9F9] rounded-2xl px-12 py-16 border-2 border-[#FFE600] shadow-sm max-w-full">
        <img src={caixa} alt="Package" className="h-56 w-56 object-contain flex-shrink-0" />
        <div className="flex-1 pl-0 lg:pl-8">
          <h2 className="text-6xl font-light text-gray-800 leading-tight mb-2">Da nossa loja</h2>
          <h2 className="text-6xl font-light text-gray-800 leading-tight">para suas mãos.</h2>
        </div>
      </div>
    </div>
  </section>


  <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
            <div className="mb-4">
            <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            </div>
            <p className="text-gray-700 text-center font-light text-lg">Home e Decor</p>
            </div>
        <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
        <div className="mb-4">
  <img src={camisa} alt="Camisa" className="w-16 h-16 object-contain" />
  </div>
  <p className="text-gray-700 text-center font-light text-lg">Fashion</p>
  </div>
      <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-[#FFFACD] hover:border-[#FFE600] hover:shadow-md">
      <div className="mb-4">
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a 2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        </div>
        <p className="text-gray-700 text-center font-light text-lg">Eletrônicos</p>
        </div>
      <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
      <div className="mb-4">
      <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
  </div>
      <p className="text-gray-700 text-center font-light text-lg">Livros</p>
      </div>
          <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
          <div className="mb-4">
          <img src={dumbbell} alt="Esporte" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-gray-700 text-center font-light text-lg">Esporte</p>
          </div>
          </div>
          </section>
      <section className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {products.map((product, index) => (
  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-50 bg-white flex items-center justify-center p-4 border-b border-gray-100">
      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-4">
        <h3 className="font-normal text-gray-800 mb-2 text-sm">{product.name}</h3>
        <p className="font-normal text-gray-900 mb-3 text-base">{product.price}</p>
        <div className="flex gap-0.5">
        {[...Array(product.rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">⭐</span>
      ))}
    </div>
    </div>
    </div>
  ))}
  </div>
  </section>
  <footer className="bg-[#FFE600] mt-10">
    <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 justify-items-center text-center md:text-left">
    <div className="flex items-start gap-6">
      <img src={carteira} alt="Payment" className="h-12 w-12 flex-shrink-0 mt-1" />
    <div>
  <p className="font-semibold text-gray-900 text-lg mb-2">Escolha como pagar</p>
  <p className="text-base text-gray-800">cartão, boleto ou Pix.</p>
  </div>
    </div>
    <div className="flex items-start gap-6">
      <img src={seguranca} alt="Security" className="h-12 w-12 flex-shrink-0 mt-1" />
      <div>
        <p className="font-semibold text-gray-900 text-lg mb-2">Segurança, do início ao fim</p>
        <p className="text-base text-gray-800">Não gostou? Devolveu!</p>
        </div>
        </div>
        <div className="flex items-start gap-6">
      <img src={caixafooter} alt="Shipping" className="h-12 w-12 flex-shrink-0 mt-1" />
      <div>
      <p className="font-semibold text-gray-900 text-lg mb-2">Frete grátis a partir de R$ 19</p>
    <p className="text-base text-gray-800">você tem frete grátis em milhares de produtos.</p>
  </div>
  </div>
  </div>
    <div className="pt-3 flex flex-wrap justify-center gap-4 text-base text-gray-800">
      <a href="#" className="hover:text-gray-900 font-normal">Trabalhe conosco</a>
      <span className="text-gray-700">|</span>
      <a href="#" className="hover:text-gray-900 font-normal">Termos e condições</a>
      <span className="text-gray-700">|</span>
      <a href="#" className="hover:text-gray-900 font-normal">Contato</a>
      <span className="text-gray-700">|</span>
      <a href="#" className="hover:text-gray-900 font-normal">Acessibilidade</a>
      </div>
    </div>
    </footer>
  </div>
  )
  }

export default App
