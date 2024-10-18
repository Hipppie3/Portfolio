import React from 'react';
import './Home.css';

function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='home-container'>
      <section className='home-image'>
        {/* Insert your image here */}
        <img src="path/to/your/image.jpg" alt="Description" className="main-image" />
      </section>
      
      <section className='home-work'>
        <h2>My Work</h2>
        {/* Add examples of work or project components here */}
        <div className="work-samples">
          <div className="sample">Project 1</div>
          <div className="sample">Project 2</div>
          <div className="sample">Project 3</div>
        </div>
      </section>
      
      <footer className='home-footer'>
        <button className="scroll-to-top" onClick={scrollToTop}>
        ⌃
      </button>
      <p className='footer-p'>© 2024 Daniel Truong. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
