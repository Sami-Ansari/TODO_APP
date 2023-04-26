"use client";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([
        { todoText: "Assignment", completed: false },
        { todoText: "Quiz      ", completed: true },
        { todoText: "Home work", completed: true },
        { todoText: "Test", completed: false },
    ]);

    const onClickHandler = (meraElm: any) => {
        console.log("meraElm", meraElm);

        // map runs on array, and returns an array
        const newTodos = todos.map((todo) => {
            console.log("todo: ", todo);
            if (todo.todoText == meraElm.todoText) {
                todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
            }
            return todo;
        });

        console.log(newTodos);
        setTodos(newTodos);
    };
    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");
    };

    const deleteTodo = (meraTodo: any) => {
        const newTodos = todos.filter((todo) => {
            if (todo.todoText == meraTodo.todoText && todo.completed == meraTodo.completed) 
            {   console.log("check ", todo.completed);
                console.log("check ",meraTodo.completed);
                return false;
            }
            return true;
        });
        console.log("old todos", todos, "new todos", newTodos);
        setTodos(newTodos);
    };
    return (
        <>
            <div className="text-center mt-16">
                <div className="text-yellow-400 text-9xl">Todo</div>
                <input className=" text-gray-700 text-sm font-mono shadow-md rounded mt-10 "
                    placeholder="Add todo text"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button className="rounded shadow-sm text-yellow-300 mx-2" onClick={addTodo}>Add</button>
            </div>
            <ul className="text-center">
                {todos.map((elm) => {
                    return (
                        <>
                        <div className="w-52 mx-auto  items-center my-3 " >
                    <li className="flex  "
                            style={{
                                color: elm.completed ? "yellow" : "violet",
                                fontStyle: "oblique",
                                listStyle: "none",
                            }}
                            key={elm.todoText}
                        >
                            <input className="flex mx-1"
                                type="checkbox"
                                checked={elm.completed}
                                onChange={() => {
                                    onClickHandler(elm);
                                }}
                            />
                            {elm.todoText}
                            <button className="bg-slate-400 rounded mx-5 px-2 "
                                onClick={() => {
                                    deleteTodo(elm);
                                }}
                            >
                                Delete
                            </button>
                        </li>
                        </div>
                        </>
                    );
                })}
            </ul>
        </>
    );
}