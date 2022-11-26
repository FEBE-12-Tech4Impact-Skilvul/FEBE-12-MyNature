import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer id="footer" className="footer">
                <Container className='container'>
                    <Row className='row-gy-4'>
                        <Col className='col-lg-5 col-md-12 footer-info'>
                            <Link to={"/"} className='logo d-flex align-items-center'>
                               <img id='img-footer' src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669397416/MyNature/LogoWhite_usdxrb.svg" alt="" srcSet="" />
                            </Link>
                            <p>
                                Peduli dengan lingkungan demi masa depan yang lebih hijau
                            </p>

                            <div className="social-links d-flex mt-4">
                                <a href="https://twitter.com/GreenpeaceID" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.instagram.com/greenpeaceid" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/greenpeaceid" className="linkedin" ><i className="bi bi-linkedin"></i></a>
                            </div>
                        </Col>

                        <Col className='col-lg-2 col-6 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/kegiatan">Article</a></li>
                                <li><a href="/about">About us</a></li>
                            </ul>
                        </Col>

                        <Col className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                            <h4>Contact Us</h4>
                            <p>
                                <strong>Phone: </strong>+62 21 3148521<br />
                                <strong>Email: </strong>info.id@greenpeace.org<br />
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className='container mt-4'>
                    <div className="copyright">
                        &copy; Copyright <strong><span>My Nature</span></strong>
                    </div>
                    <div className="credits">
                        By <a href="https://github.com/Tech-4-Impact-FE-12">FE-12</a>
                    </div>
                </Container>
            </footer>
    </>
  )
}

export default Footer