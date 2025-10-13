import { useSelector } from "react-redux";
import { recipesSelectors } from "src/store/slices/recipes";

const useRecipes = () => {
  const recipes = useSelector(recipesSelectors.recipes);
  const isLoadingRecipes = useSelector(recipesSelectors.isLoadingRecipes);

  return {
    recipes,
    isLoadingRecipes,
  };
};

export default useRecipes;
