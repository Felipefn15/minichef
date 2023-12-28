import * as SQLite from "expo-sqlite";

import { Ingredient } from "../models";

const table = "ingredient";
const db = SQLite.openDatabase("miniChefDB.db");

export default class IngredientService {
  static addData(param: Ingredient) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (name, amount, unit) 
                values (?)`,
            [param.name, param.amount, param.unit],
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

  static findById(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where id=?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
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

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
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

  static findByRecipeId(recipeId: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select i.* from ${table} i 
            inner join ingredient_in_recipe ir on ir.ingredient_id = i.id 
            where ir.recipe_id = ?`,
            [recipeId],
            (_, { rows }) => {
              resolve(rows);
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
