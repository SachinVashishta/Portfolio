import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">SACHIN</span></h1>
        <h2>MERN Stack Developer</h2>
        <p>Building responsive web apps with React, Node.js & modern tech.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
