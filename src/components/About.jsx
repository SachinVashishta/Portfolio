const About = () => {
  const skills = ['React', 'Node.js', 'JavaScript', 'CSS3', 'MongoDB', 'Git & GitHub'];

  const education = [
    'Diploma in Computer Science & Engineering (CSE)',
    '6 Months Industrial Training in MERN Stack'
  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>Passionate MERN Stack Developer with Diploma in CSE and hands-on 6-month industrial training. Skilled in building full-stack responsive web apps.</p>
      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card fade-in">{skill}</div>
        ))}
      </div>
      <h3>Education</h3>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="edu-card fade-in">{edu}</div>
        ))}
      </div>
    </section>
  );
};

export default About;

