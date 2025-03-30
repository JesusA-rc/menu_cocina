import styles  from "./RecipesContainer.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import PaginationControls from "../PaginationControls/PaginationControls";
import usePagination from "../../hooks/usePagination";
import React from "react";

const RecipesContainer = ({ recipes, onCardClick, itemsPerPage = 6 }) => {
  const {
    currentItems: currentRecipes,
    currentPage,
    totalPages,
    nextPage,
    prevPage
  } = usePagination(recipes, itemsPerPage);

  return (
    <React.Fragment>
      <div className={styles.card_container}>
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              index={index}
              onClick={() => onCardClick(recipe)}
            />
          ))
        ) : (
          <p>No hay recetas disponibles</p>
        )}
      </div>

      {recipes.length > itemsPerPage && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={nextPage}
          onPrev={prevPage}
        />
      )}
    </React.Fragment>
  );
};

export default RecipesContainer;