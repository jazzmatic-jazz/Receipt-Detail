import React, { useState } from 'react'

const ReceiptForm = (props) => {
    const[date, setDate] = useState('')
    const[amount, setAmount] = useState('')
    const[pay, setPay] = useState('')
    const[rem, setRem] = useState('')

    const handleChange = (e) => {
        setDate(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handlePayChange = (e) => {
        setPay(e.target.value)
    }

    const handleRemChange = (e) => {
        setRem(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const val = {
            date,
            amount,
            pay,
            rem,
        }

        props.fun(val)
        clearState()
        alert('Form details submitted')
    }

    const clearState = () => {
        setDate('')
        setAmount('')
        setPay('')
        setRem('')
    }


  return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <h1><u>Receipt Details</u></h1>
            
            <label>Date </label>
            <input type="date" value={date} required onChange={(e)=> {handleChange(e)}}/>
            <br />
            
            <label>Amount </label>
            <input type="number" value={amount} required onChange={(e)=> {handleAmountChange(e)}}/>
            <br />

            <label>Payment Mode </label>
            <select name="Payment" value={pay} required onChange={(e)=> handlePayChange(e)}>
                <option > Select an option</option>
                <option > Cash</option>
                <option > Online</option>
            </select>
            <br />

            <label>Remark </label>
            <input type="text" value={rem} required onChange={(e)=> {handleRemChange(e)}}/>
            <br />       

            <input type="submit" value="Submit"/>
            <button onClick={clearState}>Cancel</button>
        </form>
        
        
  )
}

export default ReceiptForm