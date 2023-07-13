"use client"

import { useState, useEffect } from "react"
import Logo from "./Logo"
import NavLinksHorizontal from "./NavLinks"
import HamburgerIcon from "./icons/HamburgerIcon"


const Header = () => {

    const headerClassNames = {
        navLinksHidden: "sticky top-0 w-screen z-40 bg-opacity-60 bg-white backdrop-filter backdrop-blur-lg transition box-shadow ease",
        navLinksVisible: "fixed top-0 w-screen h-screen z-40 bg-opacity-60 bg-white backdrop-filter backdrop-blur-lg transition box-shadow ease"
    }

    const [ toggleHam, setToggleHam ] = useState(false)
    const [ headerClass, setHeaderClass ] = useState(headerClassNames.navLinksHidden)
    const active = toggleHam ? 'active' : ''

    const handleHamburgerIconClick = () => {
        setToggleHam(!toggleHam)
        if (active === 'active') {
            setHeaderClass(headerClassNames.navLinksHidden)
        } else {
            setHeaderClass(headerClassNames.navLinksVisible)
        }
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? `drop-shadow-xl ${headerClass}` : headerClass}>
            <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto ">
                <Logo txtSize="text-2xl" bold={true} />
                <span className="hidden sm:flex">
                    <NavLinksHorizontal />
                </span>
                <span 
                    className="flex sm:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0"
                    onClick={handleHamburgerIconClick}
                >
                    <HamburgerIcon active={active} />
                </span>
            </div>
        </header>
    )
}

export default Header
