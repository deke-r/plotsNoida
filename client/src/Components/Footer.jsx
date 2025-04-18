import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleCall = () => {
    const whatsappNumber = '9319412015'; 
    const message = `Hi, I'm interested in the property`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <footer className="text-center text-lg-start bg_b text-light">

      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none f_14 fw-semibold d-lg-block">
          <span>Connect with Noida Properties on social media:</span>
        </div>

        <div>
          <Link to="#" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#" className="me-4 text-reset"><i className="fab fa-twitter"></i></Link>
          <Link to="#" className="me-4 text-reset"><i className="fab fa-instagram"></i></Link>
          <Link to="#" className="me-4 text-reset"><i className="fab fa-linkedin"></i></Link>
          <Link onClick={handleCall} className="me-4 text-reset"><i className="fab fa-whatsapp"></i></Link>
        </div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">

            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-home me-3"></i>Noida Properties
              </h6>
              <p className='f_14 fw-semibold'>
                Your trusted partner in residential and commercial plots in Noida. 
                We offer premium properties in Sector 44, 48, 151, and more. 
                Transparent deals, legal compliance, and expert guidance.
              </p>
            </div>

            {/* Services */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Buy Plots</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Real Estate Consulting</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Legal Assistance</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Property Evaluation</Link></p>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">About Us</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Contact</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Terms & Conditions</Link></p>
              <p><Link to="#!" className="text-reset f_14 fw-semibold">Privacy Policy</Link></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className='f_14 fw-semibold'><i className="fas fa-map-marker-alt me-3"></i> J-13, 3rd Floor, J Block, Pocket G, Sector 18, Noida Uttar Pradesh 201301</p>
              <p className='f_14 fw-semibold'><i className="fas fa-envelope me-3"></i> noidap38@gmail.com</p>
              <p className='f_14 fw-semibold' onClick={handleCall}><i className="fas fa-phone me-3"></i> +91 93194 12015</p>
              <p className='f_14 fw-semibold' onClick={handleCall}><i className="fab fa-whatsapp me-3"></i> +91 93194 12015</p>
            </div>

          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center f_14 fw-semibold p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Noida Properties. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
