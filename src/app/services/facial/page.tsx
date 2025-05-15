"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/global.css';
import '../../styles/facial.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const Facial = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
		<main className="facial-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>
			
			<section className="facial">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Facial
						<br />
						Treatments
					</h1>
				</div>
			</section>

			<section className="facial-treat">
					<div className="li-of-facial-treat">
						<h3>Express Facial <span className="naira">₦ 12,000</span></h3>
						<p>Ideal  for all skin types.  Great for those on a busy schedule. Customized to meet specific requirements with steaming,
								cleansing, facial massage, and rejuvenating masks.
						</p>
					</div>

					<div className="li-of-facial-treat">
						<h3>Four-Layer Facial <span className="naira">₦ 28,000</span></h3>
						<p>For all skin types. An intensive hydrating facial. Incorporates a thermal mask of gentle, heating action that contours and
							revitalizes the skin through the deep penetration of the active ingredients. 
						</p>
					</div>

					<div className="li-of-facial-treat">
						<h3>Rejuvenating European Facial <span className="naira">₦ 22,000</span></h3>
						<p>Ideal  for all skin types.  This complete facial treatment will leave your delicate skin looking radiant and fresh.
							Specifically customized to remove dead skin cells and cleanse the pores for smooth, silky skin. Enhanced by the included
							rejuvenating facial mask.
						</p>
					</div>

					<div className="li-of-facial-treat">
						<h3>Hydro Lifting Facial <span className="naira">₦ 32,000</span></h3>
						<p>Ideal  for all skin types.  Designed to improve appearance of lines and wrinkles. Moisturizes and improves the skin’s
							elasticity for more radiant skin. Perfect before a special event, wedding or public appearances.
						</p>
					</div>

					<div className="li-of-facial-treat">
						<h3>Deep Cleansing Back Treatment <span className="naira">₦ 24,000</span></h3>
						<p>Eliminates impurities on the back and soothes the delicate out-of-reach area. This treatment includes cleansing, exfoliating,
							extractions (if needed), soothing massage and a hydro-nourishing mask.
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

export default Facial