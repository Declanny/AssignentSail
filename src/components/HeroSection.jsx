import './styles/HeroSection.css'; // External CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <h1>Make <br />Remote Work</h1>
        <p>Get your team in sync no matter your location 
          <br />Streamline processes, create team rituals <br /> and watch productivity soar.</p>
           
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="hero-image-container">
        <img src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1728997686/image-hero-desktop_wlbrkj.png" alt="Team working" />
      </div>
    </section>
  );
};

export default HeroSection;
