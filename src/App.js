/*/
import logo from './logo.svg';
import './App.css';
import "./styles/index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Projects from './Projects';

function projects() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>
  );
}

function App() {
  return (
    
    <div className="App">
      <header className="App-header"> 
        <view>
          <h3>Welcome to GFS-0508 Page</h3>
        </view>
      </header>
      <body className='App-body'>
        <ul>
            <li><a className='active' href="#home">Home</a></li>
            <li><a onClick={projects}>Projects</a></li>
            <li><a href="##">My OS</a></li>
            <li style={{float:"right",}}><img src={logo} className="App-logo" alt="logo" style={{height: 60, width: 60}}/></li>
        </ul>
        <h1 className='title1' name="home">Home Page</h1>
        <h2 className='title2'>About Me</h2>
        <div>
          <p className='profile'>Estou interessado em todo o tipo de ferramentas relacionadas com tecnologia desde o mais básico ao mais avançado.</p>
          <p className='profile'>Atualmente estou desenvolvendo aplicações usando Python.</p>
          <p className='profile'>De vez em quando foco-me em construir o meu própio SO do zero.</p>
          <img src='https://avatars.githubusercontent.com/u/88109863?v=4' className='photo'></img>        </div>
        <h2 className='title22'>Tools and Programing Languages</h2>
        <div>
          <img src='https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' alt='c#'></img>
          <img src='https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' alt='c++'></img>
          <img src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' alt='Python'></img>
          <img src='https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Notepad++-90E59A.svg?style=for-the-badge&logo=notepad%2B%2B&logoColor=black' alt='Python'></img>
          <img src='https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white' alt='Python'></img>
          <img src='https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black' alt='Python'></img>
          <img src='https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white' alt='Python'></img>
        </div>
      </body>
      <footer className='App-footer'>
        <h4>Page Created by GFS-0508</h4>
        <h4>Web site created using create-react-app</h4>
      </footer>
    </div>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
/*/