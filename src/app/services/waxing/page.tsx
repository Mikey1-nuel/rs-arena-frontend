"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/spa-packages.css';
import '../../styles/global.css';
import '../../styles/waxing.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const Waxing = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
	<main className="waxing-cont">
		<section className="header-mob">
			<NavBar />
			<Link href="/">
			<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
			</Link>
		</section>

		<section className="waxing">
			<NavBar />
			<Link href="/">
				<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
			</Link>

			<div className="hero-content spa">
				<h1>
					Waxing
				</h1>
			</div>
		</section>

		<section className="spa-treat">
			<p>Eye Brow  <span className="nairaa">₦ 3,600</span></p>

			<p>Eye Brow Shaping <span className="nairaa">₦ 4,400</span></p>

			<p>Eye Brow Tweezing <span className="nairaa">₦ 4,400</span></p>

			<p>Lip <span className="nairaa">₦ 3,000</span></p>

			<p>Chin <span className="nairaa">₦ 3,600</span></p>

			<p>Cheek <span className="nairaa">₦ 4,000</span></p>

			<p>Under Arm <span className="nairaa">₦ 5,000</span></p>

			<p>Face Line <span className="nairaa">₦ 6,000</span></p>

			<p>Full Arm <span className="nairaa">₦ 10,000</span></p>

			<p>Half Arm (upper / lower) <span className="nairaa">₦ 12,000</span></p>

			<p>Full Leg <span className="nairaa">₦ 13,000</span></p>

			<p>Half Leg ( upper/lower) <span className="nairaa">₦ 16,000</span></p>

			<p>Toes <span className="nairaa">₦ 3,000</span></p>

			<p>Chest <span className="nairaa">₦ 8,000</span></p>

			<p>Back <span className="nairaa">₦ 11,000</span></p>

			<p>Shoulder <span className="nairaa">₦ 6,000</span></p>
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

export default Waxing