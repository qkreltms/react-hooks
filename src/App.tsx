import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const useClick = (onClick: any) => {
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // update, create
    if(element.current) {
      element.current.addEventListener("click", onClick)
    }

    // unmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  }, [])

  return element;
}

const App: React.FC = () => {
  const sayHello = () => console.log("say Hellp")
  const title = useClick(sayHello);

  return (
    <>
     <h1 ref={title}>Hi</h1>
    </>
  )
}
export default App;
