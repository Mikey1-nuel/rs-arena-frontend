"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/spa-packages.css';
import '../../styles/global.css';
import '../../styles/hairstyles.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NailArt = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
  const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
  const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
		<main className="hairstyle-cont">
			<section className="header-mob">
				<NavBar />
				<Link href="/">
				<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
				</Link>
			</section>

			<section className="hairstyle">
				<NavBar />
				<Link href="/">
					<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
				</Link>

				<div className="hero-content spa">
					<h1>
						Hairstyles
					</h1>
				</div>
			</section>

			<section className="hairstyle-grid">
				<div className="hairstyle-desc">
					<h3>Bob Faux Locs</h3>
					<div className="hair-img-hold" />
					<span className="naira space">₦ 20,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Cornrows</h3>
					<div className="hair-img-hold2" />
					<span className="naira space">₦ 15,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Criss-cross Ghana weaving</h3>
					<div className="hair-img-hold3" />
					<span className="naira space">₦ 18,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Goddess Braids</h3>
					<div className="hair-img-hold4" />
					<span className="naira space">₦ 20,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Knotless Braids With Curly Ends</h3>
					<div className="hair-img-hold5" />
					<span className="naira space">₦ 20,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Ponytail With Bangs</h3>
					<div className="hair-img-hold6" />
					<span className="naira space">₦ 26,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Stitch Braid</h3>
					<div className="hair-img-hold7" />
					<span className="naira space">₦ 15,600</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Ziz-Zag Stitch Braid</h3>
					<div className="hair-img-hold8" />
					<span className="naira space">₦ 15,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Waves Cut With Etched Sides</h3>
					<div className="hair-img-hold9" />
					<span className="naira space">₦ 8,000</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Braids For Kids</h3>
					<div className="hair-img-hold10" />
					<span className="naira space">₦ 10,800</span>
				</div>

				<div className="hairstyle-desc">
					<h3>Mens Haircut</h3>
					<div className="hair-img-hold11" />
					<span className="naira space">₦ 8,000</span>
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