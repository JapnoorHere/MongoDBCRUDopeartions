const dbConnection = require('./db');

async function insert(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const data = [{
            name : "Japnoor",
            age : "13",
        },{
            name : "Aria",
            age : "16",
        },{
            name : "Ramesh",
            age : "11",
        },{
            name : "Jack",
            age : "33",
        },{
            name : "Sia",
            age : "13",
        },]
        const insertData = collection.insertMany(data);
        console.log(insertData);
    }
    catch(error){
        console.log("Error in inserting : ",error);
    }
}

insert();