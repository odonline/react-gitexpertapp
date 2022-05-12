import React from 'react'

export default function GifPic({ gif }) {
    return (
        <div className="card">

            <img src={gif.url} alt={gif.title}></img>
            <p>{gif.title}</p>
        </div>
    )
}
