// import React, { createContext, useState, useEffect } from 'react'

// export const TodoListContext = createContext() 
// export const TodoContextProvider = (props) => {
//     const initialState = JSON.parse(localStorage.getItem('tasks')) || []
//     const [tasks, setTasks] = useState(initialState)
//     const [editItem, setEditItem] = useState(null)
//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//       }, [tasks])
// const addTask = title =>{
//     setTasks([...tasks, {id:new Date().getTime().toString()}])
// }
// const removeTask = id =>{
//     setTasks(tasks.filter(task=> task.id !== id))
// }
// const findItem = id => {
//     const item = tasks.find(task => task.id === id)

//     setEditItem(item)
//   }
//   const editTask = (title, id) => {
//     const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

//     console.log(newTasks)

//     setTasks(newTasks)
//     setEditItem(null)
//   }
//     return(
//         <TodoListContext.Provider
//        value = {{

//         tasks,
//         addTask,
//         removeTask,
//         // clearList,
//         findItem,
//         editTask,
//         editItem
//         }}
//         >
// {props.children}    
//         </TodoListContext.Provider>
//     )
// }
// export default TodoListContext; 