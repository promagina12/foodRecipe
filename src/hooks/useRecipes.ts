import { useSelector } from "react-redux";
import { recipesSelectors } from "src/store/slices/recipes";

const useRecipes = () => {
  const recipes = useSelector(recipesSelectors.recipes);
  const recipe = useSelector(recipesSelectors.recipe);
  const tags = useSelector(recipesSelectors.tags);
  const tagRecipes = useSelector(recipesSelectors.tagRecipes);
  const isLoadingRecipes = useSelector(recipesSelectors.isLoadingRecipes);
  const isLoadingTags = useSelector(recipesSelectors.isLoadingTags);
  const isLoadingTagRecipes = useSelector(recipesSelectors.isLoadingTagRecipes);
  const isLoadingRecipe = useSelector(recipesSelectors.isLoadingRecipe);

  return {
    recipes,
    recipe,
    tags,
    tagRecipes,
    isLoadingRecipes,
    isLoadingTags,
    isLoadingTagRecipes,
    isLoadingRecipe,
  };
};

export default useRecipes;
