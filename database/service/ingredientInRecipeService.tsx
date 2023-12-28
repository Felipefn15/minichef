import * as SQLite from "expo-sqlite";

import { IIngredientInRecipe } from "../../interfaces";

const table = "ingredient_in_recipe";
const db = SQLite.openDatabase("miniChefDB.db");

export default class IngredientInRecipeService {
  static addData(param: IIngredientInRecipe) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (ingredient_id, recipe_id) 
                values (?,?)`,
            [param.ingredientId, param.recipeId],
            (_, { insertId, rows }) => {
              console.log("id insert: " + insertId);
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }
}
