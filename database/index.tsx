import * as SQLite from "expo-sqlite";

let db = null;
export default class DatabaseInit {
  constructor() {
    db = SQLite.openDatabase("miniChefDB.db");
    db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
      console.log("Foreign keys turned on")
    );
    this.InitDb();
  }
  private InitDb() {
    const sql = [
      `DROP TABLE IF EXISTS recipe;`,
      `DROP TABLE IF EXISTS ingredient;`,
      `DROP TABLE IF EXISTS ingredient_in_recipe;`,
      `DROP TABLE IF EXISTS preparation;`,

      `create table if not exists recipe (
            id integer primary key autoincrement,
            name text,
            description text,
            duration text,
            );`,
      `create table if not exists ingredient (
            id integer primary key autoincrement,
            name text,
            amount int,
            unit text,
            );`,
      `create table if not exists ingredient_in_recipe (
            id integer primary key autoincrement,
            recipe_id int,
            ingredient_id int,
            foreign key (recipe_id) references recipe (id)
            foreign key (ingredient_id) references ingredient (id)
            );`,
      `create table if not exists preparation (
            id integer primary key autoincrement,
            description text,
            step int,
            recipe_id int,
            foreign key (recipe_id) references recipe (id)
            );`
    ];

    db.transaction(
      (tx) => {
        for (let i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i]);
          tx.executeSql(sql[i]);
        }
      },
      (error) => {
        console.log("error call back : " + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log("transaction complete call back ");
      }
    );
  }
}
