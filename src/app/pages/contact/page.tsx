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