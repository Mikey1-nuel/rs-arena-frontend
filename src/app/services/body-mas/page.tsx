"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
// import '../../styles/spa-packages.css';
import '../../styles/global.css';
import '../../styles/body-mas.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const BodyMassage = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
	return (
		<main className="body-mas-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

			<section className="body-mas">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Body Massage
					</h1>
				</div>
			</section>

			<section className="body-mas-treat">
				<div className="li-of-body-mas mass">
					<h3>Therapeutic Massage</h3>
					<p className="duration"><span>30 Mins: ₦ 12,000</span> | <span>60 Mins: ₦ 22,000</span></p>
					<p>
						Relaxes tense muscle and melts away stress.
					</p>
				</div>

				<div className="li-of-body-mas mass">
					<h3>Aromatherapy Massage</h3>
					<p className="duration"><span>30 Mins: ₦ 12,000</span> | <span>60 Mins: ₦ 22,000</span></p>
					<p>
						Full body massage incorporating natural herb and flower essences. Helps restore the balance of mind and body. Customized choice of
						essential oils
					</p>
				</div>

				<div className="li-of-body-mas mass">
					<h3>Deep Tissue Massage</h3>
					<p className="duration"><span>30 Mins: ₦ 13,000</span> | <span>60 Mins: ₦ 24,000</span></p>
					<p>
						Concentrates on specific muscle groups used in particular sport activities or workouts. Helps remove excess lactic acid from body
						system, resulting in a faster recovery.
					</p>
				</div>

				<div className="li-of-body-mas mass">
					<h3>Back Rub</h3>
					<p className="duration"><span>10 Mins: ₦ 3,400</span> | <span>20 Mins: ₦ 6,800</span> | <span>30 Mins: ₦ 10,000</span></p>
					<p>
						Designed to relax the muscle and improve circulation and movement within the body.
					</p>
				</div>

				<div className="li-of-body-mas mass">
					<h3>Foot Massage</h3>
					<p className="duration"><span>10 Mins: ₦ 3,400</span> | <span>20 Mins: ₦ 6,800</span> | <span>30 Mins: ₦ 10,000</span></p>
					<p>
						Foot Reflexology designed to deeply relax the muscles and improve circulation and movement within the body. 
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

export default BodyMassage