const dbconnection = require('./db');

async function update() {

    try {
        const db = await dbconnection();
        const collection = db.collection('users');
        // const data = [];
        // const updateData = collection.updateMany({name : "Sia"},{$set : {age : 90}});
        const updateAge = await collection.updateMany({name : "Ramesh"},{$set : {age : 1}});
        console.log(updateAge.modifiedCount);
    }
    catch(error){
        console.log("Cannot update : ",error);
    }
}

update();