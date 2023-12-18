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
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('')

  // Get product by category
  const [searchByCategory, setSearchByCategory] = useState('')

  // Get Categories
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItems(json))

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())
  }

  const filterBy = () => {
    let newFilteredItems
    if (items) newFilteredItems = [...items]

    if (searchByCategory) newFilteredItems = (filteredItemsByCategory(newFilteredItems, searchByCategory))
    if (searchByTitle) newFilteredItems = (filteredItemsByTitle(newFilteredItems, searchByTitle))

    setFilteredItems(newFilteredItems)
  }

  useEffect(() => {
    filterBy()
  }, [items, searchByTitle, searchByCategory])

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
      items,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      categories,
      setSearchByCategory
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartProvider, ShoppingCartContext }
