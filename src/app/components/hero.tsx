"use client"
import '../styles/global.css';
import '../styles/about.css';
import Image from 'next/image';
import NavBar from './navbar';
import Link from 'next/link';
import dynamic from 'next/dynamic';

export default function Hero() {
  const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
    <main className="home-cont">
      <section className="header-mob">
        <NavBar />
        <Link href="/">
          <Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
        </Link>
      </section>

      <section className="hero">
          <NavBar />
          <Link href="/">
            <Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
          </Link>

        <div className="hero-content">
          <h1>Welcome to RS arena</h1>
          <p>Luxury and wellness in every moment</p>
        </div>

        <div className="scroll-indicator">
          {/* <span>↓ Scroll</span> */}
          <button type="button" className="book-now">Book Now</button>
        </div>
      </section>

      <section className="bio">
        <p>
          With a prime location in the heart of Lagos Mainland, RS_Arena offers the perfect escape for busy professionals and residents alike.
          Whether you&apos;re in need of a quick manicure, a relaxing pedicure, or a refreshing facial, our serene space provides a calm,
          rejuvenating experience amidst the city&apos;s energy. Our wide range of beauty and wellness services, including facials, body
          treatments, and nail care, are delivered with personalized attention by our team of trained and certified professionals. Step into
          RS_Arena and indulge in the care, comfort, and luxury you deserve, right here on the mainland.
        </p>
        <button type="button" className="book-now bio-button">Book Now</button>
      </section>

      <section className="img-links">
        <div className="img-link-sub1">
          <Link href="/services/nail-art">
            <h1 className="nail-img pic-word-link">
              Nail Art
              <br />
              <span>WE PROVIDE A VARIETY OF NAIL ART</span>
            </h1>
          </Link>
          <Link href="/">
            <h1 className="location-img pic-word-link">
              Location
              <br />
              <span>FIND OUR LOCATION WITH EASE</span>
            </h1>
          </Link>
        </div>

        <div className="img-link-sub2">
          <Link href="/pages/contact">
            <h1 className="contact-img pic-word-link">
              Contact Us
              <br />
              <span>WE&apos;D LOVE TO HEAR FROM YOU</span>
            </h1>
          </Link>
          <Link href="/services/spa-packages">
            <h1 className="services-img pic-word-link">
              Services
              <br />
              <span>WE PROVIDE VARIOUS SERVICES FROM MANICURE, PEDICURE TO ALL BEAUTY SERVICES</span>
            </h1>
          </Link>
        </div>
      </section>

      <section className="about-footer foot">
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
  );
}
