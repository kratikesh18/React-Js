import React from 'react'
import dbService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({
    $id,
    title, 
    featuredimg
}) {
  return (

    <Link to={`/post/${$id}`}>
        <div className='flex flex-col justify-between items-center bg-gray-400 h-[15rem] w-[15rem] p-4 border-black border shadow-lg'>
            <div className=' w-[10rem]'>
                <img src= {dbService.getFilePreview(featuredimg)} 
                className='rounded-md'
                alt={title}/>
            </div>
            <h2 className="text-xl ">{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard