import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, bookTitle,imageurl} = useLoaderData();
  return (
    <div className=' mt-28 px-4 lg:px-24 '>
      <img src={imageurl} alt="" className='h-96' />
      <h2>{bookTitle}</h2>
    </div>
  )
}

export default SingleBook
