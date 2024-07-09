import React, { useEffect, useState } from 'react'

import AppwriteService from "../appwrite/dataConfig"
import Postcard, { Container } from '../components/index'

function Allpost() {
    const [post, setPost]=useState([])
    useEffect(()=>{
        AppwriteService.getPosts([])
        .then((post)=>{
            setPost(post.documents)
        })

    }, [])


  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((item)=>(
                    <div key={item.$id} className='p-2 w-1/4'>
                        <Postcard post={item} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allpost