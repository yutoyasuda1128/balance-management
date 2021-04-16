import React, { useState } from 'react';
import './ModalWindow.css';


function formatDate(dt) {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth()+1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}
export function ModalWindow(props){
  const [price, setPrice] = useState(0);
  const handleInput = (e) => {
    setPrice(e.target.value)
  }
  
  const [category, setCategory] = useState(""); 
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  
  const registerExpense = () => {
    const obj = {
      type: "expense", 
      price,
      category
    }
    
    window.localStorage.setItem("balance-management", JSON.stringify([obj]))
  }
  
  return (
    <div className="ModalWindow-Content">
      <div className="ModalWindow-ButtonArea">{ formatDate(props.date)}
      　<div className="Expenditureincome">
          <button onClick={registerExpense}>支出</button>
          <button>収入</button>
        </div>
      </div>
      <div className="ModalWindow-InputArea">
        <select className="ModalWindow-CategoryArea" onChange={handleCategory}>
          <option value="">カテゴリ</option>
          <option value="food">食費</option>
          <option value="miscellaneous">雑費</option>
        </select>
        <input className="ModalWindow-Input" type="number"  placeholder="金額" onChange={handleInput}/>
      </div>
      <div className="ModalWindow-total-amount">
        <input className="ModalWindow-total" type="text" value="合計額" disabled/>
        <input className="ModalWindow-expense" type="text" value="支出" disabled/>
        <input className="ModalWindow-expense-total" type="number" disabled/>
        <input className="ModalWindow-income" type="text" value="収入" disabled/>
        <input className="ModalWindow-income-total" type="number" disabled/>
      </div>
      <p><button onClick={props.onClose}>close</button></p>
    </div>
  );
}
