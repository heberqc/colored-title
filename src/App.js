import React from "react";
import "./style.css";
import ColoredTitle from './ColoredTitle';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ColoredTitle style={{fontSize: '2rem'}}text="Esto es un ejemplo" colors={['red', 'blue', 'green', 'gold']} />
    </div>
  );
}
