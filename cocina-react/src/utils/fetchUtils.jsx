export const fetchCategories = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await response.json();
      return [
        { id: "all-categories", name: "All", image: null },
        ...data.categories.map((category) => ({
          id: category.idCategory,
          name: category.strCategory,
          image: category.strCategoryThumb,
        })),
      ];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

export const fetchAreas = async () => {
    try {
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await response.json();
    return([
        { id: "all-areas", name: "All", image: null },
        ...data.meals.map((area) => ({
        id: area.strArea,
        name: area.strArea,
        image: "https://cdn-icons-png.flaticon.com/512/11036/11036960.png",
        })),
    ]);
    } catch (error) {
        console.error("Error fetching areas:", error);
        return [];
    }
};


export const fetchRecipes = async (category, area) => {
    try {
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      if (category && category !== "All") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      }
      if (area && area !== "All") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      }
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const filteredRecipes = data.meals || [];
      const detailedRecipes = await Promise.all(
        filteredRecipes.map(async (recipe) => {
          try {
            const details = await fetchRecipeDetails(recipe.idMeal);
            return details;
          } catch (error) {
            console.error(`Error fetching details for recipe ID ${recipe.idMeal}:`, error);
          }
        })
      );
  
      return detailedRecipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };

export const fetchRecipeDetails = async (idMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return null;
    }
};