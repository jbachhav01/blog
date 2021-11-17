import React from 'react'
import marked from 'marked'

const Post = ({ article }) => {
    // console.log(article)
    const { recipeName, imagePool, recipeDescription } = article.fields
    const postDescription = marked(recipeDescription)
    return (
        <div className='post'>
            <h2 className='title'>{recipeName}</h2>
            {imagePool && <img className='featuredImage' src={imagePool.fields.file.url} alt={recipeName} title={recipeName} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post