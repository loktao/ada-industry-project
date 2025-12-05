import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      
      <img src="/logo.jpg" alt="Site Logo" className="home-logo" />

      <h1 className="main-title">Women's Health</h1>
      
      <div className="cards-container">
        <div className="content-card">
          <h3>Introduction</h3>
          <p>This is a website full of information, to raise awareness regarding women's health</p>
        </div>

        <div className="content-card">
          <h3>Help to get started</h3>
          <p>Using reusable components makes building apps much easier. Click below to see an alert!</p>
          
          <button 
            className="alert-btn" 
            onClick={() => alert("This is your alert!")}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;