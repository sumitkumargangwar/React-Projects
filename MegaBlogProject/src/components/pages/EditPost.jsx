import React, { useEffect, useState } from 'react'
import Container from '../../container/Container'
import PostForm from '../Postform/PostForm'
import service from '../../config/config'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPost(props) {
    const [post,setPost] = useState(null)    
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate("/")
        }
    },[slug,navigate])

    return post ? (
        <div>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}
