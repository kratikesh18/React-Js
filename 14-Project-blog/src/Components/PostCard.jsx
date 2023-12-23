import React from 'react'
import dbService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({
    title, 
    $id,
    featuredimg
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div>
                <img src= {dbService.getFilePreview(featuredimg)} alt={title}/>
            </div>
            <h2 className="text-xl ">{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard