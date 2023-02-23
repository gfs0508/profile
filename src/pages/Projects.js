import '../App.css';
import "../styles/index.css"

function Projects (){
  return(
    <div className="App">
      <header className="App-header"> 
        <view>
          <h3 className='title_head'>Here are my projects</h3>
        </view>
      </header>
      <body className='App-body'>
        <ul>
            <li><a href='/profile'>Home</a></li>
            <li><a className='active' href='/profile/#/projects'>Projects</a></li>
            <li><a href="/profile/#/os">My OS</a></li>
        </ul>
        <h1 className='title1'>Projects Page</h1>
        <div className='box'>
          <h4 className='sub_title1'>Coding</h4>
          <p className='sub_title2'>A simple script that allows you to encode and decode strings and files, with or without a key.</p>
          <img alt="Python" className='images_post' src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'></img>
          <img alt="Downloads" className='images_post' src="https://img.shields.io/github/downloads/GFS-0508/Python-Projects/total?style=for-the-badge&logo=appveyor"></img>
          <img alt="Stars" className='images_post' src="https://img.shields.io/github/stars/GFS-0508/Python-Projects?style=social?style=for-the-badge&logo=appveyor"></img>
        </div>
      </body>
      <footer className='App-footer'></footer>
    </div>
  )
};

export default Projects;