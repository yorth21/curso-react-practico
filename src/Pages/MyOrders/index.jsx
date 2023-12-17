import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrders () {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>
        <h1 className='font-semibold text-xl my-4'>My Orders</h1>
      </div>
      {
        order.map((order, index) => (
          <Link
            key={index}
            to={`/my-orders/${index}`}
          >
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export { MyOrders }
