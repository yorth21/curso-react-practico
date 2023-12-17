import { useContext } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const { items } = useContext(ShoppingCartContext)

  return (
    <Layout>
      Home
      <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
