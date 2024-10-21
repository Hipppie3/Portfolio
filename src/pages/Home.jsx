import React from 'react';
import './Home.css';

function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='home-container'>
      <section className='home-image'>

      </section>
      
      <section className='home-work'>
        <h2>SOME OF MY WORKS</h2>
        {/* Add examples of work or project components here */}
        <div className="work-samples">
          <div className="sample" onClick={() => window.location.href = 'https://daniel2dolist.netlify.app'}>
            <div className="sample2"></div>
          To Do List
           </div>
          <div className="sample"><div className="sample2"></div>Project 2</div>
          <div className="sample"><div className="sample2"></div>Project 3</div>
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
