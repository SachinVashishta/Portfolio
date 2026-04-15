const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
     
        <div className="contact-info">
          <h3>Connect Directly</h3>
          <div className="info-links">
            <a href="https://wa.me/919805394546" className="info-link whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp: 9805394546
            </a>
            <a href="mailto:sachin616789@gmail.com" className="info-link email">
              Email: sachin616789@gmail.com
            </a>
            <a href="https://instagram.com/sachin_vashisht0047" className="info-link insta" target="_blank" rel="noopener noreferrer">
              Instagram: @sachin_vashisht0047
            </a>
          </div>
        </div>
    </section>
  );
};

export default Contact;
