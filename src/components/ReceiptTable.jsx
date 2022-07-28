import React, { useState } from 'react'
import jsondata from '../ReceiptDetail/data.json'
import ReceiptForm from './receiptForm'

function ReceiptTable() {
    const [detail, setDetail] = useState(jsondata)

    const tableRows = detail.map((info) => {
        return(
            <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.date}</td>
                <td>{info.amount}</td>
                <td>{info.pay}</td>
                <td>{info.rem}</td>
            </tr>
        )
    })

    const addData = (data) =>{
        console.log(data, "data")

        const receipts = detail.length
        data.id = receipts+1

        const updatedReceipt = [...detail]
        console.log(updatedReceipt, "updated")

        updatedReceipt.push(data)
        setDetail(updatedReceipt)
    }

    return(
        <div>
            <ReceiptForm fun={addData}/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Payment Mode</th>
                        <th>Remarks</th>
                    </tr>
                </thead>

                <tbody>{tableRows}</tbody>
            </table>
            
        </div>
    )

  
}

export default ReceiptTable