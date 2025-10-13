import { useSelector } from "react-redux";
import { recipesSelectors } from "src/store/slices/recipes";

const useRecipes = () => {
  const recipes = useSelector(recipesSelectors.recipes);
  const tags = useSelector(recipesSelectors.tags);
  const tagRecipes = useSelector(recipesSelectors.tagRecipes);
  const isLoadingRecipes = useSelector(recipesSelectors.isLoadingRecipes);
  const isLoadingTags = useSelector(recipesSelectors.isLoadingTags);
  const isLoadingTagRecipes = useSelector(recipesSelectors.isLoadingTagRecipes);

  return {
    recipes,
    tags,
    tagRecipes,
    isLoadingRecipes,
    isLoadingTags,
    isLoadingTagRecipes,
  };
};

export default useRecipes;
