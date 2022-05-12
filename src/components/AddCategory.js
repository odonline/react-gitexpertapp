import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ list, addCategory }) => {

    //console.log(list)
    //console.log(typeof (addCategory))

    const [inputValue, setInputValue] = useState('')
    const [errorMsg, setError] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const existValue = (value) => {

        return list.findIndex((elem) => { return elem === value }) > -1;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputValue)

        setError("")
        if (inputValue.trim().length === 0) {
            return;
        }
        if (existValue(inputValue)) {
            setError("Already exists!")
            return;
        }

        handleAddCategory(inputValue)

    }

    const handleAddCategory = (category) => {

        //other way, cats is a callback function with the original categories list
        addCategory(cats => [category, ...cats]);
        setInputValue("");

        setError(`Added ${category}`);

    }

    return (
        <form onSubmit={handleSubmit}>
            <span>{errorMsg}</span>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>
    )
}

AddCategory.propTypes = {
    list: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired
}

