const Projects = () => {
  const projects = [
    { title: 'E-commerce Platform', desc: 'Full-stack MERN e-commerce with cart, auth & payments', img: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-commerce', github: 'https://github.com/yourusername/ecommerce', live: 'https://e-commerce-0047.onrender.com/' },
    { title: 'Task Management App', desc: 'MERN task manager with drag-drop, real-time collab', img: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Tasks', github: 'https://github.com/yourusername/taskmgr', live: 'https://tasks.sachi.dev' },
   
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-links">
              <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
