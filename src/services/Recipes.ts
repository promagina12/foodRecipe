import instance from "src/utils/config";

const RecipesService = {
  listRecipes(params?: any) {
    return instance.get("/recipes?limit=0", {
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
  getRecipe(id: string) {
    return instance.get(`/recipes/${id}`);
  },
  createRecipe(data?: any) {
    return instance.post("/recipes/add", {
      data,
    });
  },
};

export default RecipesService;
