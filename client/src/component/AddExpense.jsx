import React, { useState } from 'react'
import ExpenseList from './ExpenseList'

const AddExpense = ({ todos, setTodos }) => {

    const categoriesItems = ['Foods', 'Entertainment', 'Mobile'];

    const [items, setItems] = useState({
        name: "",
        category: "",
        stock: 0,
        price: 0,
        completedTask: false
    });



    function submitHandler(e) {
        e.preventDefault();
        console.log(items);
        if (!items.date || !items.expense || !items.categories || !items.amount) {
            console.log("Invalid Credentials !!");
            return;
        }
        setTodos([...todos, items]);
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='flex gap-5'>

                {/* name value input */}
                <div className='flex items-center gap-5'>
                    <h1>Enter your Item Name :</h1>
                    <input className='border px-2 py-1'
                        type="text"
                        placeholder='enter your expense'
                        value={items.expense}
                        onChange={(e) => setItems({ ...items, name: e.target.value })}
                    />
                </div>


                {/* enter your price */}
                <div className='flex items-center gap-5'>

                    <h1>Price :</h1>
                    <input placeholder='enter your price' value={items.price} type="number" onChange={(e) => setItems({ ...items, price: e.target.value })} />

                </div>

                {/* enter your stock */}
                <div className='flex items-center gap-5'>
                    <h1>Stock :</h1>
                    <input placeholder='enter your price' value={items.price} type="number" onChange={(e) => setItems({ ...items, stock: e.target.value })} />
                </div>

                {/* enter your category */}
                <div className='flex items-center gap-5'>
                    <h1>Category :</h1>
                    <select className='border  px-2 py-1'
                        value={items.categories}
                        onChange={(e) => setItems({ ...items, categories: e.target.value })}
                    >
                        <option value="" disabled selected >Select Items </option>
                        {categoriesItems.map((items, index) => {
                            return <option className='text-black' key={index} value={items}>{items}</option>
                        })}
                    </select>
                </div>
                {/* submit button */}
                <button className='border  px-2 py-1 bg-blue-300 rounded cursor-pointer hover:bg-blue-700 transition-all duration-300'>Submit</button>
            </form>


        </div>
    )
}

export default AddExpense