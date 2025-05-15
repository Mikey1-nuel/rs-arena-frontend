"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/eyelash.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const Eyelash = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
		<main className="eyelash-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

			<section className="eyelash">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Eyelash
						<br />
						Extensions
					</h1>
				</div>
			</section>

			<section className="eyelash-treat">
					<div className="li-of-eyelash-treat">
						<h3>Individual Extensions</h3>
						<p>Natural New Set (90 Lashes Per Eye) <span className="naira test2">₦ 22,000</span></p>
										<span className="extend">2 Week Touch-up (8 days ~ 14 days)  <span className="naira">₦ 14,000</span></span>
										<span className="extend">3 Week Touch-up (15 days ~ 21 days) <span className="naira">₦ 18,000</span></span>
						<p>Glamour New Set (160 Lashes Per Eye) <span className="naira test2">₦ 26,000</span></p>
										<span className="extend">2 Week Touch-up (8 days ~ 14 days)  <span className="naira">₦ 16,000</span></span>
										<span className="extend">3 Week Touch-up (15 days ~ 21 days) <span className="naira">₦ 20,000</span></span>
					</div>

					<div className="li-of-eyelash-treat">
						<h3>Volume Extensions</h3>
						<p>3D New Set  (300 Lashes Per Eye)    <span className="naira test2">₦ 30,000</span></p>
										<span className="extend">2 Week Touch-up (8 days ~ 14 days)   <span className="naira">₦ 18,000</span></span>
										<span className="extend">3 Week Touch-up (15 days ~ 21 days)  <span className="naira">₦ 20,000</span></span>
						<p>5D New Set (450 Lashes Per Eye)    <span className="naira test2">₦ 38,000</span></p>
										<span className="extend">2 Week Touch-up (8 days ~ 14 days)     <span className="naira">₦ 22,000</span></span>
										<span className="extend">3 Week Touch-up (15 days ~ 21 days)   <span className="naira">₦ 28,000</span></span>
					</div>

					<div className="li-of-eyelash-treat">
						<h3>Eyelash and Eyebrow Tinting</h3>
						<p className="exclude">
							Eyelash and Eyebrow tinting enhances the appearance of your eyes of eyebrows and is particularly beneficial for people who have
							lighter lashes and eyebrows and want darker natural eyelashes and brows without the aid of applying mascara or eyebrow pencils
							daily
						</p>
						<p>Eyelash Tinting <span className="naira test2">₦ 7,000</span></p>
						<p>Eyebrow Tinting <span className="naira test2">₦ 6,000</span></p>
					</div>

					<div className="li-of-eyelash-treat test">
						<h3>Other Service </h3>
						<p>Bottom Eyelashes  <span className="naira">₦ 10,000</span></p>
						<p>Removal  <span className="naira">₦ 6,000</span></p>
						<p>Removal (other salon) <span className="naira">₦ 10,000</span></p>
						<p>Color Add  <span className="naira">₦ 6,000</span></p>
						<p>Mink Upgrade <span className="naira">₦ 6,000</span></p>
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

export default Eyelash