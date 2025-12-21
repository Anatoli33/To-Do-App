import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>

      <section>
        <h2>What is this website?</h2>
        <p>
          This website is a simple task management app designed to help users
          organize their daily activities.
        </p>
      </section>

      <section>
        <h2>Technologies</h2>
        <p>Built with React and modern CSS.</p>

        <div className="highlight">
          Simple, fast and focused on productivity.
        </div>
      </section>
    </div>
  );
};

export default About;
