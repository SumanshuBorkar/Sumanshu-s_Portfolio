import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'; // Import Offcanvas
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/img/LOGO.png"

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    // State to control the visibility of the mobile menu
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            
            setActiveLink(sectionId);
            setExpanded(false); // Close menu after clicking a link
        }
    };

    return (
        <Navbar 
            expand="lg" 
            className={scrolled ? "scrolled" : ""} 
            expanded={expanded} // Bind state to Navbar
        >
            <Container className='nav-container'>
                
                {/* Add your Logo/Brand here if you have one */}
                <Navbar.Brand href="#home" style={{ visibility: !expanded ? 'visible' : 'hidden' }}>
                    <img className='toplogo' src={logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle 
                    aria-controls="offcanvasNavbar" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    className={expanded ? "open" : ""} // Apply your custom 'open' class for animation
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                {/* The "Modal" (Offcanvas) that pops out from the right */}
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    restoreFocus={false}
                    show={expanded}
                    onHide={() => setExpanded(false)}
                    className="Responsive-modal"
                >
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    
                    <Offcanvas.Body>
                        <Nav className="justify-content-start align-items-center flex-grow-1 pe-3">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection('project')}>Projects</Nav.Link>
                            <Nav.Link href="#contacts" className={activeLink === "contacts" ? "active navbar-link" : "navbar-link"} onClick={() => scrollToSection('connect')}>Connect</Nav.Link>
                        </Nav>
                        
                        {/* Removed d-none so this shows in the mobile menu */}
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="LinkedIn" /></a>
                                <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="GitHub" /></a>
                                <a href="https://www.instagram.com/"><img src={navIcon3} alt="Instagram" /></a>
                            </div>
                            <button className="vvd" onClick={() => scrollToSection('connect')}>
                                <span>Let's connect</span>
                            </button>
                        </span>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;