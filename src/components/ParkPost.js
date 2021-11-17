import React from 'react'

const ParkPost = ({ article }) => {
    // console.log(article)
    const { parlandRecipeNames, parklandImages } = article.fields
    // const postDescription = marked(recipeDescription)
    return (
        <div className='post'>
            <h2 className='title'>{parlandRecipeNames}</h2>
            {parklandImages && <img className='featuredImage' src={parklandImages.fields.file.url} alt={parlandRecipeNames} title={parlandRecipeNames} />}
            {/* <section dangerouslySetInnerHTML={{ __html: postDescription }} /> */}
        </div>
    )
}

export default ParkPost