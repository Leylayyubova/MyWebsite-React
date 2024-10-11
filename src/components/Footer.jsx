import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; 2024 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
        </p>
        <ul className="footer-list">
          <li>
            <a href="#" className="footer-link">Terms & Condition</a>
          </li>
          <li>
            <a href="#" className="footer-link">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
