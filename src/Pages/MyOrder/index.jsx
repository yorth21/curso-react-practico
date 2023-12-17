import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder () {
  const { order } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1
  if (index === -1) {
    return (
      <h1>No tienees ordenes</h1>
    )
  }

  const latestOrderProducts = order?.[index].products || []

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative my-6'>
        <Link
          to='/my-orders'
          className='absolute left-0'
        >
          <ChevronLeftIcon className='h-6 w-6 cursor-pointer' />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='flex flex-col w-96'>
        {
          latestOrderProducts?.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export { MyOrder }
