"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/global.css';
import '../../styles/nail-art.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NailArt = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
		<main className="nail-art-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

			<section className="nail-art">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Nail Art
					</h1>
				</div>
			</section>

			<section className="nail-art-grid">
				<div className="nails-desc">
					<h3>3D Nail Art Design</h3>
					<div className="nail-img-hold" />
					<span className="naira">₦ 10,000</span>
					<p>
						Add texture and dimension with sculpted gems, florals, and artistic details. Bold, eye-catching nails perfect for special
						occasions. Each set is a custom work of art.
					</p>
				</div>

				<div className="nails-desc">
					<h3>Aura Nail<br/> Design</h3>
					<div className="nail-img-hold2" />
					<span className="naira">₦ 10,600</span>
					<p>
						Radiant gradients that mimic a glowing aura. Blends color seamlessly for a dreamy effect. Soft, spiritual, and ultra-trendy.
					</p>
				</div>

				<div className="nails-desc">
					<h3>Chrome Nail Design</h3>
					<div className="nail-img-hold3" />
					<span className="naira">₦ 13,000</span>
					<p>
						High-shine, mirror-like finishes in bold tones. Futuristic, edgy, and instantly attention-grabbing. The ultimate glam look for
						modern nail lovers.
					</p>
				</div>

				<div className="nails-desc">
					<h3>French Minimalist Nail Design</h3>
					<div className="nail-img-hold4" />
					<span className="naira">₦ 12,000</span>
					<p>
						A clean, timeless look with a modern twist. Think soft tones, sharp tips, and subtle elegance. Perfect for everyday
						sophistication.
					</p>
				</div>

				<div className="nails-desc">
					<h3>Square Nail Design</h3>
					<div className="nail-img-hold5" />
					<span className="naira">₦ 15,800</span>
					<p>
						Strong edges with a crisp, flat tip. Clean, classic, and flattering on all fingers. Ideal base for minimalist or bold designs.
					</p>
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

export default NailArt