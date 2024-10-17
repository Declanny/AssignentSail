import { useState } from 'react';
import { AiFillCaretDown, AiOutlineCheckSquare, AiOutlineCalendar, AiOutlineBell, AiOutlineBulb } from 'react-icons/ai'; // Removed AiFillHistory
import './styles/Navbar.css'; // Assuming CSS is under styles folder

const Navbar = () => {
  const [isFeatureOpen, setFeatureOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);

  // Toggle dropdown on click
  const toggleFeatureDropdown = () => setFeatureOpen(!isFeatureOpen);
  const toggleCompanyDropdown = () => setCompanyOpen(!isCompanyOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Snap</h2>
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          <span onClick={toggleFeatureDropdown}>
            Features <AiFillCaretDown />
          </span>
          {isFeatureOpen && (
            <ul className="dropdown-menu">
              <li><AiOutlineCheckSquare /> To Do List</li>
              <li><AiOutlineCalendar /> Calendar</li>
              <li><AiOutlineBell /> Reminder</li>
              <li><AiOutlineBulb /> Planning</li>
            </ul>
          )}
        </li>
        <li className="dropdown">
          <span onClick={toggleCompanyDropdown}>
            Company <AiFillCaretDown />
          </span>
          {isCompanyOpen && (
            <ul className="dropdown-menu">
              {/* Replaced AiFillHistory with a working icon */}
              <li> History</li>
              <li> Our Team</li>
              <li> Blog</li>
            </ul>
          )}
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
