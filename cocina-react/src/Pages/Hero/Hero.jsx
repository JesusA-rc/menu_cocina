import React, { useEffect, useState,useRef } from "react";
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

const Hero = () => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [areas, setAreas] = useState([]); 
    const [selectedArea, setSelectedArea] = useState("All");

    const fetchRecipes = async (category, area) => {
      try {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        if (category && category !== "All") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        }
        if (area && area !== "All") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    const fetchAreas = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        const data = await response.json();
        setAreas([
          { id: "all-areas", name: "All", image: null },
          ...data.meals.map((area) => ({
            id: area.strArea,
            name: area.strArea,
            image: "https://cdn-icons-png.flaticon.com/512/11036/11036960.png",
          })),
        ]);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories([
          { id: "all-categories", name: "All", image: null },
          ...data.categories.map((category) => ({
            id: category.idCategory,
            name: category.strCategory,
            image: category.strCategoryThumb,
          })),
        ]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    useEffect(() => {
      fetchCategories();
      fetchAreas();
      fetchRecipes(selectedCategory, selectedArea);
    }, []);
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setSelectedArea("All");
      fetchRecipes(category, "All");
    };

    const handleAreaChange = (area) => {
      setSelectedArea(area);
      setSelectedCategory("All"); 
      fetchRecipes("All", area);
    };

  return (
    <div className={styles.hero}>
      <div className={styles.hero_section} id="hero_section">
        <video autoPlay muted loop className={styles.background_video}>
          <source src="https://cdn.pixabay.com/video/2022/08/17/128189-740906950_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.hero_content}>
          <span className={styles.title}>Your favorite meal, ready in a flash</span>
          <span className={styles.subtitle}>
            Learn to prepare your favorite dishes quickly and easily, and amaze everyone with your creations!
          </span>
          <button className={styles.button}>Explore recipes</button>
        </div>
      </div>

      <div className={styles.popular_recipes} id="recipes">
        <span className={styles.section_title}>Popular recipes of the week</span>
        <div className={styles.recipes_container}>
            <span className={styles.section_subtitle}>Our most popular recipes</span>
            <span className={styles.see_all}>See all</span>
        </div>

        <div className={styles.search_by_filters}>
          <FilterComponent
          title="Categories"
          items={categories}
          selectedItem={selectedCategory}
          setSelectedItem={setSelectedCategory}
          handleItemClick={handleCategoryChange}
         />
        
         <FilterComponent
            title="Countries"
            items={areas}
            selectedItem={selectedArea}
            setSelectedItem={setSelectedArea}
            handleItemClick={handleAreaChange}
        />
      </div>

        <div className={styles.card_container}>
          {recipes.length > 0 ? (
            recipes.map((recipe,index) => (
              <div key={recipe.idMeal} className={`${styles.card} ${styles.fadeIn}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles.image_container}>
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
                <span className={styles.card_title}>{recipe.strMeal}</span>
                <span className={styles.card_description}>{recipe.strCategory} - {recipe.strArea}</span>
              </div>
            ))
          ) : (
            <p>Loading recipes...</p>
          )}
        </div>
      </div>
        
      <Reviews></Reviews>  
      <Footer></Footer>
    </div>
  )
}

export default Hero