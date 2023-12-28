export class Recipe {
  constructor(id: number, name: string, description: string, duration: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.duration = duration;
  }
  public id: number;
  public name: string;
  public description: string;
  public duration: string;
}

export class Ingredient {
  constructor(id: number, name: string, amount: number, unit: string) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }
  public id: number;
  public name: string;
  public amount: number;
  public unit: string;
}

export class IngredientInRecipe {
  constructor(id: number, recipeId: number, ingredientId: number) {
    this.id = id;
    this.recipeId = recipeId;
    this.ingredientId = ingredientId;
  }
  public id: number;
  public recipeId: number;
  public ingredientId: number;
}

export class Preparation {
  constructor(id: number, description: string, step: number, recipeId: number) {
    this.id = id;
    this.description = description;
    this.step = step;
    this.recipeId = recipeId;
  }
  public id: number;
  public description: string;
  public step: number;
  public recipeId: number;
}
