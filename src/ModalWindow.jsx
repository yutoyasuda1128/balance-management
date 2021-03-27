import React, { useState } from 'react';
import './ModalWindow.css';

export function ModalWindow(){
  return (
    <div className="ModalWindow-Content">
      <p>これがモーダルウィンドウです。</p>
      <p><button>close</button></p>
    </div>
  )
}
