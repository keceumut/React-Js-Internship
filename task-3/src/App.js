import TopBar from './components/TopBar/TopBar';
import './App.css';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import { useState } from 'react';

function App() {

  const [content,setContent] = useState('character');
  const [sesubject,setSeSubject] = useState("");

  return (
    <div className='App'>
      <TopBar setContent={setContent} setSeSubject={setSeSubject}></TopBar>
      <ContentDisplay content={content} subject={sesubject}></ContentDisplay>
    </div>

  );
}

export default App;
