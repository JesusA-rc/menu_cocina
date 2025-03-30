import React, {useEffect, useState} from 'react'
import styles from './Food.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";

const Food = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location; 
    
    useEffect(() => {
        if (!state) {
          navigate("/");
        }
      }, [state, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 
    
    if (!state) {
        return null; 
    }

    const {strMealThumb,strMeal,strCategory,strArea,strInstructions,strYoutube,} = state;

    const getIngredients = () => {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = state[`strIngredient${i}`];
            const measure = state[`strMeasure${i}`];
            
            if (!ingredient && !measure) break;

            if (ingredient && measure) {
                ingredientsList.push(`${measure} ${ingredient}`);
            }
        }
        return ingredientsList;
    };

  return (
    <div className={styles.food}>
        <div className={styles.food_container}>
            <div className={styles.back}>
                <NavLink to="/#recipes" className='link'>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" />
                    <span> categories</span>
                </NavLink>
            </div>
            <div className={styles.image_container}>
                <img src={strMealThumb} alt={strMeal} className={styles.recipe_image} />
                <div className={styles.labels_container}>
                    <span className={styles.category_label}>{strCategory}</span>
                    <span className={styles.area_label}>{strArea}</span>
                </div>
            </div>
            <div className={styles.details}>
                <h1 className={styles.recipe_title}>{strMeal}</h1>
                <h2>Ingredients:</h2>
                <ul className={styles.ingredients_list}>
                    {getIngredients().map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2>Instructions:</h2>
                <p className={styles.instructions}>{strInstructions}</p>

                {strYoutube && (
                <div className={styles.video_container}>
                    <h2>Video Tutorial:</h2>
                    <iframe  width="560" height="315"src={strYoutube.replace("watch?v=", "embed/")} title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Food