"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/spa-packages.css';
import '../../styles/global.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SpaPackages = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
		<main className="spa-pack-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>
			
			<section className="services-hero red">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Spa Packages
					</h1>
					<p>Organic Products Used On All Our Spa Services</p>
				</div>

			</section>

			<section className="spa-treat">
				<div className="li-of-spa-treat">
					<h3>Spa Brief <span className="naira">₦ 36,600</span></h3>
					<ul>
						<li>Therapeutic Massage <span>(30 mins)</span></li>
						<li>Express Facial</li>
						<li>Manicure & Pedicure</li>
					</ul>
				</div>

				<div className="li-of-spa-treat">
					<h3>Mini Beauty <span className="naira">₦ 52,000</span></h3>
					<ul>
						<li>Therapeutic Massage <span>(60 mins)</span></li>
						<li>Microdermabrasion & Special Mask (Four Layers)</li>
						<li>Manicure & Pedicure</li>
					</ul>
				</div>

				<div className="li-of-spa-treat">
					<h3>European Beauty <span className="naira">₦ 56,000</span></h3>
					<ul>
						<li>Deep Tissue Massage <span>(30 mins)</span></li>
						<li>Express Facial</li>
						<li>Manicure & Pedicure</li>
					</ul>
				</div>

				<div className="li-of-spa-treat">
					<h3>Total Rejuvenation <span className="naira">₦ 63,000</span></h3>
					<ul>
						<li>Deep Tissue Massage <span>(30 mins)</span></li>
						<li>Four Layer Facial</li>
						<li>Manicure & Pedicure</li>
					</ul>
				</div>

				<div className="li-of-spa-treat">
					<h3>Renaissance <span className="naira">₦ 81,800</span></h3>
					<ul>
						<li>Therapeutic Massage <span>(60 mins)</span></li>
						<li>Microdermabrasion & Special Mask (Four Layers)</li>
						<li>Manicure & Pedicure</li>
					</ul>
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
  )
}

export default SpaPackages