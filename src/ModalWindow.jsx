import React, { useState } from 'react';
import './ModalWindow.css';


function formatDate(dt) {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth()+1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}
export function ModalWindow(props){
  console.log(props.date)
  console.log(props.date.getFullYear())
  return (
    <div className="ModalWindow-Content">
      <div className="ModalWindow-ButtonArea">{ formatDate(props.date)}
      　<div className="Expenditureincome">
          <button>支出</button>
          <button>収入</button>
        </div>
      </div>
      <div className="ModalWindow-InputArea">
        <select className="ModalWindow-CategoryArea">
          <option value="">カテゴリ</option>
          <option value="food">食費</option>
          <option value="miscellaneous">雑費</option>
        </select>
        <input className="ModalWindow-Input" type="number"  placeholder="金額"/>
      </div>
      <p><button onClick={props.onClose}>close</button></p>
    </div>
  )
}
