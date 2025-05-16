"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/global.css';
import '../../styles/about.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const About = () => {
  const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
    <main className="about-container">
      <section className="header-mob">
        <NavBar />
        <Link href="/">
          <Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
        </Link>
      </section>

      <section className="about-hero">
        <NavBar />
        <Link href="/">
        <Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
        </Link>

        <div className="hero-content">
          <h1>
            Your All In-One<br />
            Beauty Hub<br />
            In Lagos Mainland
          </h1>
        </div>

      </section>

      <section className="about-us">
        <div className="our-story">
          <p>
            <Image src="/images/image-asset.jpeg" className='about-img' alt="our story img" width={450} height={65} />
            RS Arena is your all-in-one beauty hub, proudly located in the heart of Lagos Mainland. As a trusted salon and spa destination, we
            arecommitted to providing professional, affordable, and top-tier beauty care in a warm and welcoming environment.
            <br />
            <span className="para-spacing" />
            Since our establishment, RS Arena has catered to hundreds of satisfied clients, from busy professionals to students and families
            offering everything from precise haircuts and creative styling to soothing facials and luxurious body treatments. Our dedicated
            team of stylists and therapists is passionate about helping you look and feel your best, using quality products and techniques
            tailored to your unique needs.

            <br />
            <span className="para-spacing" />
            At RS Arena, every appointment is an experience. We believe beauty is not just a service, it’s a feeling, a confidence boost, and
            a way to express yourself. Whether you’re here for a quick touch-up or a full pampering session, we’re committed to delivering
            outstanding care every time.

            <br />
            <span className="para-spacing" />
            Let RS Arena be your go-to beauty escape in Lagos—where style meets serenity.
          </p>
        </div>

        <div className="set-us-apart">
          <h2>What Sets Us Apart<br /><span className="para-spacing" />From The Rest</h2>

          <div className="set-us-apart-writeup tablet">
            <p>
              <Image src="/images/image-asset (1).jpeg" className='about-img' alt="set us apart img" width={450} height={65} />
              The evolution of saloon and nail care started with As_Arena and we continue to be the leader in the saloon and nail spa
              industry.
              Weekly employee training and a sharp eye on quality control set us apart, and ensure that As_Arena is recognized for the most
              consistent saloon, nail and spa services in Lagos.
              <br />
              <span className="para-spacing" />
              With convenient location in Lagos, you will find all the desired spa services and more!
              <br />
              <span className="para-spacing" />

                <span className="benefits">- We offer a few spa services, and we&apos;re still growing!</span>
                <span className="benefits">- We are able to customize services for your spa needs.</span>
                <span className="benefits">- Commitment to clean and sanitary services.</span>
                <span className="benefits">- Our technicians go through rigorous training to ensure quality & excellence.</span>
                <span className="benefits">- Recognized for our quality, convenience and the As_Arena experience.</span>
  
              <br />
              <span className="para-spacing2" />

              <b>Hand Disinfection</b>
              <br />
              <span className="para-spacing2" />
              Before beginning each service, all As_Arena professionals are required to disinfect their hands with liquid sanitizer. This
              process prevents the spread of common germs to give you a peace of mind.
              <br />
              <span className="para-spacing" />
              
              <b>Sanitation and Sterilization</b>
              <br />
              <span className="para-spacing2" />
              As_Arena has a staff that specializes in sanitizing and sterilizing the facility and equipment. After each client, our staff
              will clean the pedicure chairs, tabletops, and all other facility equipment with hospital-grade sanitizers to ensure your
              comfort and safety.
            </p>
          </div>

          <div className="set-us-apart-writeup desktop">
            <Image
              src="/images/image-asset (1).jpeg"
              className="about-img-left"
              alt="set us apart img"
              width={350}
              height={250}
            />

            <div className="set-us-apart-p-cont">
              <p>
                The evolution of salon and nail care started with As_Arena, and we continue to be the leader in the salon and nail spa industry.
                Weekly employee training and a sharp eye on quality control set us apart and ensure that As_Arena is recognized for the most consistent
                salon, nail, and spa services in Lagos.
              </p>

              <p>
                With a convenient location in Lagos, you will find all the desired spa services and more!
              </p>

              <ul className="benefits">
                <li>- We offer a variety of spa services, and we&apos;re still growing!</li>
                <li>- Customizable services tailored to your spa needs.</li>
                <li>- Strict commitment to clean and sanitary procedures.</li>
                <li>- Technicians go through rigorous training to ensure quality & excellence.</li>
                <li>- Known for quality, convenience, and the As_Arena experience.</li>
              </ul>

              <p>
                <strong>Hand Disinfection:</strong><br />
                Before beginning each service, all As_Arena professionals disinfect their hands with liquid sanitizer. This process helps prevent the
                spread of germs, giving you peace of mind.
              </p>

              <p>
                <strong>Sanitation and Sterilization:</strong><br />
                Our staff specializes in sanitizing and sterilizing all equipment and spaces. After each client, we clean pedicure chairs, tabletops,
                and tools using hospital-grade sanitizers to ensure your comfort and safety.
              </p>
            </div>
          </div>
        </div>
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

export default About