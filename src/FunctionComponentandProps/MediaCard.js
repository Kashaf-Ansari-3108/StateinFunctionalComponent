import React from 'react'

const MediaCard = ({title,body,imageUrl}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl}/>
        </div>
    )
}

export default MediaCard
