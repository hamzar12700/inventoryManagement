import React, { useState } from 'react'

const AddEntry = () => {
    const [formData, setformData] = useState({
        date: "",
        items: "",
        amount: 0,
        expense: ""
    })
    const [addEntry, setAddEntry] = useState([])

    function submitHandler(e) {
        e.preventDefault()
        // console.log(formData.date);


        setAddEntry(prev => [...prev, {
            date: formData.date,
            items: formData.items,
            amount: formData.amount,
            expense: formData.expense
        }])

        console.log(addEntry);


    }



    return (
        <div>
            <form action="" onSubmit={submitHandler}>
              <input type='date' onChange={(e) => setformData({ ...formData, date: e.target.value })}/>
                <input type="text"
                    onChange={(e) => setformData({ ...formData, items: e.target.value })}
                    placeholder='enter your item name' />
                <input type="number"
                    onChange={(e) => setformData({ ...formData, amount: e.target.value })}
                />
                <select onChange={(e) => setformData({ ...formData, expense: e.target.value })}>
                    <option value="">Select Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>

                <button>Save</button>
            </form>

        {addEntry && addEntry.map((item,index)=>{
            return <div key={index}>
                <h1>{item.date}</h1>
                <h2>{item.items}</h2>
                <h2>{item.amount}</h2>
                <h2>{item.expense}</h2>
            </div>
        })}
        </div>
    )
}

export default AddEntry