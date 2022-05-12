import { useState } from 'react'
import { React, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifPic from './GifPic';

export const GifGrid = ({ category }) => {

    const [images, setGifs] = useState([]);

    useEffect(() => {
        getGifs(category).then(gifs => setGifs(gifs))
    }, [category])


    return (

        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                {
                    images.map(gif =>
                        <GifPic key={gif.id} gif={gif} />
                    )
                }


            </div>
        </>
    )
}
