import React from 'react'

const ItemListContainer = ({greeting, greeting2}) => {

  return (
    <>
    <div className='p-4 bg-neutral text-white text-7xl '> 
        {greeting}
    </div>
    <div className='p-4 bg-neutral text-white text-3xl text-success'>
        {greeting2}
    </div>
    </>
  )
}

export default ItemListContainer