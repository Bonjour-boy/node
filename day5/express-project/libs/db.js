const {
    MongoClient,
    ObjectId
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'students';



// // Use connect method to connect to the server
// MongoClient.connect(url, function (err, client) {
//     if (err !== null) throw err;
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     // 选中需要连接的库
//     const db = client.db(dbName);
//     // 选中表
//     const collection = db.collection('students');
//     // Find some documents
//     collection.find({}).toArray(function (err, docs) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(docs)
//     });
//     // 关闭连接
//     client.close();
// });
const connect = () => {
    return new Promise((resovle, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                reject(ree);
                throw err;
            } else {
                resovle(client); //得到连接段
            }
        })
    })
}

//查找
const find = (table, params) => {
    // console.log(params);
    return new Promise(async (resovle, reject) => {
        let client = await connect(); //连接
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(table);
        collection.find(params).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resovle(docs);
            }
        });
        // 关闭连接
        client.close();
    })
}

//增加
const add = (table, params) => {
    // console.log(params);
    return new Promise(async (resovle, reject) => {
        let client = await connect(); //连接
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(table);

        collection.insertMany([params], (err, docs) => {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resovle(docs);
            }
        });
        // 关闭连接
        client.close();
    })
}

//更新
const updata = (table, params) => {
    return new Promise(async (resovle, reject) => {
        let client = await connect(); //连接
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(table);

        collection.updateOne(params[0], {
            $set: params[1]
        }, (err, docs) => {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resovle(docs);
            }
        });
        // 关闭连接
        client.close();
    })
}

//删除
const delect = (table, params) => {
    // console.log(params);
    return new Promise(async (resovle, reject) => {
        let client = await connect(); //连接
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(table);

        collection.deleteOne(params, (err, docs) => {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resovle(docs);
            }
        });
        // 关闭连接
        client.close();
    })
}


module.exports = {
    find,
    // 根据id查找
    ObjectId,
    add,
    updata,
    delect
}