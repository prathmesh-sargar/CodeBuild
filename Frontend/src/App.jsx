import React from 'react'
// import CodeIDE from './components/CodeIDE'
import "./App.css";
// import IDECode from './components/IDECode';
import IDE01 from './components/IDE01';
import Feedback from './components/form/feedback';
import NotesPage from './components/pages/NotesPage';
// import IDE from './components/IDE';
// import IDE01 from './components/IDE01';

const App = () => {
  return (
    <>
    {/* <CodeIDE/> */}
    {/* <IDE/> */}
    <IDE01/>
     {/* <IDECode/> */}
     <NotesPage/>
     <Feedback/>
    </>
  )
}

export default App
