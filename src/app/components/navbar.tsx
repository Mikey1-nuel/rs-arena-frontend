'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import '../styles/global.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, []);

const [menuOpen, setMenuOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const [wasInServices, setWasInServices] = useState(false);

// Open menu (and restore last state if needed)
const handleMenuOpen = () => {
  setMenuOpen(true);
  if (wasInServices) {
    setServicesOpen(true);
  }
};

// Called when clicking the “X” (main close)
const handleClose = () => {
  if (servicesOpen) {
    setWasInServices(true);
  } else {
    setWasInServices(false);
  }
  setServicesOpen(false);
  setMenuOpen(false);
};

// Called when clicking “Go Back” button in services submenu
const handleGoBack = () => {
  setServicesOpen(false);
  setWasInServices(false); // user exited services manually
};

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar hidden md:flex">
        <Link href="/pages/about" className="about">ABOUT US</Link>
        <div className="dropdown spa" ref={dropdownRef}>
          <span onClick={toggleDropdown} className="dropdown-toggle about">SERVICES</span>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <Link href="/services/spa-packages">SPA PACKAGES</Link>
            <Link href="/services/nail-art">NAIL ART</Link>
            <Link href="/services/man-ped">MANICURE & PEDICURE</Link>
            <Link href="/services/facial">FACIALS</Link>
            <Link href="/services/waxing">WAXING</Link>
            <Link href="/services/body-mas">BODY MASSAGE</Link>
            <Link href="/services/hairstyles">HAIRSTYLES</Link>
            <Link href="/services/eyelash">EYELASH EXTENSIONS</Link>
          </div>
        </div>
        <Link href="/pages/policy" className="about">POLICY</Link>
        <Link href="/pages/contact" className="about">CONTACT US</Link>
      </div>

      <div className="md:hidden">
      {/* Hamburger Button */}
      {!menuOpen && (
        <button
          className="fixed top-4 right-4 z-50 text-white bg-black p-2 rounded-md ha hamburger"
          onClick={handleMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 hamburg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
            />
          </svg>
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={`fixed inset-0 z-40 bg-black text-white p-8 transition-transform duration-500 ease-in-out hamburger-cont ${menuOpen ? 'active' : ''}`}>
          <button className="absolute top-4 right-4 close-hamburger" onClick={handleClose}>
            <X className="w-8 h-8 close-hamb" />
          </button>

          {!servicesOpen ? (
            <nav className="flex flex-col gap-6 text-2xl mt-16 mob-link-cont">
              <Link href="/pages/about" onClick={handleLinkClick}>
                ABOUT US
              </Link>
              <button
                className="flex items-center justify-between"
                onClick={() => setServicesOpen(true)}
              >
                <span>SERVICES</span>
                <div className='arrow-right-open'>
                  <ChevronRight className="w-6 h-6 ml-1 arrow-right" />
                  <ChevronRight className="w-6 h-6 ml-1 arrow-right" />
                </div>
              </button>
              <Link href="/pages/policy" onClick={handleLinkClick}>
                POLICY
              </Link>
              <Link href="/pages/contact" onClick={handleLinkClick}>
                CONTACT US
              </Link>
            </nav>
          ) : (
            <div className="mt-16 services-link-cont">
              <button className="absolute top-4 right-4" onClick={handleGoBack}>
                <div className='arrow-left-close'>
                  <ChevronLeft className="w-6 h-6 ml-1 arrow-left" />
                  <ChevronLeft className="w-6 h-6 ml-1 arrow-left" />
                </div>
                <span>Back</span>
              </button>
              <nav className="flex flex-col gap-6 text-2xl services-link-cont2">
                <Link href="/services/spa-packages" onClick={handleLinkClick}>
                  SPA PACKAGES
                </Link>
                <Link href="/services/nail-art" onClick={handleLinkClick}>
                  NAIL ART
                </Link>
                <Link href="/services/man-ped" onClick={handleLinkClick}>
                  MANICURE & PEDICURE
                </Link>
                <Link href="/services/facial" onClick={handleLinkClick}>
                  FACIALS
                </Link>
                <Link href="/services/waxing" onClick={handleLinkClick}>
                  WAXING
                </Link>
                <Link href="/services/body-mas" onClick={handleLinkClick}>
                  BODY MASSAGE
                </Link>
                <Link href="/services/hairstyles" onClick={handleLinkClick}>
                  HAIRSTYLES
                </Link>
                <Link href="/services/eyelash" onClick={handleLinkClick}>
                  EYELASH EXTENSIONS
                </Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default NavBar;