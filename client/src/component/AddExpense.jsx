import React, { useState } from 'react'
import ExpenseList from './ExpenseList'

const AddExpense = ({todos , setTodos}) => {

    const categoriesItems = ['Foods', 'Entertainment', 'Mobile'];

    const [items, setItems] = useState({
        date: "",
        expense: "",
        categories: "",
        amount: "",
        completedTask : false
    });

    
    
    function submitHandler(e) {
        e.preventDefault();
        console.log(items);
        
        if (!items.date || !items.expense || !items.categories || !items.amount) {
                console.log("Invalid Credentials !!");
            return;
        }

        // current form data ko save karo
        // return
        setTodos([...todos, items]);

        // console.log(items);
        
        // form reset
        // setItems({
        //     date: "",
        //     expenseName: "",
        //     options: ""
        // });
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='flex gap-5'>

                <input className='border  px-2 py-1'
                    type="date"
                    value={items.date}
                    onChange={(e) => setItems({ ...items, date: e.target.value })}
                />

                <input className='border px-2 py-1'
                    type="text"
                    placeholder='enter your expense'
                    value={items.expense}
                    onChange={(e) => setItems({ ...items, expense: e.target.value })}
                />
                <input placeholder='enter your amout' value={items.amount} type="number" onChange={(e) => setItems({ ...items, amount: e.target.value })} />

                <select className='border  px-2 py-1'
                    value={items.categories}
                    onChange={(e) => setItems({ ...items, categories: e.target.value })}
                >
                    <option value=""disabled selected >Select Items </option>
                    {categoriesItems.map((items, index) => {
                        return <option key={index} value={items}>{items}</option>
                    })}
                </select>

                <button className='border  px-2 py-1 bg-blue-300 rounded cursor-pointer hover:bg-blue-700 transition-all duration-300'>Submit</button>
            </form>

  
        </div>
    )
}

export default AddExpense