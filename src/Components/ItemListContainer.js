import React from 'react'

const ItemListContainer = ({text, text2}) => {

  return (
    <>
    <div className='p-4 bg-neutral text-white text-7xl '> 
        {text}
    </div>
    <div className='p-4 bg-neutral text-white text-3xl text-success'>
        {text2}
    </div>
    </>
  )
}

export default ItemListContainer