import React from 'react'
import { GET } from '../api/todo/route'

export default async function ToDoList() {
const res=await GET()
const {data:todos}=await res.json()
console.log(todos);
  return (
    <>
    {todos.map((todoItem)=>{
        return <>
        <div key={todoItem._id}>
          <h1>{todoItem.title}</h1>
          <h2>{todoItem.status}</h2>
        </div>
        </>
    })}
    </>
  )
}
