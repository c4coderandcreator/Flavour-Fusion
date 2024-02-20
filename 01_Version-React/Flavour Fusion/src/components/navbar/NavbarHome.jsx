// import { NavLink } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../App';

function NavbarHome() {

    const [navOpen, setNavOpen] = useState(false)
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)

    function handleToggleNavbar() {
        setNavOpen(prev => !prev)
    }
    function handleToggleMode() {
        setDarkTheme(prev => !prev)
    }

    return (
        <>
            {/* ------------------- Navbar container ------------------------ */}
            <div className={`${darkTheme && "bg-lime-900 text-white"}  bg-lime-500 h-16 w-screen flex justify-between items-center sticky top-0 px-4 md:px-10 lg:px-36 xl:px-64`}>
                {/* ---------------- brand-logo ---------------- */}
                <div className="font-bold text-[1.4rem] md:text-3xl cursor-pointer">
                    <NavLink to="/" onClick={() => setNavOpen(false)}>
                        FlavourFusion
                    </NavLink>
                </div>
                {/* ---------------- nav-items ---------------- */}
                <div className="hidden md:flex md:font-semibold md:text-small lg:text-lg">
                    <NavLink to="/" className={`md:mx-2 lg:mx-4 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`}>
                        Home
                    </NavLink>
                    <NavLink to="/home/menu" className={`md:mx-2 lg:mx-4 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`}>
                        Menu
                    </NavLink>
                    <NavLink to="/home/cart" className={`md:mx-2 lg:mx-4 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`}>
                        Cart
                    </NavLink >
                    <AnchorLink href="#contact" className={`md:mx-2 lg:mx-4 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`}>
                        Contact Us
                    </AnchorLink>
                </div>
                {/* ---------------- icons-container ---------------- */}
                <div className="flex justify-center items-center">
                    <div className="cursor-pointer mr-1 md:mr-0" onClick={handleToggleMode}>
                        {darkTheme ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </div>
                    <div className="cursor-pointer ml-1 md:hidden" onClick={handleToggleNavbar}>
                        {navOpen ? <CloseIcon /> : <GridViewIcon />}
                    </div>
                </div>
            </div>
            {/* ---------------- nav-items (in small-sized screen) ---------------- */}
            {navOpen &&
                <div className={`${darkTheme && "bg-lime-900 text-white"} bg-lime-500 flex flex-col justify-center items-center sticky top-16 text-sm font-semibold`}>
                    <NavLink to="/" className={`my-2 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`} onClick={() => setNavOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/home/menu" className={`my-2 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`} onClick={() => setNavOpen(false)}>
                        Menu
                    </NavLink >
                    <NavLink to="/home/cart" className={`my-2 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`} onClick={() => setNavOpen(false)} >
                        Cart
                    </ NavLink >
                    <NavLink to="#contact" className={`my-2 duration-300 ${darkTheme && "hover:text-black"} hover:text-white hover:underline underline-offset-8`} onClick={() => setNavOpen(false)} >
                        Contact Us
                    </ NavLink>
                </div >
            }
        </>
    )
}

export default NavbarHome