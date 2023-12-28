export interface IIngredient {
  name: string; // The name of the ingredient
  amount: number; // The amount of the ingredient
  unit: string; // The unit of the ingredient
}

export interface IRecipe {
  name: string; // The name of the recipe
  description: string; // The description of the recipe, nothing more than 200 characters, need to have the quantity of portions
  time_to_prepare: number;
  difficulty: number;
  ingredients: IIngredient[];
}
