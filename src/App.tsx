import React, { useState, useEffect } from 'react';
import './App.css';

const useTitle = (initTitle: string) => {
  const [title, setTitle] = useState(initTitle);
  const updateTitle = () => {
    const htmlTitle: HTMLTitleElement | null = document.querySelector("title");
      if (htmlTitle) {
        htmlTitle.innerText = title;
      }
    }
  useEffect(updateTitle, [title]);
  return setTitle;
} 
const App: React.FC = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("HOME")
  }, 1000);
  return (
    <>
     <div>title은 탭바 쪽에 있음</div>
    </>
  )
}
export default App;
