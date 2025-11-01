import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingScreen from './LoadingScreen';
import './styles.css'
const App = () => {
  const [loading, setLoading] = useState(true);
  const [mainContentVisible, setMainContentVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleLoadingScreenComplete = () => {
    setLoading(false);
    setMainContentVisible(true);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingScreenComplete} />}
      {!loading && (
        <div className={`main-content ${mainContentVisible ? 'visible' : ''}`}>
          <nav className='navbar'>
            <div className="navbar-brand">
              <a href="./">BHARGAV GANGAVARAPU</a>
            </div>
            <ul className='nav-list'>
              <li className='nav-item'><a href='./'>Home</a></li>
              <li className='nav-item'><a href='#about'>About</a></li>
              <li className='nav-item'><a href='#skills'>Skills</a></li>
              <li className='nav-item'><a href='#projects'>Projects</a></li>
              <li className='nav-item'><a href='#blogs'>Blogs</a></li>
              <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
          <div className='header'>
            <div className='stars'></div>
            <div className='header-content'>
              <div className="header-left" data-aos="fade-right">
                <h1 className="creative-heading">CREATIVE DESIGNER <br/> AND DEVELOPER.</h1>
              </div>
              <div className="header-right" data-aos="fade-left">
                <p className="header-description">
                  A designer who loves to code and a developer who loves to
                  design. I create things that look simple, but feel alive. For
                  me, a good website isn't just about pixels and performance,
                  it's about how it makes people feel when they use it.
                </p>
                <p className="header-motto">MOVE PEOPLE, NOT JUST SCREENS.</p>
                <div className="header-buttons">
                  <a href="#contact" className="collaborate-button">LET'S COLLABORATE</a>
                  <a href="#" className="hire-me-button">HIRE ME</a>
                </div>
              </div>
            </div>
          </div>

          <section id="about" className="about-section">
            <div className="about-content">
              <img src='https://res.cloudinary.com/dlpitkw7i/image/upload/v1761971587/75bb1715-8435-47d6-badc-a7e75fcc2272_wtpkay.jpg' alt='Bhargav Gangavarapu' className='about-image' />
              <div className="about-text">
                <h2>About Me</h2>
                <p>Hello! I'm Bhargav Gangavarapu, a passionate and dedicated developer with a keen interest in creating dynamic and user-friendly web applications. My journey in technology has equipped me with a strong foundation in front-end and back-end development, allowing me to build robust and scalable solutions.</p>
                <p>I thrive on challenges and constantly seek opportunities to learn new technologies and improve my skills. Whether it's crafting elegant UI/UX designs or optimizing database performance, I am committed to delivering high-quality code and exceptional user experiences. I enjoy collaborating with teams to bring innovative ideas to life and am always eager to contribute to impactful projects.</p>
                <p>When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book. I believe in continuous growth and the power of technology to solve real-world problems.</p>
              </div>
            </div>
          </section>

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

          <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
                <h3>Front-end Development</h3>
                <ul>
                  <li>React</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
                <h3>Back-end Development</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>Django/Flask</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
                <h3>Databases</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="blogs" className="blogs-section">
            <h2>My Blogs</h2>
            <div className="blogs-grid">
              <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
                <h3><a href="#" target="_blank" rel="noopener noreferrer">Understanding React Hooks</a></h3>
                <p>A deep dive into the most commonly used React Hooks and how they can simplify your component logic.</p>
              </div>
              <div className="blog-card" data-aos="fade-up" data-aos-delay="200">
                <h3><a href="#" target="_blank" rel="noopener noreferrer">Optimizing Web Performance</a></h3>
                <p>Strategies and tools to make your web applications load faster and run smoother.</p>
              </div>
              <div className="blog-card" data-aos="fade-up" data-aos-delay="300">
                <h3><a href="#" target="_blank" rel="noopener noreferrer">The Power of CSS Grid</a></h3>
                <p>Exploring the flexibility and power of CSS Grid for building complex responsive layouts.</p>
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
        </div>
      )}
    </>

  )
}

export default App