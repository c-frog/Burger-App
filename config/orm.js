const connection = require("../config/connection.js");

function printQuestionMarks (num) {
   let arr = [];
   
   for (let i = 0; i < num; i++) {
      arr.push("?");
   }
   return arr.toString();
};

function objToSql(ob) {
   let arr = [];
   for (let key in ob) {
      if (Object.hasOwnProperty.call(ob,key)) {
         arr.push(key + "=" + ob[key]);
      }
   }
   return arr.toString();
}

let orm = {
   all: (tableInput, cb) => {
      let query = "SELECT * FROM " + tableInput + ";";
      connection.query(query, (err,res)=>{
         if (err) throw err;
         cb(result);
      });
   },
   create: (table,cols,vals,cb) => {
      let query = "INSERT INTO " + table;
      query += " (";
      query += cols.toString();
      query += ") ";
      query += "VALUES (";
      query += printQuestionMarks(vals.length);
      query += ") ";

      console.log(query);

      connection.query(quesry, vals, (err, results) => {
         if (err) throw err;
         cb(result);
      });
   },
   update: (table, objColVals, condition, cb) => {
      let query = "UPDATE " + table;
      
   }
}