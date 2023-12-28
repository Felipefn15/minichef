export interface IIngredient {
  id?: number; // The id of the recipe
  name: string; // The name of the ingredient
  amount: number; // The amount of the ingredient
  unit: string; // The unit of the ingredient
}

export interface IPreparation {
  id?: number; // The id of the recipe
  step: number;
  description: string;
  recipeId: number;
}

export interface IRecipe {
  id?: number; // The id of the recipe
  name: string; // The name of the recipe
  description: string; // The description of the recipe, nothing more than 200 characters, need to have the quantity of portions
  duration: number; // The duration of the recipe in minutes
  ingredients: IIngredient[]; // The ingredients of the recipe
  preparation: IPreparation[]; // The preparation of the recipe
}

export interface IIngredientInRecipe {
  id?: number; // The id of the recipe
  recipeId: number;
  ingredientId: number;
}
