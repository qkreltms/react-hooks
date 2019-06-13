import React, { useState } from 'react';
import './App.css';

interface Content {
  tab: string,
  content: string
}

const contents: Array<Content> = [
  {
    tab: "Section 1",
    content: "test1"
  },
  {
    tab: "Section 2",
    content: "test2"
  },
]

const useTabs = (init: any, allTabs: Array<Content> = []): { currentItem: Content, changeItem: React.Dispatch<number> } => {
  const [currentIndex, setCurrentIndex] = useState<number>(init);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}
const App: React.FC = () => {
  const { currentItem, changeItem } = useTabs(0, contents)
  return (
    <>
      <div className="App">
        {contents.map((content: Content, index: number) => (
          <button key={index} onClick={() => changeItem(index)}>{content.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </>
  )
}
export default App;
