import { Link } from "react-router-dom";

// We use the "link" ... because that is faster and don't reload for any event and navigation

const About = () => {
  return (
    <div style={{ background: "#999" }}>
      <h4>Version 1.1.0</h4>
      <h4>
        <Link to="/contacts">Contacts</Link>
      </h4>
      <h5>
        <Link to="/">Go Back</Link>
      </h5>
    </div>
  );
};

export default About;
