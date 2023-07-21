import ItemContainer from "./components/ItemContainer/ItemContainer"
import './App.css'
import Header from "./components/Header/Header"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"

const App = () => {
  return (
    <CartProvider>
      <h1 className="title">ECOMMERCE</h1>
      <Header />
      <Cart />
      <ItemContainer />
    </CartProvider>
  )
}

export default App