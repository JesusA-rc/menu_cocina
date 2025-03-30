import React, { useEffect, useState,useRef } from "react";
import styles from './Hero.module.css'
import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import Reviews from "../../components/Reviews/Reviews";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fetchCategories, fetchAreas, fetchRecipes, fetchRecipeDetails} from "../../utils/fetchUtils";

const Hero = () => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [areas, setAreas] = useState([]); 
    const [selectedArea, setSelectedArea] = useState("All");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
    
    useEffect(() => {
      fetchCategories().then((data) => setCategories(data));
      fetchAreas().then((data) => setAreas(data));
      fetchRecipes(selectedCategory, selectedArea).then((data) => setRecipes(data));
    }, []);

    const handleCardClick = async (recipe) => {
      const recipeDetails = await fetchRecipeDetails(recipe.idMeal); 
      navigate("/food", { state: recipeDetails }); 
    };
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setSelectedArea("All");
      fetchRecipes(category, "All").then((data) => setRecipes(data));
    };

    const handleAreaChange = (area) => {
      setSelectedArea(area);
      setSelectedCategory("All");
      fetchRecipes("All", area).then((data) => setRecipes(data));
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

      <RecipesContainer 
          recipes={recipes} 
          onCardClick={handleCardClick} 
          itemsPerPage={12}
      />

      </div>
        
      <Reviews></Reviews>  
    </div>
  )
}

export default Hero