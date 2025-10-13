import instance from "src/utils/config";

const RecipesService = {
  listRecipes(params?: any) {
    console.log("listRecipes: ");
    return instance.get("/recipes", {
      params,
    });
  },
};

export default RecipesService;
