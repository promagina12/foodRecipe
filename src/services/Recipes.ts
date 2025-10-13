import instance from "src/utils/config";

const RecipesService = {
  listRecipes(params?: any) {
    return instance.get("/recipes", {
      params,
    });
  },
  listTag(params?: any) {
    return instance.get("/recipes/tags", {
      params,
    });
  },
  tagRecipes(tag: string, params?: any) {
    return instance.get(`/recipes/tag/${tag}`, {
      params,
    });
  },
};

export default RecipesService;
