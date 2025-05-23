"use client";
import { addTodo } from "@/app/_actions/action";
import React from "react";

export default function AddToDo() {
  const submitData = async () => {
    const todo = { title: "m", status: "todo" };
    const res = await fetch(`http://localhost:3000/api/todo`, {
      method: "POST",
      body: JSON.stringify(todo),
    });
  };

 
  return (
    <>
      <div>AddToDo</div>
      <form action={addTodo}>
        <div className="mb-3">
          <label className="form-label">ToDo Title</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="todotitle"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Status
          </label>
          <input type="text" className="form-control" name="todostatus" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <button classNameName="btn btn-primary" onClick={submitData}>
        {" "}
        Add ToDo
      </button> */}
    </>
  );
}
