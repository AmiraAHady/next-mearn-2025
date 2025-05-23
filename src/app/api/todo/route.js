import { dbConnection } from "@/app/_lib/dbconnection";
import { validationSchema } from "./schema";

const { todoModel } = require("@/app/_lib/models/todo");

dbConnection();
export async function GET() {
  try {
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong!" }));
  }
}

export async function POST(request) {
  const todo = await request.json();
  try {
    const validation = validationSchema.safeParse(todo);
    if (!validation.success) {
      return new Response(
        JSON.stringify({
          message: `Validation Faild! with ${validation.error}`,
        }),
        { status: 400 }
      );
    }
    const newTodo = await todoModel.create(todo);
    return new Response(JSON.stringify(newTodo), { status: 201 });
  } catch (error) {
    new Response(
      JSON.stringify({
        message: `Something went wrong!`,
      })
    );
  }
}
