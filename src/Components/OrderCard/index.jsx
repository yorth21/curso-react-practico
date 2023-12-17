import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard (props) {
  const { id, title, image, price, handleDelete } = props
  let renderDelete
  if (handleDelete) {
    renderDelete = <button onClick={() => handleDelete(id)}><XMarkIcon className='h-4 w-4' /></button>
  }

  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-contain'
            src={image}
            alt={title}
          />
        </figure>
        <p className='w-1/2 text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-semibold'>${price}</p>
        {renderDelete}
      </div>

    </div>
  )
}

export { OrderCard }
