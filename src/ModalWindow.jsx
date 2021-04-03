import React, { useState } from 'react';
import './ModalWindow.css';

export function ModalWindow(props){
  console.log(props.date)
  return (
    <div className="ModalWindow-Content">
          <input type="text" />
          <input type="text" />
          <input type="text" />
      <p><button onClick={props.onClose}>close</button></p>
    </div>
  )
}
