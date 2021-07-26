import TopBar from './components/TopBar/TopBar';
import './App.css';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import { useState } from 'react';

function App() {

  const [content,setContent] = useState('character');

  return (
    <div className='App'>
      <TopBar setContent={setContent}></TopBar>
      <ContentDisplay content={content}></ContentDisplay>
    </div>

  );
}

export default App;
