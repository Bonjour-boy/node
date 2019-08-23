var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    // 数据库名字
    database: "guestbook"
});

// 连接池可以执行连接和释放
// pool.getConnection(function(err, connection) {
//   if (err) throw err; //连接错误
//   connection.query("SELECT 1 + 1 AS solution", function(
//     error,
//     results,
//     fields
//   ) {
//     connection.release(); //释放

//     if (error) throw error;
//     // console.log('The solution is: ', results);
//   });
// });

const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection);
            }
        });
    });
};

const query = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, [params ? params : ""], function (
            error,
            results,
            fields
        ) {
            connection.release(); //释放

            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results);
            }
            // console.log('The solution is: ', results);
        });
    });
};

const find = async (tableName, params) => {
    const connection = await getConnection();
    if (params) {
        return await query(
            connection,
            `SELECT * FROM ${tableName} where ?`,
            params
        );
    } else {
        return await query(connection, `SELECT * FROM ${tableName}`, null);
    }
};

module.exports = {
    find
};