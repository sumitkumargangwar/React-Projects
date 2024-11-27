import React, { useEffect, useState } from 'react'
import Container from '../../container/Container'
import PostCard from '../PostCard'
import service from '../../config/config'

export default function HomePage(props) {
    const [post,setPost] = useState([])
    useEffect(() => {
        service.getPosts([]).then((post)=> {
            if (post) {
                setPost(post.documents)
            }
        })
    },[])

    if (post.length === 0) {
        return (
            <div>
                <Container>
                <h1>Login to read posts</h1>
                </Container>
            </div>
        ) 
    }
    return (
        <div>
            <Container>
                <div>
                    {
                        post.map((post) => {
                            <div key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )
}
