import { useContext, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const {
    setSearchByTitle,
    searchByTitle,
    filteredItems
  } = useContext(ShoppingCartContext)

  useEffect(() => {
    return () => {
      setSearchByTitle('')
    }
  }, [])

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <span>We don't have anything</span>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-96 my-4'>
        <h1 className='font-semibold text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-96 p-2 mb-4 focus:outline-none'
        onChange={(e) => setSearchByTitle(e.target.value)}
        value={searchByTitle}
      />
      <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
