import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ExpenseList = ({ todos, setTodos }) => {

  const [input, setInput] = useState(false)

  const [product, setProduct] = useState([])


  async function fetchData() {
    let res = await axios.get('http://localhost:5000/api/product/');
    console.log(res.data.data);
    setProduct(res.data.data)
  }

  useEffect(() => {
    fetchData()

  }, [])



  // database se data delete ho rha ha 
  async function deleteHandler(id) {

    const deleteData = await axios.delete(`http://localhost:5000/api/product/${id}`);
    console.log(deleteData);

    fetchData()

  }

// database se upload wala function
  async function updateHandler(id) {
    console.log(id);
    
  }


  // ye manually update krwa rha hooooo
  function updateItem(id) {

    setInput(!input)
    const filtered = todos.filter((task, index) => {
      return index === id
    })

    filtered.map((items, index) => {

    })

  }

  // remove item manually
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
      {/* {todos.length === 0 ? <p className='w-[200px] h-[auto] flex items-center justify-center'>No Item Found</p> : (
        todos.map((items, index) => {
          return <div className='flex gap-10 items-center'>
            <input type="checkbox" onClick={() => toggleTask(index)} />
            <h1>{items.date}</h1>
            {<h1>{items.categories}</h1>}
            <h1 style={{ textDecoration: items.completedTask ? "line-through" : "none" }} >{items.expense}</h1>
            <h1>{items.amount}</h1>
            <button onClick={() => updateItem(index)} className='bg-green-800 px-3 rounded text-white'>Update Item</button>
            <button onClick={() => removeItem(index)} className='bg-[#fb2c36] px-3 text-sm py-2 rounded text-white'>Remove Item</button>
          </div>
        }))} */}

      {
        product.length === 0 ? (
          <p>No Item Found</p>
        ) : (
          product.map((aptech, index) => {
            const { name, stock, price, category, _id, createdAt } = aptech;
            return (
              <div key={_id} className='flex gap-10 items-center'>
                {/* <input type="checkbox" onClick={()=>toggleTask(!)} /> */}
                <h1 >Name: {name}</h1>
                <h1>Stock: {stock}</h1>
                <h1>Price: {price}</h1>
                <h1>Category: {category}</h1>
                <p>{new Date(createdAt).toDateString()}</p>

                <button
                  onClick={() => deleteHandler(_id)}
                  className='border bg-red-500 px-2'
                >
                  Delete
                </button>

                   <button
                  onClick={() => updateHandler(_id)}
                  className='border bg-red-500 px-2'
                >
                  Update
                </button>
              </div>
            );
          })
        )
      }










    </div>
  )
}

export default ExpenseList