import { createContext, useEffect, useState } from 'react'

const ShoppingCartContext = createContext()

function ShoppingCartProvider ({ children }) {
  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart - Add product
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <ShoppingCartContext.Provider value={{
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      setCartProducts,
      cartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutSideMenuOpen,
      order,
      setOrder,
      items
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext }
