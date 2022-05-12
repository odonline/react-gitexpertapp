// FC functional components
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

    let categoryList = ['Superman']
    const [categories, addCategory] = useState(categoryList)

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory list={categories} addCategory={addCategory} />
            <ul>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ul>

        </>
    );

}

export default GifExpertApp;