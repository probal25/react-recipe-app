import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <h1 className={style.font_ing}>Ingredients</h1>
            <ul className={style.font_detail}>
                {ingredients.map(ingredient =>(
                    <li >{ingredient.text}</li>
                ))}
            </ul>
            <p className={style.cal}>Calories: {calories} cals</p>
            <img src={image} alt="" />
        </div>
    )
}


export default Recipe
