import React from 'react'

export default function GifPic({ gif }) {
    return (
        <div className="card animate__animated animate__bounce">

            <img src={gif.url} alt={gif.title}></img>
            <p>{gif.title}</p>
        </div>
    )
}
