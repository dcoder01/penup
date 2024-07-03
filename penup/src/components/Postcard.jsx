import React from 'react'

import service from '../appwrite/dataConfig'

import { Link } from 'react-router-dom'

function Postcard({$id, title, featuredImgae}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-500 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.filePreview(featuredImgae)} alt={title} 
                className='rounded-xl' />
                //feature image is id of img

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default Postcard