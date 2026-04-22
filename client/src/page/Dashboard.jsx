import React, { useState } from 'react'
import AddExpense from '../component/AddExpense'
import ExpenseList from '../component/ExpenseList'

const Dashboard = () => {
    const [todos, setTodos] = useState([])

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <AddExpense todos={todos} setTodos={setTodos} />
      <ExpenseList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Dashboard