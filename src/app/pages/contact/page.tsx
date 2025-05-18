"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/contact.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ContactForm from '@/app/components/contact-form';

const Contact = () => {
  const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
    <main className="contact-container">
      <section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

      <section className="contact">
        <NavBar />
        <Link href="/">
        <Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
        </Link>

        <div className="hero-content">
          <h1>
            Contact Us
          </h1>
        </div>

      </section>

      <section className="contact-us">
        <div className="location-section">

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.078364991944!2d3.3537214742360217!3d6.63719019335727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ec633837e3%3A0x6198d33109711b0e!2s9%20Adeyemo%20Akapo%20St%2C%20Omole%20Phase%201%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1747468252227!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Rs_Arena,+9+Adeyemo+Akapo+Street,+Omole+Phase+1"
            target="_blank"
            rel="noopener noreferrer"
            className="get-directions"
          >
            Get Directions
          </a>
        </div>

        <ContactForm />
      </section>
        
      <section className="about-footer">
        <div className="hours">
          <p>HOURS</p>
          <span>Monday - Saturday: 9 AM - 8 PM</span>
          <span>Sunday: 1 PM - 8 PM</span>
        </div>

        <div className="soc-icon-cont">
          <a href="https://www.instagram.com/rs_arena/" target="_blank" >
            <FaInstagram className="soc-icon" />
          </a>
          <a href="https://www.tiktok.com/@saloninlagos" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="soc-icon" />
          </a>
        </div>

        <div className="footer-link">
          <Link href="/pages/contact" className="about">CONTACT US</Link>
          <Link href="/pages/policy" className="about">POLICY</Link>
          <Link href="/services/spa-packages" className="about">SERVICES</Link>
        </div>

        <div className="rights">
          <FaCopyright className="copyright" />
          <p>All Rights Reserved</p>
        </div>
      </section>
    </main>
  )
}

export default Contact