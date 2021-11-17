import React from 'react'
import Post from './Post'
import ParkPost from './ParkPost'

const Posts = ({ posts, isPark }) => {
    return (
<>        <div>
            {posts.map((article, index) => (isPark) && <ParkPost article={article} key={index} />)}
        </div>
        <div>
            {posts.map((article, index) => (!isPark) && <Post article={article} key={index} />)}
        </div></>

)
}

export default Posts
