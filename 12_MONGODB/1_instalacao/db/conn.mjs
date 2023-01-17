import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017//testemongodb"

const client = new MongoClient(uri)

async function run(){
    try{

        await client.connect()
        console.log("Conectamos")

    }catch(err){
        console.log(err)
    }
}

run()

export default client