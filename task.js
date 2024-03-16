const dbConnection = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const findRes = await collection.find().toArray();
        console.log(findRes);
    }
    catch(error){
        console.log("Error performing task ",error.message);
    }
}

main();
