"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/policy.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Policy = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
	return (
		<main className="policy-container">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

			<section className="policy">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content">
					<h1>
						Our Policy
					</h1>
				</div>

			</section>

			<section className="policy-content">
				<h3>Polices And Reminder</h3>
				<ul>
					<li>
						<span>1.</span>
						A 50% non-refundable deposit is required to confirm your appointment.
					</li>

					<li>
						<span>2.</span>
						Please inform us at least 24 hours in advance if you need to make any changes to your booking.
					</li>

					<li>
						<span>3.</span>
						While walk-ins are welcome, reservations are the only way to guarantee your slot.
					</li>

					<li>
						<span>4.</span>
						Missing your appointment without prior notice will result in cancellation and forfeiture of your deposit.
					</li>

					<li>
						<span>5.</span>
						Late arrivals will reduce your appointment time. If you are more than 30 mins late, your session will be rescheduled.
					</li>

					<li>
						<span>6.</span>
						No refunds. Rescheduling is allowed.
					</li>
				</ul>
				<h3>Thank you for choosing us! We appreciate your cooperation ❤️</h3>
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

export default Policy