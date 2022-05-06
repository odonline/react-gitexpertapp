// FC functional components
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
const GifExpertApp = () => {

    let categoryList = ['cat 1', 'cat 2', 'cat 3']
    //const categories = ['cat 1', 'cat 2', 'cat 3']
    const [categories, addCategory] = useState(categoryList)

    /*const handleAddCategory = () => {

        //first way
        //addCategory([...categories, 'cat ' + (categories.length + 1)]);

        //other way, cats is a callback function with the original categories list
        addCategory(cats => [...cats, 'cat ' + (categories.length + 1)]);

    }*/



    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory list={categories} addCategory={addCategory} />
            <ul>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ul>

        </>
    );

}

export default GifExpertApp;