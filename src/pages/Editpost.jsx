import { useEffect, useState } from 'react'
import React from 'react'
import { Container, PostForm } from '../components'
import AppwriteService from "../appwrite/dataConfig"
import { useNavigate, useParams } from 'react-router-dom'


function Editpost() {
    const [post, setPost]=useState([])
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            AppwriteService.getPost(slug)
            .then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}

export default Editpost