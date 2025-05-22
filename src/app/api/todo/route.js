import { dbConnection } from "@/app/_lib/dbconnection";

const { todoModel } = require("@/app/_lib/models/todo");

dbConnection()
export async function GET(){
    try {
        const todos=await todoModel.find()
        return new Response(JSON.stringify({data:todos}),{status:200})
    } catch (error) {
        return new Response(JSON.stringify({message:'Something went wrong!'}))
        
    }
}