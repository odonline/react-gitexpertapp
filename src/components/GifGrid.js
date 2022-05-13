import { React } from 'react'
//import { useState } from 'react'
//import { React, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifPic from './GifPic';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (

        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
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
