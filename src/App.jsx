import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import ProductsDetails from './Components/ProductsDetails'


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
