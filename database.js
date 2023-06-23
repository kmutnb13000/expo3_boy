import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('personalData.db');

const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)'
    );
     tx.executeSql(
      "INSERT INTO users (id, username, password ) VALUES ('1', 'admin', 'admin')"
    );


    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS personalData (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER NOT NULL, gender TEXT NOT NULL, education TEXT NOT NULL, occupation TEXT NOT NULL, userId INTEGER, FOREIGN KEY (userId) REFERENCES users (id))'
    );
  });
};

export default initializeDatabase;
