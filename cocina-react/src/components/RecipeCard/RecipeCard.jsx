import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe, index, onClick }) => {
  return (
    <div key={recipe.idMeal} onClick={onClick}className={`${styles.card} ${styles.fadeIn}`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className={styles.image_container}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <span className={styles.card_title}>{recipe.strMeal}</span>
      <span className={styles.card_description}>
        {recipe.strCategory} - {recipe.strArea}
      </span>
    </div>
  );
};

export default RecipeCard;