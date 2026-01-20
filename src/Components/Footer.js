import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            We build scalable web applications and modern digital solutions
            with a strong focus on performance, security, and user experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: sumanshuborkar569@gmail.com</p>
          <p>Location: Whitefields, Hyderabad, India</p>

          <div className="social-icon" style={{"margin-top": "25px"}}>
                                <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="LinkedIn" /></a>
                                <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="GitHub" /></a>
                                <a href="https://www.instagram.com/"><img src={navIcon3} alt="Instagram" /></a>
                            </div>
        </div>

        {/* Map */}
        <div className="footer-col map-col">
          <h3>Our Office</h3>
           <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0494845386756!2d78.36554827616972!3d17.457345483441824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf4719cb35%3A0x3f4c251e08394674!2sSuraksha%20Signature%20Apartments%2C%20Surakshaa%20Signature%2C%20Laxmi%20Cyber%20City%2C%20Whitefields%2C%20Kothaguda%2C%20Kondapur%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1730217388147!5m2!1sen!2sin"} 
             allowfullscreen=""
             title="Google Maps Location"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"   
              className='map-of-westeros'></iframe>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sumanshu Borkar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;