import { useContext } from 'react'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Card ({ data }) {
  const {
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
    closeCheckoutSideMenu()
  }

  const addProductToCart = (event, productData) => {
    event.stopPropagation()
    setCartProducts([...cartProducts, productData])
    closeProductDetail()
    openCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.find(product => product.id === id)

    if (isInCart) {
      return (
        <button
          className='bg-black absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2'
        >
          <CheckIcon className='h-6 w-6 text-white p-0.5' />
        </button>
      )
    } else {
      return (
        <button
          className='bg-white absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2'
          onClick={(e) => addProductToCart(e, data)}
        >
          <PlusIcon className='h-6 w-6 p-0.5' />
        </button>
      )
    }
  }

  return (
    <div
      className='bg-neutral-50 cursor-pointer w-56 rounded-lg border border-neutral-300/20'
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-1 w-full'>
        <span className='absolute bottom-0 left-0 bg-white bg-opacity-60 backdrop-blur border border-neutral-300/20 rounded-lg font-bold text-xs m-2 px-3 py-0.5'>
          {data.category}
        </span>
        <img
          className='bg-white w-full h-72 object-contain rounded-lg'
          src={data.image}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between gap-2 px-2 pb-2'>
        <span className='text-sm'>{data.title}</span>
        <span className='text-lg font-semibold'>${data.price}</span>
      </p>
    </div>
  )
}

export { Card }
