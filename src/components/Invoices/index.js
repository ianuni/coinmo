import React from 'react'
import "./invoices.css"

const Invoices = ({children}) => {
  return (
    <div className="invoice-grid">
        {children}
    </div>
  )
}

export const Invoice = ({companyName, companyCategory, date, total, type}) => {
    return (
        <div className="invoice">
            <h1>{companyName}</h1>
            <span>{companyCategory}</span>
            <div className="invoice-date-information">
                
                <span>00/00/0000</span>
                <span>00:00</span>
            </div>
            <hr className="invoice-separator"/>
            <div className="invoice-price">
                <h2>Total:</h2>
                <span className={type}>{total}</span>
            </div>
        </div>
    );
}

export default Invoices;