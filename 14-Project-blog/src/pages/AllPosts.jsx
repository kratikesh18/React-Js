import React, {useState, useEffect} from 'react'

import {Container, PostCard} from '../Components'
import dbService from '../appwrite/config'



function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{

    }, [])

    dbService.getPosts([]).then((posts) =>{
        if(posts ){
            setPosts(posts.documents)
        }
    })

  return (
    <div>
        <Container>
            {
                posts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard post ={post}/>

                    </div>
                ))
            }
        </Container>
    </div>
  )
}

export default AllPosts