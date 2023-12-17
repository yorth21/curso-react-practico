import { CalendarDaysIcon, ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

function OrdersCard (props) {
  const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center gap-2 mb-4 border border-black w-96 px-4 py-2 rounded-lg'>
      <p className='flex justify-between items-center w-full'>
        <div className='flex flex-col'>
          <span className='flex items-center gap-2'>
            <CalendarDaysIcon className='h-6 w-6' />
            01.02.23
          </span>
          <span className='flex items-center gap-2 text-sm font-bold'>
            <ShoppingBagIcon className='h-6 w-6' />
            {totalProducts} Products
          </span>
        </div>
        <span className='font-semibold text-2xl'>${totalPrice.toFixed(2)}</span>
      </p>
      <ChevronRightIcon className='h-8 w-8' />
    </div>
  )
}

export { OrdersCard }
