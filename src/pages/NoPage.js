function NoPage () {

    return (
      <div className="App">
      <header className="App-header"> 
        <view>
          <h3 className='title_head'>This page does not exists</h3>
        </view>
      </header>
      <body className='App-body'>
        <ul>
            <li><a href='/profile'>Home</a></li>
            <li><a href='/profile/#/projects'>Projects</a></li>
            <li><a href="/profile/#/os">My OS</a></li>
        </ul>
        <h1 className='title11' name="projects">404 NOT FOUND</h1>
        <h3 className='notfound'>If you want to suggest a change to a page, contact me on GitHub.</h3>
      </body>
      <footer className='App-footer'></footer>
    </div>
    );
  };
  
  export default NoPage;