import IngredientInRecipeService from "../database/service/ingredientInRecipeService";
import IngredientService from "../database/service/ingredientService";
import PreparationService from "../database/service/preparationService";
import RecipeService from "../database/service/recipeService";
import { IRecipe } from "../interfaces";
export const useDatabase = () => {
  const saveRecipes = async (recipes: IRecipe[]) => {
    try {
      recipes.forEach(async (recipe) => {
        await RecipeService.addData(recipe).then((recipeId: number) => {
          recipe.ingredients.forEach(async (ingredient) => {
            await IngredientService.addData(ingredient).then(
              async (ingredientId: number) => {
                await IngredientInRecipeService.addData({
                  ingredientId: ingredientId,
                  recipeId: recipeId
                });
              }
            );
          });
          recipe.preparation.forEach(async (preparation) => {
            await PreparationService.addData({
              recipeId: recipeId,
              step: preparation.step,
              description: preparation.description
            });
          });
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipes = async () => {
    try {
      const resp = await RecipeService.findAll();
      const recipes: IRecipe[] = resp?._array;
      const fullRecipes = [];
      await Promise.all(
        recipes.map(async (recipe: IRecipe) => {
          recipe.ingredients = await getIngredientsByRecipeId(recipe.id);
          recipe.preparation = await getPreparationByRecipeId(recipe.id);
          fullRecipes.push(recipe);
        })
      );
      return recipes;
    } catch (error) {
      console.error(error);
    }
  };

  const getIngredientsByRecipeId = async (recipeId: number) => {
    try {
      const resp = await IngredientService.findByRecipeId(recipeId);
      const ingredients = resp?._array;
      return ingredients;
    } catch (error) {
      console.error(error);
    }
  };

  const getPreparationByRecipeId = async (recipeId: number) => {
    try {
      const resp = await PreparationService.findByRecipeId(recipeId);
      const preparation = resp?._array;
      return preparation;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    saveRecipes,
    getRecipes,
    getIngredientsByRecipeId,
    getPreparationByRecipeId
  };
};
