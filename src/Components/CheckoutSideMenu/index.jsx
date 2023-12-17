import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { useNavigate } from 'react-router-dom'

function CheckoutSideMenu () {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    order
  } = useContext(ShoppingCartContext)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filterProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.2023',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])
    closeCheckoutSideMenu()
    navigate('/my-orders/last')
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-96 h-[calc(100vh-80px)] flex flex-col fixed z-10 top-[68px] right-0 border border-black rounded-lg p-4 bg-white bg-opacity-80 backdrop-blur-md overflow-hidden`}>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-xl mb-2'>My Order</h2>
        <button
          onClick={() => closeCheckoutSideMenu()}
        >
          <XMarkIcon className='h-4 w-4' />
        </button>
      </div>
      <div className='overflow-y-scroll flex-1'>
        {
          cartProducts?.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div>
        <p className='flex justify-between items-center my-2'>
          <span className=''>Total:</span>
          <span className='font-semibold text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <button
          className='w-full bg-black text-white py-2 rounded-lg font-semibold'
          onClick={() => handleCheckout()}
        >Checkout
        </button>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
