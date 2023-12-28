import * as SQLite from "expo-sqlite";

import { Preparation } from "../models";

const table = "preparation";
const db = SQLite.openDatabase("miniChefDB.db");

export default class PreparationService {
  static addData(param: Preparation) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (description, step, recipe_id) 
                values (?)`,
            [param.description, param.step, param.recipeId],
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
            `select * from ${table} where recipe_id=?`,
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
