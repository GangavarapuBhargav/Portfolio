import React, { useEffect } from 'react'
import './styles.css'
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='nav-item'><a href='./'>Home</a></li>
          <li className='nav-item'><a href='#projects'>Projects</a></li>
          <li className='nav-item'><a href='#contact'>Contact</a></li>
          <li className='nav-item'><a href='https://drive.google.com/file/d/14szFPAAy3vcN6DV7ZEzvEqZOVxnLA2_Q/view?usp=sharing' target='_blank' rel='noopener noreferrer' download>Resume</a></li>
        </ul>
      </nav>
      <div className='header'>
        <div className='stars'></div>
        <div className='header-content'>
          <img src='https://res.cloudinary.com/dlpitkw7i/image/upload/v1761971587/75bb1715-8435-47d6-badc-a7e75fcc2272_wtpkay.jpg' alt='Bhargav Gangavarapu' className='profile-image' />
          <h1 className='heading'>Gangavarapu Bhargav</h1>
        </div>
      </div>

      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <img src="https://via.placeholder.com/300x200/8e44ad/FFFFFF?text=OpenSkill.in" alt="OpenSkill.in Project" className="project-image" />
            <h3>OpenSkill.in</h3>
            <p>A dynamic online learning hub offering a diverse range of courses and skill development programs to empower individuals with practical knowledge.</p>
            <a href="https://openskill.in" target="_blank" rel="noopener noreferrer" className="project-link">Visit OpenSkill.in</a>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <img src="https://via.placeholder.com/300x200/50b2c0/FFFFFF?text=Language+Learning" alt="Language Learning Platform" className="project-image" />
            <h3>Polyglot Pathways</h3>
            <p>An interactive platform designed to make language acquisition engaging and effective through gamified lessons and real-world conversation practice.</p>
            <a href="https://languagelearning-uoaw.onrender.com/" className="project-link">View Project</a>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <img src="https://via.placeholder.com/300x200/2ecc71/FFFFFF?text=My+Next+Project" alt="My Next Project" className="project-image" />
            <h3>My Next Project</h3>
            <p>Stay tuned for my upcoming innovative project, currently in development. It promises to deliver cutting-edge solutions and a seamless user experience.</p>
            <a href="#" className="project-link">Coming Soon</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the platforms below or send an email!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gangavarapu-bhargav-8303b02b4/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/GangavarapuBhargav" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/bhargav_8461" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="email-contact">
          <p>Prefer email? Let's collaborate!</p>
          <a href="mailto:2300033319cseelge@gmail.com" className="collaborate-button">Collaborate</a>
        </div>
      </section>
    </>

  )
}

export default App