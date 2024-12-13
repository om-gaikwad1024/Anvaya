import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3 className="footer-title">About Us</h3>
          <p>
            Explore the wonders of the virtual garden! Your one-stop destination
            for plant insights, gardening tips, and a vibrant community.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <a href="/home" className="footer-link">
            Home
          </a>
          <a href="/about" className="footer-link">
            About
          </a>
          <a href="/services" className="footer-link">
            Services
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div>
        <p className="footer-copyright">
          © 2024 Virtual Garden. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
