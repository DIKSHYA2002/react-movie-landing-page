import React from 'react'

const Apicards = ({albumId,id,title,url,thumbnailUrl}) => {
  return (
    <div>
        <div className="albumid">{albumId}</div>
        <div className="ids">{id}</div>
        <div className="titles">{title}</div>
        <div className="image">
            <img src={thumbnailUrl} alt="" />
        </div>
        <div className="url">
            <img src={url} alt="" />
        </div>
    </div>
  )
}

export default Apicards