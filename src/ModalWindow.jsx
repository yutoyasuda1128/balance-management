import React, { useState } from 'react';
import './ModalWindow.css';

export function ModalWindow(props){
  console.log(props.date)
  return (
    <div className="ModalWindow-Content">
      <p>これがモーダルウィンドウです。</p>
      <p><button onClick={props.onClose}>close</button></p>
    </div>
  )
}
