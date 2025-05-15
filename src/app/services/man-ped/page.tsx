"use client"
import React from 'react'
import NavBar from '@/app/components/navbar';
import Image from 'next/image';
import '../../styles/global.css';
import '../../styles/med-ped.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const ManicurePedicure = () => {
	const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
	const FaTiktok = dynamic(() => import('react-icons/fa').then(mod => mod.FaTiktok), { ssr: false });
	const FaCopyright = dynamic(() => import('react-icons/fa').then(mod => mod.FaCopyright), { ssr: false });
  return (
	<main className="med-ped-cont">
		<section className="header-mob">
			<NavBar />
			<Link href="/">
			<Image src="/images/rs_arena logo 3.png" className='logo' alt="rs_arena logo" width={200} height={65} />
			</Link>
		</section>

		<section className="med-ped-art">
			<NavBar />
			<Link href="/">
				<Image src="/images/rs_arena logo 2.png" className='logo logo-hide' alt="rs_arena logo" width={200} height={65} />
			</Link>

			<div className="hero-content spa">
				<h1>
					Manicure &
					<br />
					Pedicure
				</h1>
			</div>
		</section>

		<section className="man-ped-pack">
			<h3 className="just-me">MANICURES</h3>
			<div className="man-ped-pack2">
				<div className="man-ped-list">
					<h3>Regular Manicure</h3>
						<p>Mani Polish Change <span className="nairaa">₦ 3,400</span></p>
						<p>Mani On The Go Regular <span className="nairaa">₦ 5,200</span></p>
						<p>Full Mani Regular <span className="nairaa">₦ 6,000</span></p>
						<p>Paraffin Manicure <span className="nairaa">₦ 7,800</span></p>
						<p>French Manicure <span className="nairaa">₦ 6,200</span></p>
				</div>

				<div className="man-ped-list">
					<h3>Gel Manicure <span>(45 Mins)</span></h3>
						<p>Gel Application <span className="nairaa">₦ 7,000</span></p>
						<p>Mani On The Go Gel <span className="nairaa">₦ 9,000</span></p>
						<p>Full Mani Gel <span className="nairaa">₦ 9,600</span></p>
				</div>

				<div className="man-ped-list">
					<h3 className="space-bet">
						<span>
							Express Manicure <span>(1 Hour)</span>
						</span>
						<span className="nairaaa">₦ 5,800</span>
					</h3>

						<p>Soak In Water</p>
						<p>Shaping</p>
						<p>Cleaning</p>
						<p>Cuticle Trimming</p>
						<p>Scrub</p>
						<p>Light Massage With Lotion</p>
						<p>Normal Nail Polish</p>
				</div>

				<div className="man-ped-list">
					<h3 className="space-bet">
						<span>
							Classic Manicure <span className="duration">(1 Hour 30 Mins)</span>
						</span>
  						<span className="nairaaa">₦ 8,000</span>
					</h3>

						<p>Soak In Water</p>
						<p>Shaping</p>
						<p>Cleaning</p>
						<p>Cuticle Trimming</p>
						<p>Scrub</p>
						<p>5 Mins Massage With Lotion</p>
						<p>Normal Nail Polish</p>
				</div>

				<div className="man-ped-list">
					<h3>Acrylic Extensions</h3>
						<p>Full Set Without Color <span className="nairaa">₦ 10,800</span></p>
						<p>Full Set With Gel Color <span className="nairaa">₦ 12,800</span></p>
						<p>Full Set With French Tips <span className="nairaa">₦ 14,000</span></p>
						<p>Refill With Gel Color <span className="nairaa">₦ 8,000</span></p>
						<p>Acrylic On One Nail <span className="nairaa">₦ 1,200</span></p>
				</div>

				<div className="man-ped-list">
				<h3>Gel Extensions</h3>
						<p>Full Set Without Color <span className="nairaa">₦ 12,800</span></p>
						<p>Full Set With Gel Color <span className="nairaa">₦ 15,000</span></p>
						<p>Full Set With French <span className="nairaa">₦ 16,200</span></p>
						<p>Refill With Gel Color <span className="nairaa">₦ 10,400</span></p>
						<p>Gel On One Nail <span className="nairaa">₦ 1,400</span></p>
				</div>
			</div>


			<h3 className="just-me">PEDICURES</h3>
			<div className="man-ped-pack2">
				<div className="man-ped-list">
					<h3>Regular Pedicure</h3>
						<p>Pedi Polish Change <span className="nairaa">₦ 4,000</span></p>
						<p>Pedi On The Go Regular <span className="nairaa">₦ 7,000</span></p>
						<p>Full Pedi Regular <span className="nairaa">₦ 9,800</span></p>
						<p>Paraffin Pedicure <span className="nairaa">₦ 12,000</span></p>
						<p>French Pedicure <span className="nairaa">₦ 9,800</span></p>
				</div>

				<div className="man-ped-list">
					<h3>Gel Pedicure <span>(45 Mins)</span></h3>
						<p>Gel Application <span className="nairaa">₦ 7,000</span></p>
						<p>Pedi On The Go Gel <span className="nairaa">₦ 10,000</span></p>
						<p>Full Pedi Gel <span className="nairaa">₦ 12,000</span></p>
				</div>

				<div className="man-ped-list">
					<h3 className="space-bet">
						<span>
							Express Pedicure <span>(40 Mins)</span>
						</span>
						<span className="nairaaa">₦ 8,000</span>
					</h3>

						<p>Microbial Hot Towel</p>
						<p>Nails Cut & Shaped</p>
						<p>Detailed Cuticle Work With E/file - Cuticle Remover</p>
						<p>Foot Scrub</p>
						<p>Light Massage With Lotion</p>
						<p>Normal Nail Polish</p>
				</div>

				<div className="man-ped-list">
					<h3 className="space-bet">
						<span>
							Classic Pedicure <span>(1 Hour 30 Mins)</span>
						</span>
						<span className="nairaaa">₦ 10,000</span>
					</h3>
					
					<p>Microbial Hot Towel</p>
						<p>Nails Cut & Shaped</p>
						<p>Detailed Cuticle Work With E/file - Cuticle Remover</p>
						<p>Foot Scrub</p>
						<p>5 Mins Massage With Lotion</p>
						<p>Normal Nail Polish</p>
				</div>
			</div>


				<h3 className="just-me">PACKAGES</h3>
			<div className="man-ped-pack2">
				<div className="man-ped-list">
					<h3>Special Package</h3>
						<p>Mani & Pedi On The Go Regular <span className="nairaa">₦ 11,600</span></p>
						<p>Mani & Pedi On The Go Gel <span className="nairaa">₦ 18,000</span></p>
						<p>Full Mani & Pedi On The Go Regular <span className="nairaa">₦ 15,000</span></p>
						<p>Full Mani & Pedi On The Go Gel <span className="nairaa">₦ 21,000</span></p>
				</div>

				<div className="man-ped-list">
					<h3>Children&apos;s Package <span>(Under 6 Years Old)</span></h3>
						<p>Manicure <span className="nairaa">₦ 3,000</span></p>
						<p>Pedicure <span className="nairaa">₦ 5,600</span></p>
						<p>Change Polish Mani/Pedi <span className="nairaa">₦ 5,600 for both</span></p>
				</div>
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

export default ManicurePedicure