import React, { useState } from 'react'

const ExpenseList = ({ todos, setTodos }) => {

  const [input, setInput] = useState(false)

  // const [update, setUpdate] = useState({
  //       date: "",
  //       expense: "",
  //       categories: "",
  //       amount: "",
  //       completedTask : false
  //     })



  
  
  function updateItem(id) {
    
    setInput(!input)
    const filtered = todos.filter((task, index) => {
      return index === id
    })

    filtered.map((items, index) => {

    })

  }

  function removeItem(id) {


    const filtered = todos.filter((task, index) => {
      return index !== id
    })

    setTodos(filtered)

  }


  function toggleTask(id) {
    console.log(id);

    setTodos(todos.map((task, index) => {
      return index === id ? { ...task, completedTask: !task.completedTask } : task
    }))

  }


  // console.log(todos);
  // style={{textDecoration :  }}
  return (
    <div className='bg-[#1e2939] mt-20 px-5 py-10 flex flex-col gap-3 rounded'>
      {/* <hr /> */}
      {todos.length === 0 ? <p className='w-[200px] h-[auto] flex items-center justify-center'>No Item Found</p> : (
        todos.map((items, index) => {
          return <div className='flex gap-10 items-center'>
            <input type="checkbox" onClick={() => toggleTask(index)} />
            <h1>{items.date}</h1>
           { <h1>{items.categories}</h1>}
           <h1 style={{ textDecoration: items.completedTask ? "line-through" : "none" }} >{items.expense}</h1>
             <h1>{items.amount}</h1>
            <button onClick={() => updateItem(index)} className='bg-green-800 px-3 rounded text-white'>Update Item</button>
            <button onClick={() => removeItem(index)} className='bg-[#fb2c36] px-3 text-sm py-2 rounded text-white'>Remove Item</button>
          </div>
        }))}


    </div>
  )
}

export default ExpenseList