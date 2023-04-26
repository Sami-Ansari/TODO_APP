"use client";

import React, { useState } from 'react'

export const Todo = () => {

    const [todo, setTodo] = useState('')

    const [todos, setTodos] = useState([
        { todoText: "todo 1", completed: false },
        { todoText: "todo 2", completed: true },
        { todoText: "todo 3", completed: true },
        { todoText: "todo 4", completed: false },
    ]);

    const onClickHandler = (meraitem: any) => {
        console.log("mera ", meraitem);

        // map rins on arrays, and returns an array
        const newTodos = todos.map((todo) => {
            console.log("todo: ", todo);
            if (todo.todoText == meraitem.todoText) {
                todo.completed = !todo.completed // true hy to false kardo false hy to true kardo
            }
            return todo;
        })
        console.log(newTodos);
        setTodos(newTodos)
    }

    const addTodo = () => {
        const newTodo = {todoText: todo, completed: false}
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setTodo(" ")
    }
const deleteTodo = (meratodo:any) => {
    const newTodos = todos.filter( todo => {
        if(todo.todoText == meratodo.todoText){
            return false
        }

        return true
    })
    console.log("old todos ", todos, "new todos ", newTodos );
    setTodos(newTodos)
}

    return (
        <div className='bg-red-400  mt-10'>
            <div>
                <h1 className='text-center text-5xl font-mono mt-20'>TODO APP</h1>
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto mt-16">
            <div className='text-xl flex justify-center'>Todo</div>
            <div className='flex justify-center items-center'>
            <input className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " placeholder="Add todo " value={todo} onChange={(e) => {setTodo(e.target.value)}} />
            <button className=' px-5 bg-yellow-300 shadow-md rounded ' onClick={addTodo}>Add</button>
            </div>
            <ul className='flex flex-col-reverse'>
                {
                    todos.map((item) => {
                        return <li className='mx-8 text-lg font-mono my-4 flex-1' style={{
                            color: item.completed ? "green" : "red"
                        }} key={item.todoText}>
                            <input type="checkbox" checked={item.completed} onChange={() => { onClickHandler(item) }} />
                            {item.todoText}
                            <button className='text-blue-700 mx-2 border border-slate-500 px-5 flex-1' 
                            onClick={() => {deleteTodo(item)}}
                            >Delete</button>
                            </li>
                    })}
            </ul>
            </form>
        </div>

    )
}
