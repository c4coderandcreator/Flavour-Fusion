import { useContext } from "react"
import { ThemeContext } from "../../App"
import AnchorLink from "react-anchor-link-smooth-scroll"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function FooterLanding() {

    const { darkTheme } = useContext(ThemeContext)

    const year = new Date().getFullYear();

    return (
        <>
            <hr />
            <div id="contact" className={`${darkTheme && "bg-gray-900 text-white"} text-center py-6 md:flex md:flex-col`}>
                <div className="md:flex md:justify-center md:items-baseline md:gap-24">
                    <div className="pt-5">
                        <p className="text-md md:text-xl font-bold md:mb-4 mb-2">
                            <AnchorLink href="#home">Flavour Fusion</AnchorLink>
                        </p>
                        <p className="text-sm md:text-base mb-6">Providing Quality!</p>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-10 ">
                        <p className="text-md md:text-xl font-bold">Useful Links</p>
                        <AnchorLink href="#home" className={`text-sm duration-300 ${darkTheme && "hover:text-lime-900"} hover:text-lime-500 hover:underline underline-offset-4 my-2 md:text-base `}>
                            Home
                        </AnchorLink>
                        <AnchorLink href="#about" className={`text-sm duration-300 ${darkTheme && "hover:text-lime-900"} hover:text-lime-500 hover:underline underline-offset-4 my-2 md:text-base `}>
                            About
                        </AnchorLink>
                        <AnchorLink href="#reviews" className={`text-sm duration-300 ${darkTheme && "hover:text-lime-900"} hover:text-lime-500 hover:underline underline-offset-4 my-2 md:text-base `}>
                            Our Reviews
                        </AnchorLink>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6 md:mb-10 ">
                        <p className="text-md md:text-xl font-bold mb-2">Our Socials</p>
                        <div className="flex justify-center items-center gap-3 cursor-pointer">
                            <GitHubIcon />
                            <LinkedInIcon />
                            <XIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xs text-gray-500">&copy; {year} FlavourFusion. All rights reserved</p>
                </div>
            </ div>
        </>
    )
}
