"use server"
import { todoModel } from "../_lib/models/todo";

export async function addTodo(formData) {
  const title = formData.get("todotitle");
  const status = formData.get("todostatus");
  await todoModel.create({ title, status });
}
