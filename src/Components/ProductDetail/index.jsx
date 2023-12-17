import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail () {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-96 max-h-[calc(100vh-80px)] flex flex-col fixed z-10 right-0 border border-black rounded-lg p-4 bg-white bg-opacity-80 backdrop-blur-md overflow-hidden`}>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-xl mb-2'>Detail</h2>
        <button
          onClick={() => closeProductDetail()}
        >
          <XMarkIcon className='h-4 w-4' />
        </button>
      </div>

      <figure>
        <img
          className='bg-white w-full h-96 object-contain rounded-lg'
          src={productToShow.image}
          alt={productToShow.title}
        />
        <p className='flex flex-col mt-2'>
          <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
          <span className='font-medium text-md'>{productToShow.title}</span>
          <span className='font-light text-sm'>{productToShow.description}</span>
        </p>
      </figure>
    </aside>
  )
}

export { ProductDetail }
