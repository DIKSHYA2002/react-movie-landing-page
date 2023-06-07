import React from 'react'

const Cards = ({ username, image, about, price }) => {
    return (
        <>
            <div className="card">
                    <img src={image} alt="" srcset=""className='image' />
                <div className="details">
                    <span className='username'>{username}</span>
                    <span className="about">{about}</span>
                    <span className='price'>{price}</span>
                </div>
            </div>
        </>
    )
}

export default Cards